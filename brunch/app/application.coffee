window.app = {}

class window.Bubble extends Backbone.Model

class window.Bubbles extends Backbone.Collection
  
class window.BubbleView extends Backbone.View
  
  el: ".container"

  events:
    "click .left": "left"
    "click .right": "right"
    "click .right_about": "right_about"
    "click .left_staff": "left_staff"
  
  left:(e)->
    ($ @el).hide("slide", { direction: 'right' }, 1)
    $('#about').show("slide", { direction: 'left' }, 1000)

  right:(e)->
    ($ @el).hide("slide", { direction: 'right' }, 1)
    $('#staff').show("slide", { direction: 'right' }, 1000)

  right_about:(e)->
    ($ @el).hide("slide", { direction: 'left' }, 1)
    $('#newsfeed').show("slide", { direction: 'right' }, 1000)

  left_staff:(e)->
    ($ @el).hide("slide", { direction: 'right' }, 1)
    $('#newsfeed').show("slide", { direction: 'left' }, 1000)


