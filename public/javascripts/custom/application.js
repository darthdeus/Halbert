window.App = Ember.Application.create({
  ready: function(){
    console.log("Created App namespace");
  },

  Router: Ember.Router.extend({
  })
});

App.initialize();
