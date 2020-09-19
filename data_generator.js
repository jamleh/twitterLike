/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.html.
 */

//1//scheduleNextTweet - first function 

//2// generate random tweets on a random schedule

//3// utility function random user

//4// random tweet generator

//5// utility function for adding tweets to our data structures

// var writeTweet = function(message)
// set up data structures


window.streams = {};
streams.home = [];
streams.users = {};
streams.users.shawndrost = [];
streams.users.sharksforcheap = [];
streams.users.mracus = [];
streams.users.visitor = [];
streams.users.douglascalhoun = [];
window.users = Object.keys(streams.users);

// utility function for adding tweets to our data structures
var addTweet = function(newTweet){
  var username = newTweet.user;
  streams.users[username].push(newTweet);
  streams.home.push(newTweet);
};

// utility function
var randomElement = function(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  if(array[randomIndex]==='visitor') return randomElement(users)
  return array[randomIndex];
};

// random tweet generator
var opening = ['just', '', '', '', '', 'ask me how i', 'completely', 'nearly', 'productively', 'efficiently', 'last night i', 'the president', 'that wizard', 'a ninja', 'a seedy old man'];
var verbs = ['downloaded', 'interfaced', 'deployed', 'developed', 'built', 'invented', 'experienced', 'navigated', 'aided', 'enjoyed', 'engineered', 'installed', 'debugged', 'delegated', 'automated', 'formulated', 'systematized', 'overhauled', 'computed'];
var objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of'];
var nouns = ['cat', 'koolaid', 'system', 'city', 'worm', 'cloud', 'potato', 'money', 'way of life', 'belief system', 'security system', 'bad decision', 'future', 'life', 'pony', 'mind'];
var tags = ['#techlife', '#burningman', '#sf', 'but only i know how', 'for real', '#sxsw', '#ballin', '#omg', '#yolo', '#magic', '', '', '', ''];

var randomMessage = function(){
  return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns), randomElement(tags)].join(' ');
};

// generate random tweets on a random schedule
var generateRandomTweet = function(){
  var tweet = {};
  tweet.user = randomElement(users);

  tweet.message = randomMessage();
  tweet.created_at = new Date();
  addTweet(tweet);
};

for(var i = 0; i < 10; i++){
  generateRandomTweet();
}
  var count=0;
  var tempUsers=[];
var scheduleNextTweet = function(){
 
 $(document).ready(function(){
        var $messages = $('#showMessage');
        //$body.html('');

        var index = streams.home.length - 1;
       
          var tweet = streams.home[index];
          count++;
          var $tweet = $('<p  id="userid'+count+'"  "></p>');
          	var tweetWall='@<b><u>' + tweet.user+"</b></u><br><span class='tweetBody'> "+tweet.message+"</span><br><span class='countStyler'>Tweet#: "+count+"</span><br><span id='dateOfTweet'>"+tweet.created_at+"</span>";
          $tweet.html(tweetWall);
          $tweet.prependTo($messages);
          //add user to the activ list users
			var li=$("<li>").html(tweet.user+" <button id=\"btnid"+count+"\" onclick=\"showTweets('"+tweet.user+"',this.id)\">show tweets </button>");
          if(tempUsers.indexOf(tweet.user)<0){
          		tempUsers.push(tweet.user);
          		li.appendTo($("#activeUsers"));
          		//console.log(tempUsers);
          } 
          	

          if(count>10)$("#showMessage p").last().remove();
          
    });//end of Jquery     
 generateRandomTweet();

     
  setTimeout(scheduleNextTweet, Math.random() * 3000);

};
scheduleNextTweet();

// utility function for letting students add "write a tweet" functionality
// (note: not used by the rest of this file.)
var writeTweet = function(message){

  // if(!visitor){
  //   throw new Error('set the global visitor property!');
  // }
  var tweet = {};
  tweet.user = 'visitor';
  tweet.message = message;
  tweet.created_at = new Date();
  addTweet(tweet);
};


//writeTweet("hello");