cd app
call npm run webpack --watch
cd ../server
python manage.py runserver
cd ..