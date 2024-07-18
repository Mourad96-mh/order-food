# A simple food ordering application built with React.js, featuring a dummy backend, global state management using Context API, and a reusable modal for collecting user information.

## Table of Contents

1-Introduction
2-Features
3-Technologies Used
4-Getting Started
5-Usage
6-Project Structure
7-Contributing
8-License
9-Contact

## Introduction

This project demonstrates a basic food ordering system where users can browse meal items, add them to their cart, and place orders. The application uses React.js for the frontend and a dummy backend to simulate data retrieval and order processing.

## Features

Browse and select meals from a menu
Add meals to the cart
Place orders with user information collected through a modal
Global state management using Context API
Responsive design

## Technologies Used

React.js
Context API
CSS (or any other styling library you used)
Dummy backend (you can specify the tool or framework used)
Getting Started
To get a local copy up and running, follow these simple steps:

## Prerequisites

Node.js and npm installed on your machine

## Installation

Clone the repository:

### sh

git clone https://github.com/Mourad9-mh/order-food.git
Navigate to the project directory:

### sh

cd food-order-project
Install the dependencies:

### sh

npm install
Start the development server:

### sh

Copy code

npm start

### Usage

1- Open your browser and navigate to http://localhost:3000.
2- Browse the menu and add meals to your cart.
3- Click on the cart to review your order and proceed to checkout.
4- Fill in the user information in the modal and place your order.

## Project Structure

food-order-project/
│
├── public/
│ ├── index.html
│ └── ...
│
├── src/
│ ├── components/
│ │ ├── Meals/
│ │ ├── Cart/
│ │ └── UI/
│ │ ├── Modal.js
│ │ └── ...
│ │
│ ├── context/
│ │ └── CartContext.js
| | └── UprogressContext.js

│ ├── hooks/
│ ├── useClickOutside.js
│ ├── useGeocode.js
│ └── useHttp.js
| |── useInput.js

│
├── package.json
└── README.md
