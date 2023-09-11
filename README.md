# Phase-5-Project- Food App 

## 
This is a photo sharing app that allows the users to sign up or login and see posts that other users have created. The thought behind this app was making a place where people can share what they are cooking with out having to share their lives. Also a place to get ideas about what to eat for dinner or what your friends are making for dinner.

##

The backend of this project was created with Flask and Python and the front end created with JavaScript and React.

# Set Up:
    
    Run in terminal:
        
        cd server
        export FLASK_APP=app.py
        export FLASK_RUN_PORT=5555
        
        flask db init
        flask db revision --autogenerate -m "Create table <table name>"
        flask db upgrade
        python seed.py
        
        python app.py

    Run front-end React:

        Run at level above server:
        npm start --prefix client

    To pull from main after you've made changes on your branch:
        
        to make sure your branch is clean:
        git status

        if branch is not clean, run this to see differences:
        git diff

        if okay with the differences:
        git stash

        make sure your branch is clean again(it should be now):
        git status

        git checkout main
        git pull origin main

        make sure your branch is clean again(it should be again):
        git status

        git check out "your branch name"
        git rebase main
        
        make sure your branch is clean again(it should be again):
        git status      

        add your stashed changes to you updated rebased main(you will likely have conflicts):
        git stash pop 

        accept nessecary conflicts on files that need it then:
        git add .
        git commit -m "message"
