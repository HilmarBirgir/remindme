# encoding=utf-8

import os

from flask import Flask

app = Flask(__name__)
app.config.from_object('remindme.config.%s' % os.environ.get('REMINDME_CONFIG', 'production'))

from remindme.views import *

if __name__ == '__main__':
    # Bind to PORT if defined, otherwise default to 5000.
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)

