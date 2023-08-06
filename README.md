# MedTrack - Enhancing the Med School Experience

## Table of Contents
- [Description](#description)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Database Setup](#database-setup)
  - [Running the App](#running-the-app)
- [Usage](#usage)
  - [Screenshots](#screenshots)
  - [Walkthrough](#walkthrough)
- [API Routes](#api-routes)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Live Site](#live-site)
- [Sources](#sources)
- [Contact](#contact)

## Description

Our motivation for completing this application is to make it easier for medical school professionals (such as professors, physicians, and admin) to monitor students’ progress and reviews of their experiences as they go through their clinical rotations.

We decided to build this project to make it easier for medical school staff to have an easier way to supervise the students as well as ensure they are getting a quality education. Clinical rotations are one of the most important aspects of the final two years of a medical student's education. It is vital that they are receiving proper guidance from the physicians they shadow. Being able to see student's feedback on the physician's medical knowledge, medical judgment, teaching skills, and humanistic quality (also called "bedside manner"), rated on a scale from 1-10, will help improve future healthcare through the collective wisdom of those who live the journey firsthand.

This application helps solve the problem of possibly continuing a clinical rotation experience that is suboptimal to the learning of the students involved. Not only will this provide a safe space for students to share their experiences during rotations (through authentication measures built-in to the application), it also encourages students to give constructive feedback so future students can be given the best possible education with each new influx of students going into their final two years of education.

From building this application, we learned the power and capabilities of incorporating an API with a database. We also learned how much resourceful and flexible the NPM registry can be when designing an application. There is a plethora of code within NPM that can be used to help create out-of-the-box ideas that solve possible conflicts in turning a framework idea into reality. In addition, we also learned that authentication and privacy are especially important when dealing with sensitive information such as patient history due to HIPPA privacy laws.

**Key Features**

- User Registration: Medical students can register their accounts to access the app.
- User Login: Registered users can log in to their account to access their performance reviews.
- Performance Review Submission: Users can submit performance reviews for specific faculty members, providing ratings and comments on their experiences.
- View Performance Reviews: Users can view their submitted performance reviews and review faculty feedback.

### Prerequisites
- Node.js and npm installed on your machine.

### Installation
1. Clone the repository from GitHub to your local machine.
2. Navigate to the project directory in the terminal.
3. Install the required dependencies using the following command:

### Database Setup
1. Create a MySQL database for the application.
2. In the `config/connection.js` file, update the database configuration with your database credentials.

### Running the App
To run the application, use the following command:

The app will be accessible at `http://localhost:3001`.

## Usage
1. Register an account as a medical student using the registration form.
2. Log in to your account to access the main dashboard.
3. Browse through the available faculty members and select one to submit a performance review.
4. Fill out the review form with ratings and comments about your experience.
5. View and manage your submitted performance reviews from the dashboard.

### Screenshots

Upon loading the application, you will be presented with the following homepage:

[![homepage.png](https://i.postimg.cc/Sxgybv44/homepage.png)](https://postimg.cc/cv8qQT6k)

From here, you need to create a username/password on through the signup screen:

[![signup.png](https://i.postimg.cc/vmpwQRSJ/signup.png)](https://postimg.cc/KKrHNWbf)

Once complete, head to the login page and enter your username/password credentials:

[![login.png](https://i.postimg.cc/rpvGggKG/login.png)](https://postimg.cc/R3LnZ71q)

Now that you're logged in, you can now post reviews. Head to the "Add Review" page on the navigation bar and enter a review:

[![add-review.png](https://i.postimg.cc/659rH85P/add-review.png)](https://postimg.cc/grTLjkhy)

Click the "Submit" button at the bottom of the screen. Your review is now submitted and can be looked at by the medical school boards to assist in creating a better program. We thank you for your input!

### Walkthrough
***

## API Routes
- **POST** `/api/users`: Create a new user (registration).
- **POST** `/api/login`: Authenticate user login.
- **GET** `/api/faculty`: Get all faculty information.
- **GET** `/api/faculty/:id`: Get faculty information by ID.
- **POST** `/api/performancereview`: Submit a new performance review.
- **GET** `/api/performancereview/:id`: Get performance review by ID.
- **DELETE** `/api/performancereview/:id`: Delete performance review by ID.

## Technologies Used
- Node.js
- Express.js
- Sequelize (ORM)
- MySQL
- bcrypt (for password hashing)
- HTML, CSS, JavaScript (Frontend)
- Handlebars (Templating Engine)

## Contributing
Contributions to MedTrack are welcome! If you find any bugs or want to add new features, please open an issue or submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

## Live Site
Visit the live site [Med-Track](https://limitless-sea-25303-7c8a3f9496d2.herokuapp.com/).

## Sources
- [https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_templates_start_page&stacked=h]


## Contact
For any questions or inquiries, please contact:

- GitHub: [https://github.com/Essence1987/medtrack]