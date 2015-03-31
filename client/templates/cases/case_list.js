Meteor.subscribe('cases');

  Template.caselist.helpers({
    cases: function(){
      return Cases.find();
    }
  });