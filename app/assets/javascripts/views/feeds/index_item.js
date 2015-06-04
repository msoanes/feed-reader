NewsReader.Views.FeedIndexItem = Backbone.View.extend({
  template: JST['feeds/index_item'],

  events: {
    'click button.delete': 'deleteFeed'
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  tagName: 'li',

  className: 'list-group-item',

  render: function () {
    console.log('rendering');
    var renderedContent = this.template({feed: this.model});
    this.$el.html(renderedContent);
    return this;
  },

  deleteFeed: function (event) {
    console.log("In deleteFeed");
    // event.preventDefault();
    this.model.destroy();
  }
});
