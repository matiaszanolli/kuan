$(document).ready(function()
{
  var game = require('./game'),
  profiler_enabled = (document.getElementById('profile') !== null);

  // Set up the graphics system

  var screen_ctx = document.getElementById('c').getContext('2d');

  var screen_ui = $('#c');

  var w = document.getElementById('c').width;
  var h = document.getElementById('c').height;

  var render_ctx, render_canvas;
  if (game.options_flags.double_buffer)
  {
    // Create temporary canvas for double-buffering
    render_canvas = document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas');
    render_canvas.width = w;
    render_canvas.height = h;
    render_ctx = render_canvas.getContext('2d');
  }
  else
  {
    // Draw directly onto the screen
    render_ctx = screen_ctx;
  }

  if (game.options_flags.opera_context)
  {
    try
    {
      var gctx = document.getElementById('c').getContext('opera-2dgame');
      if (gctx)
      {
        gctx.lockCanvasUpdates(true);
      }
    }
    catch (e)
    {
      // context not available
    }
  }

  var dctx;
  if (game.options_flags.map && document.getElementById('dc'))
  {
    dctx = document.getElementById('dc').getContext('2d');
    dctx.lineWidth = 1/map_scale;
    dctx.translate(map_shift_x+dctx.canvas.width/2, map_shift_y+dctx.canvas.height/2);
    dctx.scale(map_scale, map_scale);
  }

  // Allow resolution changes

  window.change_res = function (new_w, new_h)	{
    w = new_w;
    h = new_h;
    if (render_ctx != screen_ctx)
    {
      render_canvas.width = w;
      render_canvas.height = h;
    }
    document.getElementById('c').width = w;
    document.getElementById('c').height = h;
    game.preprocess_map(render_ctx, h);
  };

  //////
/*
  if (document.getElementById('options'))
  {
    var options = [
      [ 'gradient_surfaces', 'Gradient floor/ceiling', [0, 1], function(){ preprocess_map(ctx, h); } ],
      [ 'lighting_workaround', 'Alternate lighting (workaround for Opera)', [0, 1] ],
      [ 'horizontal_scale', 'Horizontal raycasting scale', [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32] ],
      [ 'low_textures', 'Low detail textures', [1, 0], function(){ flush_textures(); preprocess_map(ctx, h); } ]
    ];
    var options_html = '';
    for (var o in options)
    {
      options_html += '<select id="options__'+options[o][0]+'">';
      var choices = options[o][2];
      for (var c in choices)
      {
        options_html += '<option value="'+choices[c]+'">'+choices[c]+'</option>';
      }
      options_html += '</select> - <b>'+options[o][1]+'</b><br/>';
    }
    document.getElementById('options').innerHTML = options_html;
    for (var o in options)
    {
      var obj = document.getElementById('options__'+options[o][0]);
      for (var i in obj.options)
      {
        if (obj.options[i].value == options_flags[options[o][0]])
        {
          obj.selectedIndex = i;
          break;
        }
      }
      (function(){
        var option = options[o];
        obj.onchange = function (e)
        {
          options_flags[option[0]] = Math.floor(this.options[this.selectedIndex].value);
          if (option[3]) { option[3](); }
        };
      })();
    }
  }
*/

  //////

  // Per-frame operation and pausing

  var last_frame_time = null; // should only be non-null while the game is running (not paused)
  function tick()
  {
    try
    {
      var now = new Date();
      var dt = Math.max(0, now - (last_frame_time || now)) / 1000;
      last_frame_time = now;
      // TODO: smoother updates, particularly on Windows where the timer
      // is limited to ~16msec resolution

      game.game_tick(render_ctx, dctx, gctx, w, h, keys, dt);
      if (render_ctx !== screen_ctx)
      {
        screen_ctx.drawImage(render_canvas, 0, 0);
      }

      profile_report();
      framerate_update();
      write_status_data(status_data);
    }
    catch (e)
    {
      debug(e);
    }
  }

  var paused = true;

  var frame_interval;
  function toggle_paused()
  {
    paused = !paused;
    if (paused)
    {
      render_paused(screen_ctx, w, h);
      clearInterval(frame_interval);
      last_frame_time = null;
    }
    else
    {
      frame_interval = setInterval(tick, game.editor_enabled ? 100 : 0);
    }
  }

  document.getElementById('pause').onclick = toggle_paused;

  var status_data = {};

  //////

  // Set up input handlers

  $('#c').mousemove(function(event) {
    if (Math.abs(event.pageX - game.current_x) > 10) {
      // Si hay un cambio grande de posicion
      game.current_x = 0;
    } else {
      game.current_x = event.pageX - game.current_x;
    }
  });


  document.addEventListener("mousemove", function(e){
    cursor_move.x = e.movementX || e.mozMovementX || e.webkitMovementX || 0;
    cursor_move.y = e.movementY || e.mozMovementY || e.webkitMovementY || 0;
    status_data.move_x = cursor_move.x;
    status_data.move_y = cursor_move.y;
  }, false);
  if (dctx)
  {
    /*document.getElementById('dc').onmousemove = function(e)
    {
      var x = e.clientX-this.offsetLeft;
      var y = e.clientY-this.offsetTop;
      status_data.mouse_x = x;
      status_data.mouse_y = y;
      x -= player.x*map_scale + map_shift_x + dctx.canvas.width/2;
      y -= player.y*map_scale + map_shift_y + dctx.canvas.height/2;
      var mag = Math.sqrt(x*x + y*y);
      x /= mag;
      y /= mag;
      player.dx = x;
      player.dy = y;
    };*/

    document.getElementById('dc').onclick = function(e)
    {
      var x = e.clientX-this.offsetLeft;
      var y = e.clientY-this.offsetTop;
      move_camera((x - map_shift_x - dctx.canvas.width/2) / map_scale-player.x,
                  (y - map_shift_y - dctx.canvas.height/2) / map_scale-player.y);
    };
  }

  var keys = {};
  document.addEventListener('keydown', function(e)
  {
    keys[e.keyCode] = true;
  },
  false);

  document.addEventListener('keyup', function(e)
  {
    keys[e.keyCode] = false;
  },
  false);

  document.addEventListener('keypress', function(e)
  {
    // TODO: the keycode values are completely nonstandard - is
    // there a more reliable way of handling them?

    var handled = true;
    switch (e.keyCode)
    {
    case DOM_VK.LEFT: case DOM_VK.RIGHT:
    case DOM_VK.UP: case DOM_VK.DOWN:
    case DOM_VK.PAGE_UP: case DOM_VK.PAGE_DOWN:
    case DOM_VK.COMMA: case DOM_VK.PERIOD:
    case DOM_VK.DELETE:
      // Browsers might want to do something with these keys
      // (especially Opera) - but we want to use them instead,
      // so prevent the default action
      handled = false; // don't want to stop propagation to game's key handlers
      e.preventDefault(); // do want to stop the browser's default
      break;

    case DOM_VK.PAUSE:
      toggle_paused();
      break;

    case DOM_VK.HOME: case DOM_VK.END:
      player.dh = 0;
      break;

    default:
      switch (e.which)
      {
      case 116: // T
        if (e.ctrlKey)
        {
          // let people do ctrl+t to open tabs
          handled = false;
        }
        else
        {
          fpsgraph_enable(true);
        }
        break;

      case 32: // SPACE
      case 44: case 46: // comma, period
      case 120: case 99: // x, c
        handled = false;
        e.preventDefault();
        break;

      default:
        handled = false;
        break;
      }
    }

    if (handled)
    {
      e.preventDefault();
      e.stopPropagation();
    }
  },
  false);

  //////

  if (level)
  {
    game.on_map_loaded(render_ctx, h);
  }
  else
  {
    // If no level is loaded, we load the first level
    // TODO Levels ahould be loaded dynamically
    load_from_file_store_async('map_test0',
      function (obj)
      {
        level = obj;
        game.on_map_loaded(render_ctx, h);
      }
    );
  }

  //////

  if (ui_enabled)
  {
    try
    {
      ui.init();
    }
    catch (e)
    {
      alert('UI initialisation failure: ' + e);
    }
  }

  //////

  // Start the game
  toggle_paused();

}); // $(document).ready

var previousError;

function debug(str)
{
  $('#status').val(str);
  if (str.stack != previousError) {
    console.log(str.stack);
    previousError = str.stack;
  }
}
