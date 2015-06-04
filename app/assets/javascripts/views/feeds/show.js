NewsReader.Views.FeedShow = Backbone.View.extend({
  template: JST['feeds/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },


  render: function () {
    console.log(this.model);
    var renderedContent = this.template({ feed: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
