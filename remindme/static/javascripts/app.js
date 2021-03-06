(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return require(absolute);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    definition(module.exports, localRequire(name), module);
    var exports = cache[name] = module.exports;
    return exports;
  };

  var require = function(name) {
    var path = expand(name, '.');

    if (has(cache, path)) return cache[path];
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex];
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '"');
  };

  var define = function(bundle) {
    for (var key in bundle) {
      if (has(bundle, key)) {
        modules[key] = bundle[key];
      }
    }
  }

  globals.require = require;
  globals.require.define = define;
  globals.require.brunch = true;
})();

window.require.define({"application": function(exports, require, module) {
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
  
}});

window.require.define({"initialize": function(exports, require, module) {
  (function() {
    var application;

    application = require('application');

    $(function() {
      return new BubbleView;
    });

  }).call(this);
  
}});

