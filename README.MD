Certified SysOps Administrator for AWS
-----------------------------

This repository is part of the [SysOps Administrator—Associate Certification for AWS](https://cloudacademy.com/learning-paths/aws-sysops-7/) Learning Path

###Reading material

  - [Overview of security processes](http://d0.awsstatic.com/whitepapers/Security/AWS%20Security%20Whitepaper.pdf)
  - [Amazon Virtual Private Cloud Connectivity Options](http://media.amazonwebservices.com/AWS_Amazon_VPC_Connectivity_Options.pdf)
  - [Troubleshooting EC2 connectivity issues](https://aws.amazon.com/premiumsupport/knowledge-center/linux-credentials-error/)
  - [General FAQs](https://aws.amazon.com/premiumsupport/knowledge-center/)

Pizza Time!
---------------

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
docker-compose run web python manage.py migrate
docker-compose run web python manage.py loaddata initial_data
```

Now you are ready to run the app, to start the web server use this command:

```
docker-compose up
```
