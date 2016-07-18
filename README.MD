Pizza Time!
---------------

This is a simple app written in Python and Angular.JS that simulates a pizza delivery system.

###Run the dev environment

You need to have Docker and docker compose installed and configured on your computer.

To download/clone the repo and in the project's folder type:

```
docker-compose build
```

That will build the container. Once it's done run the bellow command to start the DB container:

```
docker-compose up db -d
```

Now run these commands to configure the database and load the initial data:

```
docker-compose run web python migrate.py migrate
docker-compose run web python migrate.py loaddata initial_data
```

Now you are ready to run the app, to start the web server use this command:

```
docker-compose up
```
