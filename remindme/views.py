# encoding=utf-8

from flask import render_template

from .app import app
from .tumblr import tumblr
from .twitter import twitter

api_key = 'GsoVsAmVFvxGehP0kN2s6fs3DsoNfpAR19bdcTuk0F2PCpGswf'


@app.route('/', methods=['GET'])
def index():
    blogs, tumblr_dates, titles = tumblr('eskitech', 1, api_key)
    tweets, twitter_dates = twitter('EskiTech', 1)
    return render_template('index.html', blogs=blogs, titles=titles, tumblr_dates=tumblr_dates, tweets=tweets, twitter_dates=twitter_dates)


@app.route('/blog', methods=['GET'])
def blogs():
    blogs, tumblr_dates, titles = tumblr('eskitech', 2, api_key)
    tweets, twitter_dates = twitter('EskiTech', 1)
    return render_template('blogs.html', blogs=blogs, titles=titles, tumblr_dates=tumblr_dates, tweets=tweets, twitter_dates=twitter_dates)

