# creaTurn-backend

Early version of creaTourn backend, a web app for managing tournaments.

Dependencies to install:
```
node
express
mongodb
async
```
MongoDB needs to run on port ```27017``` (default port) and have a database called ``` creatourn ```.
<br> The app runs on ``` http://localhost:2000 ``` and accepts connections from ```http://localhost:3000```.

### API
##### Templates
``` GET: http://localhost:2000/templates/:id ```
<br> ``` POST: http://localhost:2000/templates/ ```
<br> ``` PUT: http://localhost:2000/templates/:id ```
<br> ``` DELETE: http://localhost:2000/templates/:id ```

<p> Responses are in following format:
```
{
  success: 'true/false',
  message: 'error message',
  data: 'response data'
}
```
