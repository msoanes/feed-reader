NewsReader.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'feedIndex',
    'feeds/:id': 'feedShow'
  },

  feedIndex: function () {
    var feeds = NewsReader.feeds;
    var indexView = new NewsReader.Views.FeedsIndex({
      collection: feeds
    });
    this._swapView(indexView);
  },

  feedShow: function (id) {
    var feed = NewsReader.feeds.getOrFetch(id);
    feed.fetch();
    var showView = new NewsReader.Views.FeedShow({
      model: feed
    });

    this._swapView(showView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(this._currentView.render().$el);
  }
});
