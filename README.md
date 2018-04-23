# connect-rest

An in-progress project for a website where users can play Connect Four with each other. 

The front end is in React (with react-router and redux). The back end uses the Django REST framework and only provides an API for AJAX requests from the frontend.

The entry-point for the front end is [/app/containers/App.jsx](/app/containers/App.jsx). All of the style-based React components are in [/app/components](/app/components) and all of the logic-based Reacat components are in [/app/containers/](/app/containers/). All front end dependencies are detailed in [/app/package.json](/app/package.json).

The entry-point for the backend is effectively [/server/connect/urls.py](/server/connect/urls.py). All back end dependencies are detailed in [/server/requirements.txt](/server/requirements.txt).

To build the front end, run the command `call npm run webpack` in [/app](/app) (although, a built file is included in the repository). To run the back end, run the command `python manage.py runserver` in [/server](/server).
