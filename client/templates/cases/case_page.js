Meteor.subscribe('comments');


Template.caseItem.helpers({
  comments: function(){
    return Comments.find({caseID: this._id});
  }
});


Template.casePage.rendered = function () {
    $('#addcomment').click(function(){
    $('#add-comment-form').toggleClass('hidden');
  });
};



Template.casePage.events({
  'submit form': function(e) {
    e.preventDefault();

    var commentItem = {
      subject: $(e.target).find('[name=subject]').val(),
      body: $(e.target).find('[name=body]').val(),
      caseID: $(e.target).find('[name=caseID]').attr('data-CaseID'),
      date: new Date()
    };

    commentItem._id = Comments.insert(commentItem);
    $('#add-comment-form').trigger('reset');
    $('#add-comment-form').toggleClass('hidden');
  }
});

Template.commentBlock.helpers({
  dateMoment: function(){
    return moment(this.date).fromNow();
  }
})