PlayersList = new Mongo.Collection("players");

// deprecated after shifting all client content to the client directories
// if (Meteor.isClient) {
  // console.log("Hello Client");
  // counter starts at 0
  // Session.setDefault('counter', 0);

  // deprecated after shifting to client/subscriptions.js
  // Meteor.subscribe('thePlayers');
  // // deprecated after switching to publish/subscribe
  // // PlayersList.find().fetch();

  // deprecated after shifting to client/helpers/leaderboard_helpers.js
  // Template.leaderboard.helpers({
  //   player: function(){
  //     // deprecated  after creation of user accounts
  //     // return PlayersList.find({}, {sort:{score:-1, name: 1}});
  //     var currentUserId = Meteor.userId();
  //     // deprecated after adding publish and subscribe
  //     // return PlayersList.find(
  //     //   {createdBy: currentUserId}, 
  //     //   {sort:{score:-1, name: 1}}
  //     // );
  //     return PlayersList.find(
  //       {},
  //       {sort:{score:-1, name: 1}}
  //     );
  //   },
  //   'selectedClass': function(){
  //     var playerId = this._id;
  //     var selectedPlayer = Session.get('selectedPlayer');
  //     if(playerId === selectedPlayer){
  //       return 'selected';
  //     }
  //   },
  //   otherHelperFunction: function(){
  //     return "some other function";
  //   },
  //   showSelectedPlayer: function(){
  //     var selectedPlayer = Session.get('selectedPlayer');
  //     return PlayersList.findOne(selectedPlayer);
  //   }
  // });

  // deprecated after shifting to client/events/leaderboard_events.js
  // Template.leaderboard.events({
  //   'click .player':function() {
  //     // console.log('you clicked!');
  //     var playerId = this._id;
  //     Session.set('selectedPlayer', playerId);
  //     // Session.set('selectedPlayer', this._meteorid);
  //     // var selectedPlayer = Session.get('selectedPlayer');
  //     // console.log(playerId);
  //   },
  //   'click .increment': function(){
  //     var selectedPlayer = Session.get('selectedPlayer');
  //     // console.log(selectedPlayer);
  //     // deprecated after creation of incrementPlayerScore method
  //     // PlayersList.update(selectedPlayer, {$inc: {score: 5}});
  //     Meteor.call('udpatePlayerScore', selectedPlayer, 5);
  //   },
  //   'click .decrement': function(){
  //     var selectedPlayer = Session.get('selectedPlayer');
  //     // console.log(selectedPlayer);
  //     // deprecated after creation of decrementPlayerScore method
  //     // PlayersList.update(selectedPlayer, {$inc: {score: -5}});
  //     Meteor.call('udpatePlayerScore', selectedPlayer, -5);
  //   },
  //   'click .removePlayer': function(){
  //     var selectedPlayer = Session.get('selectedPlayer');
  //     // deprecated after creating removePlayerData method
  //     // PlayersList.remove(selectedPlayer);
  //     Meteor.call('removePlayerData', selectedPlayer);
  //   }
  // });

// deprecated after shifting to client/events/updatePlayers_events.js
  // Template.updatePlayers.events({
  //   // Original Version
  //   // 'submit form': function(event){
  //   //   event.preventDefault();
  //   //   var playerNameVar = event.target.playerName.value;
  //   //   PlayersList.insert({
  //   //     name: playerNameVar,
  //   //     score: 0
  //   //   });
  //   // }
  //   // Playing around with having multiple forms in one template (worked, but later switched to using the select and delete method as opposed to the )
  //   'submit #addPlayer': function(e){
  //     e.preventDefault();
  //     // console.log('form submitted');
  //     // console.log(e);
  //     // console.log(e.type);
  //     // console.log(e.target);
  //     // console.log(e.target.playerName);
  //     var playerNameVar = e.target.playerName.value;
  //     var currentUserId = Meteor.userId();
  //     console.log(playerNameVar);
  //     // deprecated after creation of insertPlayerData method on the server
  //     // PlayersList.insert({
  //     //   name: playerNameVar,
  //     //   score: 0,
  //     //   createdBy: currentUserId
  //     // });
  //     Meteor.call('insertPlayerData', playerNameVar);
  //     e.target.playerName.value = "";

  //   }
  //   // ,
  //   // 'submit #deletePlayer': function(e){
  //   //   e.preventDefault();
  //   //   var playerRecordName = e.target.playerName.value;
  //   //   var playerRecord = PlayersList.findOne({name: playerRecordName});
  //   //   PlayersList.remove(playerRecord._id);
  //   //   e.target.playerName.value = "";
  //   // }


  // });


// deprecated after creation of client/events/hello_events.js and client/helpers/hello_helpers.js
//   Template.hello.helpers({    
//     counter: function () {
//       return Session.get('counter');
//     }
//   });
//   Template.hello.events({
//     'click button': function () {
//       // increment the counter when button is clicked
//       Session.set('counter', Session.get('counter') + 1);
//     }    
//   });

// }


// deprecated after creation of server/methods.js and server/publish.js
// if (Meteor.isServer) {
  // Meteor.startup(function () {
    // code to run on server at startup
    // console.log("Hello Server");
    // console.log(PlayersList.find().fetch());
    // Meteor.publish('thePlayers', function(){
    //   // return PlayersList.find().fetch();
    //   var currentUserId = this.userId;
    //   return PlayersList.find({createdBy: currentUserId});
    // });
    // Meteor.methods({
    //   'sendLogMessage': function(){
    //     console.log('Hello World');
    //   },
    //   'insertPlayerData': function(playerNameVar){
    //     var currentUserId = Meteor.userId();
    //     PlayersList.insert({
    //       name: playerNameVar,
    //       score: 0,
    //       createdBy: currentUserId
    //     });
    //   },
    //   'removePlayerData': function(selectedPlayer){
    //     // console.log('supposed to remove', selectedPlayer);
    //     PlayersList.remove(selectedPlayer);
    //   },
    //   'udpatePlayerScore': function(selectedPlayer, score){
    //     PlayersList.update(selectedPlayer, {$inc: {score: score}});
    //   }
    //   // ,
    //   // 'decrementPlayerScore': function(selectedPlayer){
    //   //   PlayersList.update(selectedPlayer, {$inc: {score: -5}});
    //   // }
    // });
  // });
// }
