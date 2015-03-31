  // helper template to access database and list clients
Meteor.subscribe('comments');


Template.commentslist.helpers({
  comments: function(){
    return Comments.find();
  }
});

