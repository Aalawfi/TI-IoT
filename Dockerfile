# Base container image
FROM python:3.9-slim-buster

# create root directory 
RUN mkdir /tifi-root

# set the working directory to root dir
WORKDIR /tifi-root

# This is to display python output directly to terminal 
ENV PYTHONUNBUFFERED 1

# Copy the backend source files to the working dir 
ADD ./serverside /tifi-root/
COPY ./serverside/build /tifi-root/build

# Install reqs 
RUN pip install -r requirements.txt
EXPOSE 8000
