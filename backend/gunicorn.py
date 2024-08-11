"""gunicorn WSGI server configuration"""

from multiprocessing import cpu_count
from gevent import monkey

monkey.patch_all()


def max_workers():
    return cpu_count() + 1


bind = "unix:/var/run/gunicorn/backend.socket"
pidfile = "/var/run/gunicorn/backend.pid"
backlog = 2048
worker_connection = 1000
worker_class = "gevent"
workers = max_workers()
loglevel = "debug"
accesslog = "/home/ubuntu/log/backend.access.log"
errorlog = "/home/ubuntu/log/backend.error.log"
timeout = 300
