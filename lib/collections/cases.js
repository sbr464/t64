//creates new collection to store cases

Cases = new Mongo.Collection('cases');

/* Structure of collection:

Cases {
  company: 'string',
  url: 'string'
}

 */

Cases.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  }
});