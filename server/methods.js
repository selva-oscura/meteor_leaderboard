Meteor.methods({
  'sendLogMessage': function(){
    console.log('Hello World');
  },
  'insertPlayerData': function(playerNameVar){
    var currentUserId = Meteor.userId();
    PlayersList.insert({
      name: playerNameVar,
      score: 0,
      createdBy: currentUserId
    });
  },
  'removePlayerData': function(selectedPlayer){
    PlayersList.remove(selectedPlayer);
  },
  'udpatePlayerScore': function(selectedPlayer, score){
    PlayersList.update(selectedPlayer, {$inc: {score: score}});
  }
});