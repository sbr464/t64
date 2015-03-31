  // helper template to access database and list clients
Meteor.subscribe('clients');


  Template.clientlist.helpers({
    clients: function(){
      return Clients.find();
    }
  });