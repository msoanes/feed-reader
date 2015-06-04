window.NewsReader = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    alert('Hello from Backbone!');
    NewsReader.feeds = new NewsReader.Collections.Feeds();
    NewsReader.feeds.fetch();
    var router = new NewsReader.Routers.Router({ $rootEl: $('div#content') });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  NewsReader.initialize();
});
