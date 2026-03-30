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

```bash
cd backend
# Update application.properties with your Supabase credentials
./mvnw spring-boot:run
```

4. Frontend Setup

```bash
cd frontend
npm install
# Set REACT_APP_API_URL=http://localhost:8080 in .env
npm start
```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000).


### Project Structure
```text
littlelemon/
├── frontend/                # React.js Application (Vercel)
│   ├── public/              # Static assets (favicon, index.html)
│   ├── src/
│   │   ├── components/      # UI: BookingForm, Login, Payment, Nav
│   │   ├── context/         # React Context (Alerts, Reservations)
│   │   ├── hooks/           # Custom Hooks (useLogin, useSubmit)
│   │   ├── icons/           # SVG and UI icons
│   │   └── App.js           # Main Routing and API fetching
│   └── package.json         # Frontend dependencies
├── backend/                 # Spring Boot API (Railway + Java 25)
│   ├── src/main/java/       # Java Source Code (Records, Controllers)
│   ├── src/main/resources/  # application.properties & SQL scripts
│   ├── docker-compose.yml   # Local PostgreSQL setup for development
│   └── pom.xml              # Maven Dependencies (SB 4.0.5)
├── vercel.json              # Deployment config for Monorepo
└── README.md                # Project documentation
```

### Environment Variables

To run this project in production, set the following variables:
| Variable | Description | Deployment Platform |
| :--- | :--- | :--- |
| `SPRING_DATASOURCE_URL` | Supabase JDBC Connection String | **Railway** (Backend) |
| `SPRING_DATASOURCE_PASSWORD` | Supabase Database Password | **Railway** (Backend) |
| `APP_FRONTEND_URL` | Your Vercel deployment URL (Required for CORS) | **Railway** (Backend) |
| `REACT_APP_API_URL` | Your Railway deployment URL (API Gateway) | **Vercel** (Frontend) |
| `SPRING_THREADS_VIRTUAL_ENABLED` | Set to `true` to enable **Java 25 Virtual Threads** | **Railway** (Backend) |

### Screenshots

#### HomePage 
<img width="1728" height="1117" alt="Screenshot 2025-09-18 at 1 50 19 PM" src="https://github.com/user-attachments/assets/cff0c6bc-6bd1-4074-b954-5a37bde0c3d6" />

#### Learning Outcomes

This project served as the ultimate test of my ability to build a production-grade, full-stack ecosystem. Key takeaways include:

*   **Full-Stack Architecture:** Architecting a high-performance system connecting a React frontend to a Spring Boot backend.
*   **Modern Java Performance:** Practical implementation of **Java 25 Virtual Threads (Loom)** for efficient, non-blocking I/O operations.
*   **Cloud Data Persistence:** Managing relational data with **PostgreSQL (Supabase)** and implementing robust **Spring Data JPA** repositories.
*   **Advanced React State:** Leveraging the **Context API** and **Custom Hooks** to manage complex, multi-step reservation flows.
*   **DevOps & Deployment:** Real-world experience in **Monorepo management**, CORS security, and cross-platform deployment (Vercel + Railway).
*   **Responsive UX:** Designing and implementing a mobile-first UI using **Chakra UI** and **Figma** prototypes.

#### Acknowledgments

*   **Meta:** For the Front-End Developer Professional Certificate program and the initial project framework.
*   **Coursera:** For providing the platform and guidance for professional development.
*   **Spring Community:** For the cutting-edge tools in the **Spring Boot 4.0** ecosystem.
*   **Figma:** For enabling the UI/UX design and prototyping phase.

Copyright © 2025 [Yashasvi Vashistha](https://www.linkedin.com/in/yashasvi-vashistha). All rights reserved.
No part of this repository may be copied, distributed, or used without explicit permission from the author. While this project was inspired by the Meta Capstone, the backend implementation and deployment architecture are original works.
