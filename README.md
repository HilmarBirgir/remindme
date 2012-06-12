# Uppsetning
## starta brunch
* cd brunch
* npm install
* brunch watch

## starta flask
* virtualenv --distribute venv
* source venv/bin/activate
* pip install -r remindme/requirements.txt
* pwd > venv/lib/python2.7/site-packages/remindme.pth
* python remindme/app.py