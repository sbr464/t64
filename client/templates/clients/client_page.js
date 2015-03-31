Template.clientPage.helpers({
  cases: function(){
    return Cases.find({company: this.company});
  }
});