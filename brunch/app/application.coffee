window.app = {}

class window.Bubble extends Backbone.Model

class window.Bubbles extends Backbone.Collection

class window.BubbleView extends Backbone.View

  el: ".container"

  events:
    "click .about": "about"
    "click .newsfeed": "newsfeed"
    "click .staff": "staff"

  about:(e)->
    $('#about').removeClass('hide')
    $('#staff').addClass('hide')
    $('#newsfeed').addClass('hide')

  newsfeed:(e)->
    $('#newsfeed').removeClass('hide')
    $('#about').addClass('hide')
    $('#staff').addClass('hide')

  staff:(e)->
    $('#staff').removeClass('hide')
    $('#about').addClass('hide')
    $('#newsfeed').addClass('hide')


