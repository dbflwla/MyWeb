Template.Join.onRendered(function() {
    //$('#myModal').on('shown.bs.modal', function () {
    //  $('#myInput').focus();
    //})
});

Template.Join.events({
    'click #btnJoin': function(evt, tmpl) {
        var email = $("#inputEmail3").val()
        var pw = $('#inputPassword3').val()
        console.log(email);
        console.log(pw);

        options = {};
        options.username = email;
        options.email = email;
        options.password = pw;
        var rslt = Accounts.createUser(options);
        //console.log(rslt);
        //if(rslt) {
        //  alert('사용자 생성 완료');
        //}
        //else {
        //  alert('사용자 생성 실패');
        //}

        //options = {}
        //
        //options.username = _userId unless _userId is null
        //options.email = _email unless _email is null
        //options.password = _passWd unless _passWd is null
        //
        //options.profile = _profile
        //options.profile ?= {}
        //  rslt = Accounts.createUser options
        //unless rslt then return throw new Meteor.Error '사용자 생성 실패'
        //else return '사용자 생성 완료'
    }
});