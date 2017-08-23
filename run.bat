cd venv/Scripts
activate
cd ../..
cd app
call npm run webpack -w
cd ..
python manage.py runserver