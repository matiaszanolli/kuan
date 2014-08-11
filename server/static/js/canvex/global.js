
// Set browser-dependent defaults
/*if (navigator.userAgent.indexOf("Opera") != -1)
{
	// (Last tested with Opera 9.01)

	// Using drawImage from a canvas is much faster than from an image
	options_flags.draw_from_canvas = 1;
	// Opera doesn't do alpha blending of drawImage
	options_flags.no_alpha_texture = 1;
	// Opera repaints the screen at annoying times (in the middle of a frame),
	// particularly at low framerates. It'd be nice to use opera-2dgame
	// (via the opera_context flag) but that's broken, so use double-buffering
	// instead:
	options_flags.double_buffer = 1;
}
else // assume Firefox - I haven't tested it on anything else.
{
	// Using drawImage from a canvas is much slower than from an image, in FF1.5.
	// (No difference in FF2+)
	options_flags.draw_from_canvas = 0;

	if (options_flags.draw_pattern_walls)
	{
		options_flags.no_alpha_texture = 1; // because they don't seem to work on patterns
	}
}*/
