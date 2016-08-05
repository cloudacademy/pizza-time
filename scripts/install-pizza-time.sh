#!/bin/bash
export DATABASE_NAME=
export DATABASE_USER=
export DATABASE_HOST=
export DATABASE_PORT=3306
export DATABASE_PASSWORD=
yum update -y
yum groupinstall -y "Development Tools"
yum install -y git mysql-devel mysql-libs kernel-devel
git clone https://github.com/cloudacademy/pizza-time
cd pizza-time
pip install -r requirements.txt
python manage.py runserver 0.0.0.0:80
