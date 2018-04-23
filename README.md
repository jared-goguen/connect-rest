# connect-rest

An in-progress project for a website where users can play Connect Four with each other. 

Things that are working:
* Authentication
* Creating games
* Playing with computer (albeit no AI)
* Joining games (albeit terrible interface)

Next things to do:
* Let people make moves
* Improve the game thumbnail interface
* Add warning for joining game when not logged in
* Implement decent AI for computer
* Redesign History for both appearance and functionality


The front end is in React (with react-router and redux). The back end uses the Django REST framework and only provides an API for AJAX requests from the frontend.

The entry-point for the front end is [/app/containers/App.jsx](/app/containers/App.jsx). All of the style-based React components are in [/app/components](/app/components) and all of the logic-based Reacat components are in [/app/containers/](/app/containers/). All front end dependencies are detailed in [/app/package.json](/app/package.json).

The entry-point for the back end is effectively [/server/connect/urls.py](/server/connect/urls.py). The site will then be hosted by default at [localhost:8000](http://localhost:8000). All back end dependencies are detailed in [/server/requirements.txt](/server/requirements.txt).

To build the front end, run the command `call npm run webpack` in [/app](/app) (although, a built file is included in the repository). To run the back end, run the command `python manage.py runserver` in [/server](/server).
