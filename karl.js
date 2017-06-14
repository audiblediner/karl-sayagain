var restclient = require('node-restclient');
var Twit = require('twit');
var app = require('express').createServer();

// I deployed to Nodejitsu, which requires an application to respond to HTTP requests
// If you're running locally you don't need this, or express at all.
app.get('/', function(req, res){
    res.send('Hello world.');
});
app.listen(3000);

// insert your twitter app info here
var T = new Twit(require('./config.js'));

var statement =   "";

// insert your Wordnik API info below
var getNounsURL = "http://api.wordnik.com/v4/words.json/randomWords?" +
                  "minCorpusCount=1000&minDictionaryCount=10&" +
                  "excludePartOfSpeech=proper-noun,proper-noun-plural,proper-noun-posessive,suffix,family-name,idiom,affix&" +
                  "hasDictionaryDef=true&includePartOfSpeech=noun&limit=2&maxLength=12&" +
                  "api_key=___INSERT-YOUR-WORDNIK-API-KEY-HERE_____";

function makeQuote() {
  statement = "";
  restclient.get(getNounsURL,
  function(data) {
    first = data[0].word.substr(0,1);
    second = data[1].word.substr(0,1);
    article = "a";
    if (first === 'a' ||
        first === 'e' ||
        first === 'i' ||
        first === 'o' ||
        first === 'u') {
      article = "an";
    }
   article2 = "a";
    if (second === 'a' ||
        second === 'e' ||
        second === 'i' ||
        second === 'o' ||
        second === 'u') {
      article2 = "an";
    }

    statement += "If you wish to make " + article + " " + data[0].word + " from scratch, you must first invent " + article2 + " " + data[1].word + ".";

        statement = statement + ".";
        console.log(statement);
        T.post('statuses/update', { status: statement}, function(err, reply) {
          console.log("error: " + err);
          console.log("reply: " + reply);
        });
      }
    ,"json");
  }

// every 2 minutes, make and tweet a metaphor
// wrapped in a try/catch in case Twitter is unresponsive, don't really care about error
// handling. it just won't tweet.
setInterval(function() {
  try {
    makeQuote();
  }
 catch (e) {
    console.log(e);
  }
},120000);
