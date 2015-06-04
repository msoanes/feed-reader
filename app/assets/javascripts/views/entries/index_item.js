NewsReader.Views.EntryIndexItem = Backbone.View.extend({
  template: JST['entries/index_item'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },
  
  tagName: 'li',

  render: function () {
    var renderedContent = this.template({entry: this.model});
    this.$el.html(renderedContent);
    return this;
  }
});
