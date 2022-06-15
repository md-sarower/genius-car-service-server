/* 
* One time for your computer
1. create heroku account
2. verify email
3. install heroku CLI
4. heroku login
--------------------------
* For each project one time
1. heroku create
2. make sure you: git add . git commit. git push
3. git push heroku main 
4. go to heroku Dashboard > Settings > Reveal Config Vars
5. copy paste config vars from your .env file
6. make sure you have whitelisted all ip address to access mongo db
----------------------------
* Update Server
1. Make changes
2. make sure you: git add . git commit. git push
3. git push heroku main
----------------------------


* Connect server with client and deploy
1. replace localhost by heroku link
2. npm run build
3. firebase deploy
*/