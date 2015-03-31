Template.addNewClient.events({
  'submit form': function(e) {
    e.preventDefault();

    var client = {
      company: $(e.target).find('[name=company]').val(),
      url: $(e.target).find('[name=url]').val(),
      phone: $(e.target).find('[name=phone]').val()
    };

    client._id = Clients.insert(client);
    Router.go('clientPage', client);
  }
});