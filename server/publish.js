Meteor.publish('thePlayers', function(){
  // return PlayersList.find().fetch();
  var currentUserId = this.userId;
  return PlayersList.find({createdBy: currentUserId});
});
