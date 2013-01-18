consolelog.js
=============

A simple client-side console.log()-to-node bridge. Very helpful for debugging those pesky mobile devices (I'm looking at you Windows Phone).

**Dependencies**

None.

**Usage**

``
npm start
``

Starts the server in port 1337. Add a script tag pointing to the root of the server, and watch console.log() messages appear in node.js log. Needless to say this server needs to be accessible to the client, so local wi-fi is a good option (or maybe heroku).

**Running in Heroku**

A Procfile for running in Heroku is included with the app, so you're good to go:

1. Create a new app in Heroku
2. Add a Heroku Git remote for your app
3. Push this repo to you Heroku Git remote
4. Tail the Heroku log *heroku logs -t*
