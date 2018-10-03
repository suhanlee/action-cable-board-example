(function() {
  if (App.articleIndex !== undefined) {
    console.log("disconnecting", App.article);
    App.articleIndex.disconnected();
    delete App.articleIndex;
  }
  App.articleIndex = App.cable.subscriptions.create({
    channel: "BoardChannel"
  }, {
    connected: function() {
      console.log("BoardChannel connected");
    },
    received: function(data) {
      const command = data.command;
      const article = data.article;

      if (command === 'remove') {
        $(`tbody tr td.id-${article.id}`).parent().remove();
        return;
      }
      const newArticle = window.addNewArticle(article.title, article.contents, article.id);
      $('tbody').append(newArticle);
    },
    disconnected: function() {
      console.log("BoardChannel disconnected");
    }
  });

}).call(this);