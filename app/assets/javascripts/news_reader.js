window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    NewsReader.feeds = new NewsReader.Collections.Feeds();
    NewsReader.feeds.fetch();

    var indexView = new NewsReader.Views.FeedsIndex({
      collection: NewsReader.feeds
    });

    $('div#sidebar').html(indexView.render().$el);
    var router = new NewsReader.Routers.Router({ $rootEl: $('div#content') });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
