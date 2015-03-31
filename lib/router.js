Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  // waitOn: function() { return Meteor.subscribe('clients'); }
});

Router.route('/', {name: 'clientlist'});

Router.route('/login', {name: 'loginPage'});

Router.route('/caselist', {name: 'caselist'});

Router.route('/commentslist', {name: 'commentslist'});

Router.route('/clients/:_id', {
  name: 'clientPage',
  data: function() { return Clients.findOne(this.params._id); }
});

Router.route('/cases/:_id', {
  name: 'casePage',
  data: function() { return Cases.findOne(this.params._id); }
});

Router.route('/comments/:_id', {
  name: 'commentPage',
  data: function() { return Comments.findOne(this.params._id); }
});


Router.route('/addNewCase', {name: 'addNewCase'});
Router.route('/addNewClient', {name: 'addNewClient'});
Router.route('/addNewComment', {name: 'addNewComment'});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction('dataNotFound', {only: 'clientPage'});
Router.onBeforeAction(requireLogin, {only: 'addNewClient',});


