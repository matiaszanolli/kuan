module.exports = {
  physics: {
    gravity: 5
  },

  player: {
    speed: {
      walk : 1.5,
      strafe : 0.75,
      turn : 1.5,
      look : 1
    }
  },

  mipmap_max : 7,
  mipmap_min : 3,
  mipmap_enabled : 1,
  texture_u_repeat : 192/128,
  texture_v_repeat : 144/128,
  floor_u_repeat : 0.5,
  floor_v_repeat : 0.5,
  gradient_surfaces: 1,
  horizontal_scale: 8, // TODO: reimplement
  low_textures: 1, // TODO: reimplement
  map: 1, // TODO: reimplement
  draw_from_canvas: 0,
  draw_pattern_walls: 0, // Opera: no difference; FF1.5: no diff; FF2.0: no diff, or slightly slower?; FF3.0: ~10% slower but fixes black line between textures
  no_alpha_texture: 0,
  opera_context: 0, // doesn't work
  opera_hack: 1, // doesn't work either
  double_buffer: 1,
  textured_floors: 1, // only suitable for testing
  textured_ceilings: 0 // only suitable for testing
};
