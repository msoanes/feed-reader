NewsReader.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'root',
    'feeds/new': 'feedNew',
    'feeds/:id': 'feedShow'
  },

  root: function () {
    this._currentView && this._currentView.remove();
    this._currentView = null;
  },

  feedShow: function (id) {
    var feed = NewsReader.feeds.getOrFetch(id);
    feed.fetch();
    var showView = new NewsReader.Views.FeedShow({
      model: feed
    });

    this._swapView(showView);
  },

  feedNew: function () {
    var feed = new NewsReader.Models.Feed();
    var newView = new NewsReader.Views.FeedNew({
      model: feed
    });
    this._swapView(newView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(this._currentView.render().$el);
  }
});
