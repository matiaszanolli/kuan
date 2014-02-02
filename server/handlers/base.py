import tornado

class BaseHandler(tornado.web.RequestHandler):
    def get_current_user(self):
        user_json = self.get_secure_cookie("chatdemo_user")
        if not user_json: return None
        return tornado.escape.json_decode(user_json)