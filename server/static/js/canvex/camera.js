var Camera = function(){
  // position of eye
  this.x = 0;
  this.y = 0;
  this.z = 0;
  // viewing direction (unit vector)
  this.dx = 0;
  this.dy = 0;

  this.dh = 0; // vertical view offset
  this.s = null; // current sector
  this.t = 0; // current time (seconds since start of game)
};

Camera.prototype.rotate = function(da)
{
  var a = Math.atan2(player.dx, player.dy);
  a -= da;
  player.dx = Math.sin(a);
  player.dy = Math.cos(a);
};

Camera.prototype.move = function(dx, dy)
{
  var d = Math.sqrt(dx*dx + dy*dy);
  dx /= d;
  dy /= d;
  var step_size = player.radius / 2;
  while (d >= step_size)
  {
    this.move_by(dx*step_size, dy*step_size, 1);
    d -= step_size;
  }
  if (d > 0)
  {
    this.move_by(dx*d, dy*d, 1);
  }
}


// (dx,dy) is total displacement, t is time in seconds [which is relevant when we add gravity...]
Camera.prototype.move_by = function(dx, dy, t)
{
  /*
  Theoretical algorithm:
  - Find all sectors which are 'close' (reachable from edges within r+d of camera).
  - Construct list of edges and vertices, to collide the camera-circle against.
    (This may get things wrong when 'close' sectors are overlapping. So limit the
    distance 'd' to some small maximum, and tell people to not overlap nearby
    sectors.)
  - Push edges inwards by r and expand vertices into circles of size r,
    then collide a camera-point against them.
  - (Assert that d < r/2). Then move the camera to the end point, find any walls it's
    now intersecting, and push the camera out.
  */

  var radius = player.radius;

  var d = Math.sqrt(dx*dx + dy*dy);
  var nearby_sectors = game.find_nearby_sectors(player.x, player.y, player.s, d+radius);

  for (var s = 0; s < nearby_sectors.length; ++s)
  {
    for (var e = 0; e < nearby_sectors[s].edges.length; ++e)
    {
      var edge = nearby_sectors[s].edges[e];

      // Try colliding against solid/portal wall:

      // If this is a portal wall, check whether we can fit between
      // new sector's floor and ceiling
      if (edge.dest &&
        (player.z+player.maxstep >= edge.dest.floor_height && player.z+player.height <= edge.dest.ceiling_height))
      {
        // okay - can pass
      }
      else
      {
        // Check whether we're on the inside of this edge
        var dir = dx*(edge.y1-edge.y0) - dy*(edge.x1-edge.x0);
        if (dir > 0)
        {
          // Check whether we're too close to the edge
          var dist = point_line_distance_circle(player.x+dx, player.y+dy, edge.x0, edge.y0, edge.x1, edge.y1);
          if (dist < radius)
          {
            // Push outwards along the edge's normal
            var d = radius-dist;
            var nx = edge.y0 - edge.y1;
            var ny = edge.x1 - edge.x0;
            var n = d / Math.sqrt(nx*nx + ny*ny);
            dx += nx*n;
            dy += ny*n;
          }
        }


        // TODO: this is quite broken - it's possible to fly up the corners
        // of objects by running into them. The stuff below doesn't
        // actually help (now that the above look is using _circle instead of _perp),
        // so don't bother with it.

        /*
        // Check whether we're inside circles around the edge's vertices
        // (TODO: this does far too much redundant work)

        var dist = point_distance(player.x+dx, player.y+dy, edge.x0, edge.y0);
        if (dist < radius)
        {
          // Push outwards along the edge's normal
          var d = radius-dist;
          var nx = edge.y0 - edge.y1;
          var ny = edge.x1 - edge.x0;
          var n = d / Math.sqrt(nx*nx + ny*ny);
          dx += nx*n;
          dy += ny*n;
        }

        var dist = point_distance(player.x+dx, player.y+dy, edge.x1, edge.y1);
        if (dist < radius)
        {
          // Push outwards along the edge's normal
          var d = radius-dist;
          var nx = edge.y0 - edge.y1;
          var ny = edge.x1 - edge.x0;
          var n = d / Math.sqrt(nx*nx + ny*ny);
          dx += nx*n;
          dy += ny*n;
        }
        */
      }
    }
  }

  // Now player.(x,y) + (dx,dy) is a valid place to be.

  player.x += dx;
  player.y += dy;

  // Work out which sector it is in. (This is probably more robust than
  // trying to work out which boundaries have been crossed, because the
  // path dx,dy might be jumping outside the level geometry.)

  var new_sectors;

  for (var s = 0; s < nearby_sectors.length; ++s)
  {
    if (point_is_in_polygon(player.x, player.y, nearby_sectors[s]))
    {
      player.s = nearby_sectors[s];
      break;
    }
  }
};

module.exports = new Camera();
