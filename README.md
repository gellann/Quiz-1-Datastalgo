LOVETOHAVEIT E-Commerce Web App

🛍️ Project Overview
Lovetohaveit is a small Filipino business offering stylish and affordable clothing and bags. This full-stack project includes a React frontend for customers to browse products and a Django backend that serves product data dynamically via API endpoints. The site provides a modern, intuitive, and mobile-friendly shopping experience.

🎨 Purpose

Establish a professional online presence beyond social media.

Organize products efficiently with clear categories for clothes and bags.

Enhance user experience with smooth navigation between Home, Clothes, Bags, and Product Details pages.

Enable dynamic product data using a Django REST API.

Prepare for future features like shopping carts, checkout, and user accounts.

💻 Technologies Used

Frontend:

React, React Router DOM, React Bootstrap

Custom JavaScript and CSS for interactivity and styling

Backend:

Python 3.12, Django 5.2.5

Django REST Framework

JsonResponse for API responses

📂 Project Structure

Frontend (React)

src/components/
├─ Header.jsx       # Navigation bar with logo, links, social media
├─ Footer.jsx       # Footer component
├─ Product.jsx      # Reusable product card component
├─ Rating.jsx       # Product rating display
src/screens/
├─ HomeScreen.jsx   # Homepage with hero section and featured products
├─ ClothesScreen.jsx# Page showing all clothing products
├─ BagsScreen.jsx   # Page showing all bag products
src/products.js     # Central product data
src/App.js          # Routes and main layout
src/index.js        # Entry point


Backend (Django)

backend/
├─ backend/         # Django project
│  ├─ settings.py
│  ├─ urls.py
│  └─ wsgi.py
├─ base/            # Django app
│  ├─ __init__.py
│  ├─ urls.py       # API routes
│  ├─ views.py      # API views for products and routes
│  ├─ products.py   # Dummy product data
└─ manage.py

🛣️ Project Routes and API Endpoints

Frontend Routes:

/ → HomeScreen: Brand story, mission, and featured products

/clothes → ClothesScreen: Displays all clothing items

/bags → BagsScreen: Displays all bag products

Backend API Endpoints:

GET / → Returns available routes

GET /products/ → Returns a list of all products

GET /products/<pk>/ → Returns a single product by its _id

The pk parameter is used instead of id to avoid conflicts with Python’s built-in function.

✅ Key Features

Frontend:

Mobile-friendly, responsive design

Categorized product navigation

Product ratings and reviews

Hero and About/Mission sections

Direct social media links

Modern styling with React Bootstrap and CSS

Backend:

Serves dynamic product data to frontend

RESTful API endpoints compatible with React

Uses dummy data in products.py for testing

Supports dynamic routing via pk parameter

🚀 Installation and Running Locally

Frontend:

# Clone repository
git clone <repository-url>

# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Start React development server
npm start


Localhost link for frontend:

http://localhost:3000


Backend:

# Navigate to backend folder
cd backend

# Install dependencies
pip install django djangorestframework

# Apply migrations
python manage.py migrate

# Start Django server
python manage.py runserver


Localhost link for backend (API endpoints):

http://127.0.0.1:8000


Test API URLs:

All products: http://127.0.0.1:8000/products/

<<<<<<< HEAD
Single product: http://127.0.0.1:8000/products/1/
=======
Single product: http://127.0.0.1:8000/products/1/
>>>>>>> f14b0ab (Add Quiz 2 backend and update frontend)
