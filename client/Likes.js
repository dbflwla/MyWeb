Router.route('/Likes', 'Likes');

Template.Likes.helpers({
  likeList: function() {
    return Likes.find().fetch();
  }
});
