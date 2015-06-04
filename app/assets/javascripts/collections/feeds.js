NewsReader.Collections.Feeds = Backbone.Collection.extend({
  url: '/api/feeds',

  model: NewsReader.Models.Feed,

  getOrFetch: function (id, callback) {
    var collection = this;
    var model = this.get(id);
    if (typeof model === 'undefined') {
      model = new NewsReader.Models.Feed({id: id});
      model.fetch({
        success: function () {
          collection.add(model);
        }
      });
    }
    return model;
  }
});
