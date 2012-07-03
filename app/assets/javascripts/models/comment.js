var Comment = Backbone.Model.extend({

  // Routes
  // /comments  - index, create
  // /comments/1 - show, update
  urlRoot: '/comments',

  validate: function(attrs) {
    if (!attrs.content) {
      return "Content must be defined.";
    }
  }
});