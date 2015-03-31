Meteor.publish('clients', function() {
  return Clients.find();
});

Meteor.publish('cases', function() {
  return Cases.find();
});


Meteor.publish('comments', function() {
  return Comments.find();
});

