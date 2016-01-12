Template.header.helpers({
    email: function() {
        return Meteor.user().emails[0].address;
    }
});
Template.header.events({
    "click [name=Join]": function(evt, tmpl) {
        $("#myModal").modal('show');
    },
    "click [name=Logout]": function(evt, tmpl) {
        Meteor.logout();
    },
    "click [name=Login]": function(evt, tmpl) {
        var ID = $('[name=ID]').val();
        var PW = $('[name=PW]').val();
        if(!ID) {
            return alert('ID를 입력해주세요.');
        }
        if(!PW) {
            return alert('PW를 입력해주세요.');
        }
        Meteor.loginWithPassword(ID, PW);
    }
});