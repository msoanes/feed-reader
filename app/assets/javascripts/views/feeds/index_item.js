NewsReader.Views.FeedIndexItem = Backbone.View.extend({
  template: JST['feeds/index_item'],

  events: {
    'click button.delete': 'deleteFeed',
    'click': 'visitFeed'
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  tagName: 'a',

  className: 'list-group-item',

  render: function () {
    console.log('rendering');
    var renderedContent = this.template({feed: this.model});
    this.$el.html(renderedContent);
    return this;
  },

  deleteFeed: function (event) {
    event.stopPropagation();
    console.log("In deleteFeed");
    // event.preventDefault();
    this.model.destroy();
  },

  visitFeed: function (event) {
    Backbone.history.navigate('#/feeds/' + this.model.id);
  }
});
