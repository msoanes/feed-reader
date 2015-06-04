NewsReader.Views.FeedNew = Backbone.View.extend({
  template: JST['feeds/form'],

  events: {
    'submit form': 'createFeed'
  },

  render: function () {
    var renderedContent = this.template({ feed: this.model });
    this.$el.html(renderedContent);
    return this;
  },

  createFeed: function(event) {
    event.preventDefault();
    event.target.reset();
    var data = $(event.target).serializeJSON();
    console.log(data);
    this.model.save(data, {
      success: function () {
        NewsReader.feeds.add(this.model);
        Backbone.history.navigate('#/feeds/' + this.model.id);
      }.bind(this)
    });
  }
});
