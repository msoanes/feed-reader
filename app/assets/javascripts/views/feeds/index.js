NewsReader.Views.FeedsIndex = Backbone.CompositeView.extend({
  template: JST['feeds/index'],

  initialize: function () {
    this.collection.each(function(feed) {
      var subView = new NewsReader.Views.FeedIndexItem({model: feed});
      this.addSubview('ul.feeds', subView);
    }.bind(this));

    this.listenTo(this.collection, 'add', this.updateSubview);
    this.listenTo(this.collection, 'remove', this.removeFeed);
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {
    var renderedContent = this.template({ feeds: this.collection });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  updateSubview: function(model) {
    var subView = new NewsReader.Views.FeedIndexItem({model: model});
    this.addSubview('ul.feeds', subView);
  },

  removeFeed: function(model) {
    console.log('Removing feed');
    this.removeModelSubview('ul.feeds', model);
  }
});
