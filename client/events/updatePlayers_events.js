Template.updatePlayers.events({
  'submit #addPlayer': function(e){
    e.preventDefault();
    var playerNameVar = e.target.playerName.value;
    var currentUserId = Meteor.userId();
    Meteor.call('insertPlayerData', playerNameVar);
    e.target.playerName.value = "";

  }
});