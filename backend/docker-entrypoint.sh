#!/bin/bash
service nginx start
python manage.py migrate
python manage.py collectstatic --noinput
export DJANGO_SUPERUSER_PASSWORD=nicegame14
gunicorn --reload -c gunicorn.py meltroad_backend.wsgi:application