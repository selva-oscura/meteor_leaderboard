Template.leaderboard.helpers({
  player: function(){
    var currentUserId = Meteor.userId();
    return PlayersList.find({}, {sort:{score:-1, name: 1}});
  },
  'selectedClass': function(){
    var playerId = this._id;
    var selectedPlayer = Session.get('selectedPlayer');
    if(playerId === selectedPlayer){
      return 'selected';
    }
  },
  otherHelperFunction: function(){
    return "some other function";
  },
  showSelectedPlayer: function(){
    var selectedPlayer = Session.get('selectedPlayer');
    return PlayersList.findOne(selectedPlayer);
  }
});