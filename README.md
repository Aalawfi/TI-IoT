
# Capstone Project V0.3 

This project was designed to work in conjuction with its dedicated hardware. 
The data destination refers to the subsystem that handles of data after it wase processed by the microcontroller. It includes both a backend server and a user interface.

For the data that was collected by the sensors to be shared on the internet, the data must be first stored in the cloud where other clients can access it via Representational State Transfer Application Programming Interface (REST API). This approach introduces greater flexibility to the number and type of devices that can use the data without affecting the sensor’s or the microcontroller’s operation. The front-end is where the data is displayed and interfaced to a user. The back-end is the man-in-middle between an IoT node and devices that consume the API.

![alt text](https://i.ibb.co/nzjJn65/Screenshot-18.png)

# Front End v0.3
  - Built with ReactJS 
  - Livestream collected data to the user 
  - Consumes the back-end's API

# Back-end v0.3 
  - Built with Django and served on AWS
  - SQlite database
  - Include 5 API end-points: /get-username , $username/get-devices , $username/api/$device_name/get-data,  $username/api/$device_name/get-all-data
  - 
# fakeMCU 
  - Simulate the data being added to the back-end database thorugh an API 
  - External entity to the AWS server
  - link: https://aalawfi.github.io/fake-mcu/

# FOR DEVELOPERS: 
  Before you begin on front-end, you must ensure you have Node.js installed. You can install it <a href='https://nodejs.org/en/'> from here </a>. 
  
  Then, clone the repository in your desired path. After you clone it, you must install this project's dependencies. 
  You can do that by typing ``` npm install ``` inside the repository you just installed. 
  After you installed ran the above command, a node_modules folder should appear with all required dependencies.
  
  To launch the website on your local host, run the command ```npm start```. A page should launch in you browser.
  ---------
  To begin with backend, first install django using ```pip install django```. 
  Next install dependencies using ```pip install -r requirments.txt``` 
  To serve the front end using django, first run the build of the front end 
      - This could be done by executing the custome script in bash terminal. run ``` npm run relocate```. 
      the above will bundles everything the front-end needs as static files under folder 'build'. It will 
      also move the build folder to the backend. 
  Now that you have the 'build' folder under serverside folder, collect the static using ```python manage.py collectstatic``` 
  Finally run the server using ```python manage.py runserver --nostatic``` 
      - this will run the server on your localhost:8000, and serve static files with whitenoise instead of django's default

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


