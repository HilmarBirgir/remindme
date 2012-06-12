# encoding=utf-8

import os, json
from restkit import request


def tumblr(username,count,api_key):
    url = 'http://api.tumblr.com/v2/blog/'+username+'.tumblr.com/posts/json?filter=text&limit='+str(count)+'&api_key='+api_key
    r = request(url)
    s = json.loads(r.body_string())['response']['posts']
    blogs = []
    tumblr_dates = []
    titles = []
    for i in range(count):
        k = s[i]
        titles.append(k['title'])
        dagsetning = k['date']
        ar = dagsetning[0:4]
        manudur = dagsetning[5:7]
        dagur = dagsetning[8:10]
        date = '('+dagur+'.'+manudur+' '+ar+')'
        tumblr_dates.append(date)
        blogs.append(k['body'])
    return blogs, tumblr_dates, titles