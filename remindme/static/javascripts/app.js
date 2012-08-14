(function(/*! Brunch !*/) {
  'use strict';

  if (!this.require) {
    var modules = {};
    var cache = {};
    var __hasProp = ({}).hasOwnProperty;

    var expand = function(root, name) {
      var results = [], parts, part;
      if (/^\.\.?(\/|$)/.test(name)) {
        parts = [root, name].join('/').split('/');
      } else {
        parts = name.split('/');
      }
      for (var i = 0, length = parts.length; i < length; i++) {
        part = parts[i];
        if (part == '..') {
          results.pop();
        } else if (part != '.' && part != '') {
          results.push(part);
        }
      }
      return results.join('/');
    };

    var getFullPath = function(path, fromCache) {
      var store = fromCache ? cache : modules;
      var dirIndex;
      if (__hasProp.call(store, path)) return path;
      dirIndex = expand(path, './index');
      if (__hasProp.call(store, dirIndex)) return dirIndex;
    };
    
    var cacheModule = function(name, path, contentFn) {
      var module = {id: path, exports: {}};
      try {
        cache[path] = module.exports;
        contentFn(module.exports, function(name) {
          return require(name, dirname(path));
        }, module);
        cache[path] = module.exports;
      } catch (err) {
        delete cache[path];
        throw err;
      }
      return cache[path];
    };

    var require = function(name, root) {
      var path = expand(root, name);
      var fullPath;

      if (fullPath = getFullPath(path, true)) {
        return cache[fullPath];
      } else if (fullPath = getFullPath(path, false)) {
        return cacheModule(name, fullPath, modules[fullPath]);
      } else {
        throw new Error("Cannot find module '" + name + "'");
      }
    };

    var dirname = function(path) {
      return path.split('/').slice(0, -1).join('/');
    };

    this.require = function(name) {
      return require(name, '');
    };

    this.require.brunch = true;
    this.require.define = function(bundle) {
      for (var key in bundle) {
        if (__hasProp.call(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    };
  }
}).call(this);
(this.require.define({
  "application": function(exports, require, module) {
    (function() {
  var __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  window.app = {};

  window.Bubble = (function(_super) {

    __extends(Bubble, _super);

    function Bubble() {
      Bubble.__super__.constructor.apply(this, arguments);
    }

    return Bubble;

  })(Backbone.Model);

  window.Bubbles = (function(_super) {

    __extends(Bubbles, _super);

    function Bubbles() {
      Bubbles.__super__.constructor.apply(this, arguments);
    }

    return Bubbles;

  })(Backbone.Collection);

  window.BubbleView = (function(_super) {

    __extends(BubbleView, _super);

    function BubbleView() {
      BubbleView.__super__.constructor.apply(this, arguments);
    }

    BubbleView.prototype.el = ".container";

    BubbleView.prototype.events = {
      "click .about": "about",
      "click .newsfeed": "newsfeed",
      "click .staff": "staff"
    };

    BubbleView.prototype.about = function(e) {
      $('#about').removeClass('hide');
      $('#staff').addClass('hide');
      return $('#newsfeed').addClass('hide');
    };

    BubbleView.prototype.newsfeed = function(e) {
      $('#newsfeed').removeClass('hide');
      $('#about').addClass('hide');
      return $('#staff').addClass('hide');
    };

    BubbleView.prototype.staff = function(e) {
      $('#staff').removeClass('hide');
      $('#about').addClass('hide');
      return $('#newsfeed').addClass('hide');
    };

    return BubbleView;

  })(Backbone.View);

}).call(this);

  }
}));
(this.require.define({
  "initialize": function(exports, require, module) {
    (function() {
  var application;

  application = require('application');

  $(function() {
    return new BubbleView;
  });

}).call(this);

  }
}));
