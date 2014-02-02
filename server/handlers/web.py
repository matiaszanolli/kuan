import tornado
from tornado import gen
from handlers.base import BaseHandler

class MainHandler(BaseHandler):
#     @tornado.web.authenticated
    def get(self):
        self.render("index.html")


class AuthLoginHandler(BaseHandler, tornado.auth.GoogleMixin):
    @gen.coroutine
    def get(self):
        if self.get_argument("openid.mode", None):
            user = yield self.get_authenticated_user()
            self.set_secure_cookie("kuan_user",
                                   tornado.escape.json_encode(user))
            self.redirect("/")
            return
        self.authenticate_redirect(ax_attrs=["name"])


class AuthLogoutHandler(BaseHandler):
    def get(self):
        self.clear_cookie("kuan_user")
        self.write("You are now logged out")