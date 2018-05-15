start cmd /c "cd app & npm run start:dev"
start cmd /c "cd server & python manage.py runserver"

start cmd /c "cd server & celery -A connect beat"
start cmd /c "cd server & celery -A connect worker --pool=solo"