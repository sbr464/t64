Meteor.subscribe('comments');


Template.addNewComment.events({
  'submit form': function(e) {
    e.preventDefault();

    var commentItem = {
      subject: $(e.target).find('[name=subject]').val(),
      body: $(e.target).find('[name=body]').val(),
      caseID: $(e.target).find('[name=caseID]').attr('data-CaseID'),
      date: new Date()
    };

    commentItem._id = Comments.insert(commentItem);
    Router.go('/');
  }
});