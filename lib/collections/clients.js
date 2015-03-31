//creates new collection to store clients

Clients = new Mongo.Collection('clients');

/* Structure of collection:

Clients {
  company: 'string',
  url: 'string'
}

 */

Clients.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  }
});