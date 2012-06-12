# encoding=utf-8

import datetime, locale, json

from jinja2 import TemplateNotFound
from flask import (render_template, request, session, flash, 
                   redirect, abort, url_for, current_app, jsonify)

from .app import app
from .tumblr import tumblr
from .twitter import twitter

api_key = 'GsoVsAmVFvxGehP0kN2s6fs3DsoNfpAR19bdcTuk0F2PCpGswf'

@app.route('/', methods=['GET'])
def index():
    return render_template('base.html')



