FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=password
ENV MYSQL_DATABASE=GymAlertMadrid
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=mypassword

COPY ./sql-scripts/ /docker-entrypoint-initdb.d/

EXPOSE 3306