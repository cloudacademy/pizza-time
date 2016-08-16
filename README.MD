Certified SysOps Administrator for AWS
-----------------------------

This repository is part of the [SysOps Administrator — Associate Certification for AWS](https://cloudacademy.com/learning-paths/aws-sysops-7/) Learning Path

###Further material

  - [Whitepaper: Overview of security processes](http://d0.awsstatic.com/whitepapers/Security/AWS%20Security%20Whitepaper.pdf)
  - [Whitepaper: Amazon Virtual Private Cloud Connectivity Options](http://media.amazonwebservices.com/AWS_Amazon_VPC_Connectivity_Options.pdf)
  - [Whitepaper: Operational checklists for AWS (Preparing for security assessments)](http://media.amazonwebservices.com/AWS_Operational_Checklists.pdf)
  - [Page: Troubleshooting EC2 connectivity issues](https://aws.amazon.com/premiumsupport/knowledge-center/linux-credentials-error/)  
  - [Video: How should I connect to my Amazon virtual private cloud?](https://aws.amazon.com/premiumsupport/knowledge-center/connect-vpc/)
  - [Video: How do I troubleshoot problems connecting to my EC2 Linux instance using SSH?](https://aws.amazon.com/premiumsupport/knowledge-center/ec2-linux-ssh-troubleshooting/)
  - [Page: General FAQs](https://aws.amazon.com/premiumsupport/knowledge-center/)

Pizza Time!
---------------

###Run the dev environment (local)

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

###Deploying to Elastic Beanstalk

Before starting you should have the AWS CLI and the EB CLI installed and configured in your machine:

```
pip install awscli
pip install awsebcli
aws configure
```


- Create the RDS database
- Create a new application on Elastic Beanstalk (EB)
- Create a new environment inside the EB application, make sure that you will use Python 2.7
- Download this repo
- Change the Environment Variables in the [django.config](/.ebextensions/django.config) file
- Open a terminal inside the the repo's folder
- Type the bellow command to configure the EB environment in your repo and follow the wizard
```
eb init
```
- Type the bellow commands to stage your changes and deploy the app to EB
```
git add .
eb deploy --staged
```

###Deploying API instances

Take a look at the [install-pizza-time.sh](/scripts/install-pizza-time.sh) script an make the needed changes in the Environment Variables to point to your database instance. Then use the script as the User Data script in your instances or Launch configuration.

###Angular files

The Angular files are available at the [Frontend](/frontend) folder, make sure that you will change the variable called "$rootScope.APIURL" in the [main.js](/frontend/static/js/main.js) file to point to your API endpoint.
