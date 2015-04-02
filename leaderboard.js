if (Meteor.isClient) {

  console.log("Hello Client");
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.leaderboard.helpers({
    counter: function () {
      return Session.get('counter');
    },
    player: function(){
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

  Template.leaderboard.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    },
    'click .player':function() {
      // console.log('you clicked!');
      var playerId = this._id;
      Session.set('selectedPlayer', playerId);
      // Session.set('selectedPlayer', this._id);
      // var selectedPlayer = Session.get('selectedPlayer');
      console.log(playerId);
    },
    'click .increment': function(){
      var selectedPlayer = Session.get('selectedPlayer');
      console.log(selectedPlayer);
      PlayersList.update(selectedPlayer, {$inc: {score: 5}});
    },
    'click .decrement': function(){
      var selectedPlayer = Session.get('selectedPlayer');
      console.log(selectedPlayer);
      PlayersList.update(selectedPlayer, {$inc: {score: -5}});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    console.log("Hello Server");
  });
}


PlayersList = new Mongo.Collection("players");