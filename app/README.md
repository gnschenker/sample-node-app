# Sample Node JS APP
This Node JS app has a REST API and is using a PostgreSQL DB for persistence.

Run the application with 
```
npm start
```

Test the application with:
```BASH
curl http://localhost:3000
```
The answer should be 
```JSON
{
    "message": "Hello World!"
}
```

## Exercise
### Clone, run and test the application
1. Go to Play with Docker at: https://labs.play-with-docker.com/
1. Log-in
1. Create a first instance by clicking on **ADD NEW INSTANCE**
1. Clone the example Node JS app with: `git clone https://github.com/gnschenker/sample-node-app.git`
1. Navigate to the app folder
1. Install nvm. Detailed instructions here: https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating
    1. Run `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`
    2. Execute `source ~/.profile` 
1. Install node `nvm install node`
1. Install application dependencies with `npm install`
1. Run the application with `npm start`
1. Test the application with `curl http://localhost:3000`
1. Stop the application
### Create an application Image
1. Create a `Dockerfile` for the application
1. Build the Docker image
1. Run an instance of the image
1. Test the app with `curl http://localhost:3000`

### Create a docker compose file
1. Create a `docker-compose.yml` with a service
    * `app` for the Node JS application
    * `db` for a PostgreSQL DB
   So that the application can access the database and that the database gets configured correctly upon start using the `init.sql` file
1. Run the application using `docker compose up -d`
1. Verify the logs that everything runs correctly
1. Test the application by creating a new **user**, e.g. using `curl` like this: `
    ```
    curl -X POST -H "Content-Type: application/json" -d '{
    "username": "john_doe",
    "email": "john.doe@example.com"
    }' http://localhost:3000/users
    ```
1. Retrieve all users using `curl http://localhost:3000/users`
