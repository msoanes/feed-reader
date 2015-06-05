window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    NewsReader.feeds = new NewsReader.Collections.Feeds();
    NewsReader.feeds.fetch();

    this.indexView = new NewsReader.Views.FeedsIndex({
      collection: NewsReader.feeds
    });

    $('div#sidebar').html(this.indexView.render().$el);
    var router = new NewsReader.Routers.Router({ $rootEl: $('div#content') });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
