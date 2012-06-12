# encoding=utf-8

import os

from flask import Flask, request, g

app = Flask(__name__)
app.config.from_object('remindme.config.%s' % os.environ.get('REMINDME_CONFIG', 'production'))

from remindme.views import *

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=app.config.get('PORT', 5000), debug=True)
