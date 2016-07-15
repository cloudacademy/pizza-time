Pizza Time!
---------------

This is a simple app written in Python and Angular.JS for a Pizza delivery system.

##Run the dev environment

You need to have Docker and docker compose installed and configure in your computer.

Download/clone the repo and in the project's folder type

```
docker-compose build
```

That will build the container.

Once it's done run

```
docker-compose up db -d
```

To startup the DB container

Now run these commands to configure the database and load the initial data

```
docker-compose run web python migrate.py migrate
docker-compose run web python migrate.py loaddata initial_data
```

Now you are ready to run the app with this command

```
docker-compose up
```
