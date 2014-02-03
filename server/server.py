import logging
import tornado.auth
import tornado.escape
import tornado.ioloop
import tornado.web
import tornado.wsgi
import os.path
import uuid
import wsgiref.simple_server
from handlers.urls import get_handlers


from tornado import gen
from tornado.options import define, options, parse_command_line

define("port", default=8888, help="run on the given port", type=int)

def main():
    parse_command_line()
    app = tornado.wsgi.WSGIApplication(
        get_handlers(),
        cookie_secret="__TODO:_GENERATE_YOUR_OWN_RANDOM_VALUE_HERE__",
        login_url="/auth/login",
        template_path=os.path.join(os.path.dirname(__file__), "templates"),
        static_path=os.path.join(os.path.dirname(__file__), "static"),
        xsrf_cookies=True,
        )
    server = wsgiref.simple_server.make_server('', options.port, app)
    server.serve_forever()
    print "Running on localhost:%d" % options.port


if __name__ == "__main__":
    main()
