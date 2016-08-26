# creaTurn-backend
Dependencies to install:
```
node
express
mongodb
async
```
MongoDB needs to run on port ```27017``` (default port) and have a database called ``` creatourn ```.
<br> The app runs on ``` http://localhost:2000 ``` and accepts connection from ```http://localhost:3000```.

### API
##### Templates
``` GET: http://localhost:2000/templates/:id ```
<br> ``` POST: http://localhost:2000/templates/ ```
<br> ``` PUT: http://localhost:2000/templates/:id ```
<br> ``` DELETE: http://localhost:2000/templates/:id ```
