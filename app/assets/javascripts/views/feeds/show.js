NewsReader.Views.FeedShow = Backbone.CompositeView.extend({
  template: JST['feeds/show'],

  events: {
    'click button.refresh': 'refreshFeed'
  },

  initialize: function () {
    this.model.entries().each(function(entry){
      var subView = new NewsReader.Views.EntryIndexItem({model: entry});
      this.addSubview("ul.entries", subView);
    }.bind(this));

    this.listenTo(this.model.entries(), 'add', this.updateSubviews);
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var renderedContent = this.template({ feed: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  refreshFeed: function(event) {
    event.preventDefault();
    this.model.fetch();

  },

  updateSubviews: function(model) {
    var subView = new NewsReader.Views.EntryIndexItem({model: model});
    this.addSubview("ul.entries", subView);
  }
});
