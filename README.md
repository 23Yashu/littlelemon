# 🍋 Little Lemon Restaurant - Full Stack

### Overview

Welcome to the **Little Lemon Restaurant** project! Little Lemon is a modern restaurant application featuring a real-time table booking system, user registration for loyalty points, and automated email confirmations. Originally developed as the Meta Front-End Developer Capstone, it has been re-engineered in March 2026 to leverage a high-concurrency backend.

### Project Features

**Online Reservation System**: Users can book tables by selecting the date, time, number of guests, and occasion.

**Responsive Design**: The website is optimized for various devices, ensuring a seamless user experience across desktops, tablets, and smartphones.

**Dynamic Menu Display**: A section showcasing the restaurant's dishes, complete with images and descriptions.

**Interactive UI Components**: Utilizing React.js to create dynamic and reusable components.

**State Management**: Efficiently managing application state using React Hooks and Context API.

**High-Concurrency Backend**: Powered by Java 25 Virtual Threads (Project Loom), allowing the server to handle thousands of concurrent bookings with minimal memory overhead.

**Real-Time Availability**: Replaced mock API logic with a robust Spring Boot service that checks actual database occupancy before allowing reservations.

**Stateful Reservations**: Bookings are saved as PENDING during the selection phase and updated to CONFIRMED only after successful payment simulation.

**Secure Authentication**: User registration features BCrypt password hashing and persistent storage in Supabase (PostgreSQL).

**Async Notifications**: Email confirmations are dispatched on background virtual threads to ensure zero-latency UI responses.

### Technical Stack

**Frontend**: React.js, HTML5, CSS3, JavaScript (ES6+)

**Backend**: Spring Boot 4.0.5, Java 25 (Utilizing Records, Pattern Matching, and Virtual Threads), Spring Data JPA (Database ORM), Spring Boot Docker Compose (Dev Environment)

**Database**: Supabase (PostgreSQL 16+)

**State Management**: React Context API, React Hooks

**UI Design**: Figma for wireframing and UI design

**Version Control**: Git, GitHub

**Hosting**: Vercel (Frontend) & Railway.app (Backend)

### Setup and Installation

**Prerequisites**
Java 25 & Maven 3.9.14
Node.js 22+
Docker Desktop (for local DB)

To run this project locally:

1. Clone the repository:

```bash
git clone https://github.com/23Yashu/littlelemon.git
```

2. Navigate into the project directory:

```bash
cd littlelemon
```


3. Backend Setup

cd backend
// Update application.properties with your Supabase credentials
./mvnw spring-boot:run

4. Frontend Setup

cd frontend
npm install
// Set REACT_APP_API_URL=http://localhost:8080 in .env
npm start

5. Open your browser and visit [http://localhost:3000](http://localhost:3000).


### Project Structure
littlelemon/
├── frontend/             # React application
│   ├── src/components/   # UI Components (Booking, Login, Payment)
│   └── src/hooks/        # Custom hooks for API communication
├── backend/              # Spring Boot application
│   ├── src/main/java/    # Java 25 Source code
│   └── docker-compose.yml # Local Database setup
└── vercel.json           # Vercel Monorepo configuration

### Environment Variables

To run this project in production, set the following variables:
SPRING_DATASOURCE_URL	 = Supabase JDBC Connection String
SPRING_DATASOURCE_PASSWORD	= Supabase DB Password
APP_FRONTEND_URL	= Your Vercel deployment URL (for CORS)
REACT_APP_API_URL	= Your Railway deployment URL
SPRING_THREADS_VIRTUAL_ENABLED	= true (Enable Java 25 Loom)

### Screenshots

#### HomePage 
<img width="1728" height="1117" alt="Screenshot 2025-09-18 at 1 50 19 PM" src="https://github.com/user-attachments/assets/cff0c6bc-6bd1-4074-b954-5a37bde0c3d6" />

#### Learning Outcomes

* Hands-on experience building a full React application.

* Understanding React’s component-based architecture.

* Skills in responsive web design and UX principles.

* State management using React Context API.

* UI/UX design experience via wireframing and prototyping.

#### Acknowledgments

* Meta: For the Front-End Developer Professional Certificate program.

* Coursera: Learning platform for front-end development.

* Figma: For UI/UX design and prototyping.

Copyright © 2025 [Yashasvi Vashistha](https://www.linkedin.com/in/yashasvi-vashistha). All rights reserved.
No part of this repository may be copied, distributed, or used without explicit permission from the author.
