## Karl Sayagain
(a lightly modified version of the Metaphor-a-Minute! twitter bot)

I'm not sure whether to call this a tribute bot or a grief bot? If I make more using quotes from folks no longer with us, and decide to refer to them collectively with the term graveyard, one or the other might be more fitting. Something to thunk on.

Running at: https://twitter.com/KarlSayagain

==========

Requires [node](http://nodejs.org/) and [npm](http://npmjs.org/). You also need a Twitter App access token, consumer key, and associated secrets: https://dev.twitter.com/apps/new

Finally, you need a Wordnik API key, which you can apply for here: http://developer.wordnik.com/

(You'll need to add all that info to karl.js before running the program, otherwise Wordnik and Twitter won't play nice. Don't worry, it's all commented.)

> npm install node-restclient@0.0.1

> npm install twit@1.1.6

> npm install express@2.5.9

> node karl.js

==========

### To-do
- [X] Change primary function name from makeMetaphor to makeQuote
- [X] Pull in twitter info from config file
- [] Modify so Wordnik getNouns URL is generated using api key from config file
- [X] Remove RTing/favoriting functionality
- [X] Remove connector variables for noun portion
- [X] Remove connector variables for adjective portion
- [X] Remove the wordnik adjective definition and call
