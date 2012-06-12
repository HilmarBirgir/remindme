# encoding=utf-8

import os, json
from restkit import request

def twitter(username,count):
    url = 'https://api.twitter.com/1/statuses/user_timeline.json?include_entities=true&include_rts=true&screen_name='+username+'&count='+str(count)
    tweets = []
    twitter_dates = []
    r = request(url)
    k = json.loads(r.body_string())
    for i in range(count):
    	text = k[i]['text']
    	if k[i]['entities']['urls']:
    		link_info = k[i]['entities']['urls'].pop()
    		pos = link_info['indices']
    		text = text[:pos[0]]+'<a href="'+link_info['url']+'">'+text[pos[0]:pos[1]]+'</a>'+text[pos[1]:]
        tweets.append(text)
        twitter_dates.append(k[i]['created_at'][0:10])
    return tweets, twitter_dates,