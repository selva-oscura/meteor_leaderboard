Template.leaderboard.events({
  'click .player':function() {
    var playerId = this._id;
    Session.set('selectedPlayer', playerId);
  },
  'click .increment': function(){
    var selectedPlayer = Session.get('selectedPlayer');
    Meteor.call('udpatePlayerScore', selectedPlayer, 5);
  },
  'click .decrement': function(){
    var selectedPlayer = Session.get('selectedPlayer');
    Meteor.call('udpatePlayerScore', selectedPlayer, -5);
  },
  'click .removePlayer': function(){
    var selectedPlayer = Session.get('selectedPlayer');
    Meteor.call('removePlayerData', selectedPlayer);
  }
});
