# Food-Deliver-Backend

### This is the backend API for the Food Delivery App, where users can calculate the delivery cost based on selected parameters such as organization, zone, and total distance.

## Features

#### Cost Calculation: Calculate delivery cost based on selected parameters (organization, zone, total distance).
#### Express Middleware: Utilize Express middleware for handling CORS, environment variables, and routing.
#### PostgreSQL Database: Store and manage data using a PostgreSQL database.

## Technologies Used

#### Express.js: Web application framework for Node.js used for building the API endpoints.
#### PostgreSQL: Relational database management system used for storing delivery cost data.
#### pg: PostgreSQL client for Node.js, used for interacting with the database.
#### cors: Middleware for enabling Cross-Origin Resource Sharing.
#### dotenv: Module for loading environment variables from a .env file into process.env.

## Installation

#### Clone this repository: git clone https://github.com/yourusername/food-delivery-backend.git
#### Navigate to the project directory: cd food-delivery-backend
#### Install dependencies: npm install

## Configuration

#### Create a .env file in the root directory based on the provided .env.example file.
#### Update the .env file with your PostgreSQL database connection URI and any other configuration options.

## Usage

#### Start the development server: npm start
#### The server will run on the port specified in the .env file (default is 5000).
#### Connect your frontend application to this backend API to enable delivery cost calculation features.

## API Endpoints
#### POST /api/calculateDeliveryCost: Calculate delivery cost based on selected parameters (organization, zone, total distance).

## Contributing

#### Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or create a pull request.
