# Restaurant Website

This repository hosts a full-stack web application for a restaurant, allowing users to make reservations, provide feedback, and browse available foods. The application features a user-friendly interface and robust backend functionality.

## Features

### Frontend (Client-side)
- **User Authentication**: Login and Signup functionalities.
- **Reservation System**: Make and manage reservations for events.
- **Feedback Section**: Users can submit reviews and feedback via a message section.
- **Home Page and Navigation**: A responsive layout featuring an About page, Welcome page, and a Navbar.

### Backend (Server-side)
- **User Management**: Secure user registration and authentication.
- **Reservation Management**: CRUD operations for reservations.
- **Feedback Handling**: Allow users to submit and view feedback.
- **Search and Display**: Backend APIs for searching and displaying data.

## Folder Structure

```plaintext
project-root/
├── server.js          # Main backend server file
├── package.json       # Backend dependencies and scripts
├── routes/            # API route files
│   ├── comment.js     # API routes for handling comments
│   ├── post.js        # API routes for posts
│   ├── search.js      # Search functionality
│   ├── show.js        # APIs to fetch and display data
│   └── user.js        # User-related routes (login, signup, etc.)
├── models/            # Database schemas/models
│   ├── comment.js     # Schema for user comments
│   ├── post.js        # Schema for posts
│   └── user.js        # Schema for user data
├── client/            # Frontend application (React)
│   ├── public/        # Static files
│   ├── src/           # React components and styles
│   │   ├── components/ # Reusable components for the frontend
│   │   │   ├── about.js         # About the restaurant
│   │   │   ├── footer.js        # Footer section
│   │   │   ├── home.js          # Main landing page
│   │   │   ├── login.js         # User login form
│   │   │   ├── my_reservation.js # User's reservations
│   │   │   ├── navbar.js        # Navigation bar
│   │   │   ├── signup.js        # User signup form
│   │   │   └── welcome.js       # Welcome page
│   │   ├── CSS/           # Styles for components
│   │   │   ├── about.css       # About page styles
│   │   │   ├── APP.css         # Global application styles
│   │   │   ├── footer.css      # Footer styles
│   │   │   ├── index.css       # Main index styles
│   │   │   ├── my_reservation.css # My Reservations page styles
│   │   │   ├── navbar.css      # Navbar styles
│   │   │   ├── reservation.css # Reservation form styles
│   │   │   └── signup.css      # Signup form styles
│       ├── Foods/         # Images of food items
│       └── Images/        # Additional decoration images
└── .gitignore           # Git ignore file for the repository
```

## Technologies Used
- **Frontend**: React with CSS for styling.
- **Backend**: Node.js with Express.js.
- **Database**: MongoDB with Mongoose.
- **Dependencies**:
  - `body-parser`: ^1.20.3
  - `concurrently`: ^9.1.2
  - `cors`: ^2.8.5
  - `express`: ^4.21.2
  - `nodemon`: ^3.1.9

## Deployment
- **Backend Port**: 7800
- **Database URL**:
  `mongodb+srv://sahanhansaja026:Mark15267@cluster0.t0p0l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
- **CI/CD Pipeline**: Set up using **GitHub Actions** for automatic deployment to **AWS EC2**.

### AWS EC2 Deployment
- The project is deployed on **AWS EC2** instances using a **CI/CD pipeline** that automates the deployment process.
- The deployment is triggered by GitHub Actions whenever changes are pushed to the repository.
- This setup ensures continuous integration and delivery for the application with minimal manual intervention.

## How to Run

### Prerequisites
- Node.js and npm installed.
- MongoDB database setup.

### Steps
1. **Clone the repository**:
   `git clone https://github.com/your-repo-url.git`

2. **Navigate to the project directory**:
   `cd restaurant-website`

3. **Install dependencies for both frontend and backend**:
   - `cd client && npm install`
   - `cd ../backend && npm install`

4. **Start the development servers**:
   - In one terminal (backend):
     `nodemon server.js`
   - In another terminal (frontend):
     `npm start`

5. **Access the application**:
   Open your browser and go to `http://localhost:3000`.

## Individual Contributions

### Member 1: 22UG2-0035 Sahan Hansaja
- Developed the **User Authentication** feature (Login and Signup forms).
- Implemented the **Navbar** and **Welcome Page**.
- Managed the integration between the frontend and backend for user authentication.
- Managed the deployment process, setting up the **CI/CD pipeline** using GitHub Actions for automatic deployment to AWS EC2.
- Configured the **MongoDB Database** URL and assisted with backend-related issues.
- Worked on **API Routes** for posts, user handling, and reservation management.

### Member 2: 22UG2-0063 Pasindu Kavinda
- Designed and implemented the **Reservation System**.
- Worked on the **My Reservations** page for displaying user reservations.
- Assisted in creating the **Reservation CRUD operations** in the backend.
- Created the **Home Page** and **Search Functionality** in the backend.
- Collaborated with other members to troubleshoot and refine features.

### Member 3: 22UG2-0201 Isitha Nawoda
- Developed the **Feedback Section**, including the schema and routes for handling comments.
- Styled the **About Page** and worked on the **Footer** section.
- Assisted in setting up the MongoDB database and models.
- Set up the **APIs** for managing posts, displaying data, and handling search requests.

### Member 4: [Name]
### Member 5: [Name]


## Contributing
Contributions are welcome! Please create an issue or submit a pull request for improvements.

## License
This project is licensed under the MIT License.