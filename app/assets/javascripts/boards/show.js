(function() {
  if (App.article !== undefined) {
    console.log("disconnecting", App.article);
    App.article.disconnected();
    delete App.article;
  }
  App.article = App.cable.subscriptions.create({
    channel: "BoardChannel",
    board_id: window.board_id
  }, {
    connected: function() {
      console.log("BoardChannel room connected", window.board_id);
    },
    received: function(data) {
      $('#title').text(data['title']);
      $('#contents').text(data['contents']);
    },
    disconnected: function() {
      console.log("BoardChannel room disconnected");
    }
  });

}).call(this);