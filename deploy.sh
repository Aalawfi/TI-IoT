#!/bin/bash

sudo ./front-end/npm-shortcut.sh &&
echo "Done building the front-end" && 
sudo python3 ./serverside/manage.py collectstatic --no-input &&
echo "Done collecting static files" &&
sudo python3 ./serverside/manage.py makemigrations && 
sudo python3 ./serverside/manage.py migrate 