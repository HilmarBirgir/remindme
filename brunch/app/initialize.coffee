application = require 'application'

$ ->
  window.app.collection = new window.Bubbles
  
  ($ ".content").find('.bubble').each ->
    model = new window.Bubble
    view = new window.BubbleView
      el: @, 
      model: model
    model.view = view

    window.app.collection.add model