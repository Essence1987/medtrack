# medsearch

## Description

Our motivation for completing this application is to make it easier for medical school professionals (such as professors, physicians, and admin) to monitor student's progress and reviews of their experiences as they go through their clinical rotations.

We decided to build this project to make it easier for medical school staff to have an easier way to supervise the students as well as insure they are getting a quality education. Clinical rotations are one of the most important aspects of the final two years of a medical student's education. It is vital that they are receiving proper guidance from the physician's they shadow. Being able to see student's feedback on the physician's medical knowledge, medical judgement, teaching skills, and humanistic quality (also called "bedside manner"), rated on a scale from 1-10, will help improve future healthcare through the collective wisdom of those who live the journey firsthand.

This application helps solve the problem of a possibly continuing a clinical rotation experience that is suboptimal to the learning of the students involved. Not only will this provide a safe space for students to share their experiences during rotations (through authentication measures built-in to the application), it also encourages students to give constructive feedback so future students can be given the best possible education with each new influx of students going into their final two years of education.

From building this application, we learned the power and capabilities of incorporating an API with a database. We also learned how much resourceful and flexible the NPM registry can be when designing an application. There is a plethora of code within NPM that can be used to help create out-of-the-box ideas that solve possible conflicts in turning a framework idea into reality. In addition, we also learned that authentication and privacy are especially important when dealing with sensitive information such as patient history due to HIPPA privacy laws.

## Installation

1. To install this application, you must first install the NPM dependencies. To do this, navigate to the folder containing the code from this repository. Once done, run the command 'npm install' in the terminal to install the required dependencies included.

2. Next, you must create a '.env' file in the root directory. Replace the 'username' and 'password' information with your own MySQL (or other database) credentials:

```env
DB_NAME='ecommerce_db'
DB_USER='username'
DB_PASSWORD='password'
```

3. Afterwards, the database has to be seeded. To do this, run the command: 'npm run seed'.

4. To start the server, run the command 'npm start' in the terminal. The server should now be listening.

5. Navigate to "localhost:3001" to see the web application.

## Usage

Upon loading the application, you will be presented with the following homepage:

[![homepage.png](https://i.postimg.cc/Sxgybv44/homepage.png)](https://postimg.cc/cv8qQT6k)

From here, you need to create a username/password on through the signup screen:

[![signup.png](https://i.postimg.cc/vmpwQRSJ/signup.png)](https://postimg.cc/KKrHNWbf)

Once complete, head to the login page and enter your username/passworc credentials:

[![login.png](https://i.postimg.cc/rpvGggKG/login.png)](https://postimg.cc/R3LnZ71q)

Now that you're logged in, you can now post reviews. Head to the "Add Review" page on the navigation bar and enter a review:

[![add-review.png](https://i.postimg.cc/659rH85P/add-review.png)](https://postimg.cc/grTLjkhy)

Click the "Submit" button at the bottom of the screen. Your reivew is now submitted and can be looked at by other students and the medical school board to assist in creating a better program. We thank you for your input!

## Credits

For the website layout, a W3 school template was used. A link to the template can be found here: (https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_start_page&stacked=h)