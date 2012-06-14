# Uppsetning

# git clone https://github.com/HilmarBirgir/remindme.git

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

## Setja inn á git
* git add .
* git commit -m 'skýra innsendinguna'
* git push 

## Sækja frá git
* git pull -u
* Gætir þurft að merga handvirkt í file-um ef það eru conflicts

