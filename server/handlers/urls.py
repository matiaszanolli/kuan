from handlers.web import MainHandler, AuthLoginHandler, AuthLogoutHandler

def get_handlers():
    return [
        (r"/", MainHandler),
        (r"/auth/login", AuthLoginHandler),
        (r"/auth/logout", AuthLogoutHandler),
    ]