var CommentView = Backbone.View.extend({
  tagName: "li",

  events: {
    'click .edit': 'makeEditable',
    'click .done': 'save'
  },

  editable: false,

  initialize: function() {
    this.model.bind("change", this.commentUpdated, this);
  },

  makeEditable: function() {
    this.editable = true;
    this.render();
  },

  commentUpdated: function() {
    this.editable = false;
    this.render();
  },

  save: function() {
    this.model.set({content: this.$(".content").val()});
    this.model.save();
  },

  render: function() {
    if (this.editable) {
      this.$el.html(window.JST["templates/edit_comment"](this.model.toJSON()));
    } else {
      this.$el.html(window.JST["templates/comment"](this.model.toJSON()));
    }
    return this;
  }
});

var CommentListView = Backbone.View.extend({
  el: "body",

  events: {
    'click .add': 'newComment'
  },

  initialize: function() {
    this.collection.bind("add", this.addComment, this);
    this.collection.bind("reset", this.resetComments, this);
  },

  newComment: function() {
    this.collection.add(new Comment({content: 'Blah'}));
  },

  addComment: function(comment) {
    var view = new CommentView({model: comment});
    this.$(".comment-list").append(view.render().el);
  },

  resetComments: function(comments) {
    this.render();
    var that = this;
    _.each(comments.models, function(comment) {
      that.addComment(comment);
    });
  },

  render: function() {
    this.$el.html(window.JST["templates/comment_list"]());
  }
});