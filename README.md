README: LOVETOHAVEIT E-Commerce Web App

🛍️ Project Overview
This project is the creation of the first official e-commerce website for Lovetohaveit, a small Filipino business offering stylish and affordable clothing and bags. Built with React, this website provides a modern, intuitive, and mobile-friendly platform where customers can browse products, learn about the brand, and engage with its online presence.

Startup Background: Lovetohaveit
Lovetohaveit was founded by Carol Tolentino, a teacher passionate about fashion, who wanted to make trendy, everyday wear accessible without compromising quality. The brand focuses on practical, comfortable, and stylish clothing and accessories suitable for work, casual outings, and everyday life. Based in San Fernando, Pampanga, Lovetohaveit connects with its customers primarily through social media. https://www.facebook.com/lab2haveit


🎨 Purpose of This Website
Since this is the brand’s first dedicated website, it was developed to:

Establish a professional online presence beyond social media platforms.

Organize products efficiently with clear categories for clothes and bags, each with images, prices, and ratings.

Enhance user experience by providing smooth navigation between Home, Clothes, Bags, and Product Details pages.

Promote customer engagement via direct links to social media.

Prepare for future scalability with potential features like shopping carts, checkout, and user accounts.


💻 Technologies Used
The project uses React as the core library for building dynamic interfaces, along with React Bootstrap for responsive layout and pre-built components like Navbar, Card, and Button. React Router DOM manages page navigation. Custom JavaScript handles logic and interactivity, while CSS and inline styles define the brand’s look and feel.


📂 Project Structure

src/components/Header.jsx: Navigation bar with the brand logo, category links, and Facebook link.

src/components/Footer.jsx: Placeholder footer component.

src/components/Product.jsx: Reusable component to display individual product cards with images, names, prices, and ratings.

src/components/Rating.jsx: Component that displays product ratings and review counts.

src/screens/HomeScreen.jsx: Homepage showcasing the brand story, mission, hero section, and featured products.

src/screens/ClothesScreen.jsx: Page displaying all clothing products.

src/screens/BagsScreen.jsx: Page displaying all bag products.

src/products.js: Central data file containing all products for easy management.

src/App.js: Main file handling routing and layout of the website.

src/index.js: Entry point rendering the React app.


🛣️ Project Routes and Screens

/ → HomeScreen: Introduces the brand, mission, and featured products.

/clothes → ClothesScreen: Displays all clothing items.

/bags → BagsScreen: Displays all bag products.

/product/:id → ProductDetailScreen (planned): Will show product-specific details, images, and reviews.


✅ Key Features

Mobile-friendly, responsive design.

Categorized product navigation for easy browsing.

Product ratings and reviews displayed using a reusable Rating component.

Hero section and About/Mission sections to tell the brand story.

Direct Facebook link to increase customer engagement.

Clean, modern styling with React Bootstrap and custom CSS hover effects.


🚀 Installation and Running Locally
To run the project locally:

Clone the repository:

git clone https://github.com/gellann/Quiz-1-Datastalgo.git


Navigate to the project folder:

cd Quiz-1-Datastalgo


Install dependencies:

npm install


Start the development server:

npm start


Open http://localhost:3000
 in your browser.
