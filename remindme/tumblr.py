# encoding=utf-8

import os, json
import requests

def tumblr(username,count,api_key):
    url = 'http://api.tumblr.com/v2/blog/'+username+'.tumblr.com/posts/json?limit='+str(count)+'&api_key='+api_key
    r = requests.get(url)
    s = json.loads(r.text)['response']['posts']
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