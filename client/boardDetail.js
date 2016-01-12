Router.route('/boardDetail', {
  path: '/boardDetail/:_id',
  onRun: function() {
    Session.set('userId', this.params._id);
    this.next();
  }
});

Template.boardDetail.helpers({
  userObj: function() {
    var userId = Session.get('userId');
    var userObj = Boards.findOne({_id: userId});
    //Boards.find({_id: userId}).fetch();
    return userObj;
  },
  comments: function () {
    return Comments.find({});
  }
});

Template.boardDetail.events({
  'click [name=작성]':function(evt,tmpl){
    var obj = {};
    obj.작성자 = Meteor.user().emails[0].address;
    obj.내용 = $('[name = 내용]').val();

    Comments.insert(obj);
  }
});