NewsReader.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    '': 'feedIndex',
    'feeds/:id': 'feedShow'
  },

  feedIndex: function () {
    var indexView = new NewsReader.Views.FeedsIndex({
      collection: NewsReader.feeds
    });
    this._swapView(indexView);
  },

  feedShow: function (id) {
    alert(id);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(this._currentView.render().$el);
  }
});
