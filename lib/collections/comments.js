//creates new collection to store cases

Comments = new Mongo.Collection('comments');

/* Structure of collection:

Cases {
  company: 'string',
  url: 'string'
}

 */

Comments.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  }
});