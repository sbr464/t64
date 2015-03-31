Template.addNewCase.events({
  'submit form': function(e) {
    e.preventDefault();

    var caseItem = {
      company: $(e.target).find('[name=company]').val(),
      subject: $(e.target).find('[name=subject]').val(),
      description: $(e.target).find('[name=description]').val(),
      priority: $(e.target).find('[name=priority]').val(),
      created: new Date()
    };

    caseItem._id = Cases.insert(caseItem);
    Router.go('casePage', caseItem);
  }
});


Template.addNewCase.helpers({
  clients: function(){
    return Clients.find();
  }
});