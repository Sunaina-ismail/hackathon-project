# GIAIC Hackathon Documentation
---

## Nike Ecommerce

---

## Day 1: layig the Foundation for your Marketplace Journey

- **Objective:** Build an e-commerce platform for Nike products.

- **Technology Stack:**
  - Frontend: Next.js (for dynamic product listings, cart, checkout)
  - Backend: Sanity CMS (for product management, customer data, and orders)
  - CSS Framework: Tailwind CSS (for responsive design)

- **Platform Features:**
  - Product listings with dynamic details (name, price, description, image, etc.)
  - Order management, checkout process.

- **Setup:** Initialized Next.js project with Tailwind CSS and configured Sanity CMS.

---

## Day 2: Planning the Technical Foundation

- **System Architecture:**
  - Frontend (Next.js): Handles dynamic pages and integrates APIs.
  - Product Data API: Fetches product information from external sources.
  - Sanity CMS (Backend): Manages product data, orders, and customer info.


- **Technologies Used:**
  - Next.js for frontend development, Sanity CMS for content management, ShipEngine for shipment tracking, and Stripe for payments.

- **Core Pages:**
  - Home Page: Displays featured products.
  - Product Listings: Allows product search and filtering.
  - Product Details: Displays detailed information about each product.
  - Cart and Checkout Pages: Handles user shopping cart and checkout process.

---

## Day 3: API Integration and Data Migration

- **API Integration:**
  - Integrated Product API to fetch product data dynamically (ID, name, price, description, image, inventory, size).
  - Validated schema compatibility with Sanity CMS to ensure data was migrated correctly.
  - Migrated product data into Sanity CMS and ensured proper mapping for frontend display.

- **Tools Used:**
  - Next.js, Axios (for API requests), dotenv (for environment variables), Sanity CMS.

- **Outcome:** Successfully displayed product data on the frontend, including dynamic product listings.

---

## Day 4: Building Dynamic Frontend Components

- **Functional Deliverables:**
  - **Product Listing Page:** Displays a list of products with details (name, price, image).

  - **Product Details Page:** Shows detailed information about the selected product (description, stock, price, add to cart button).
  - **Filters and Sorting:** Users can filter products by category, size, price, and color.

  - **Add to Cart:** Allows users to add products to the cart and adjust quantities.

  - **Billing and Order Tracking:** Users can view their orders and track shipment status.

- **Components Built:**
  - ProductCard for displaying product information.
  - Dynamic Product Details component for individual product pages.
  - Cart functionality for adding/removing items from the cart.

---

## Day 5: Testing, Error Handling, and Backend Integration Refinement

- **Functional Testing:**
  - Validated features such as product listing, cart, checkout, and user filters.
  - Ensured that core functionalities were working correctly across browsers (Chrome, Firefox, Safari, Edge).
  - Device testing on mobile and desktop devices using BrowserStack and physical devices.

- **Error Handling:**
  - API errors were handled using try-catch blocks.
  - User-friendly error messages for network issues, missing items, and invalid input.
  - Checkout validation using Zod to ensure correct data submission.

- **Performance Optimization:**
  - Improved load times with lazy loading for images and CSS/JavaScript optimizations.
  - Achieved high Lighthouse scores (Performance: 99, SEO: 100, Best Practices: 100).
  - Simulated real-world use to test product browsing, cart actions, and checkout process.

- **Test Cases:**
  - All functional tests passed (e.g., navigation, product listing, checkout, SEO optimization).
  - Performance tests confirmed fast load times and smooth user experience.

---

## Day 6: Deployment Preparation and Staging

- **Staging Environment:**  
  Set up a staging environment on Vercel to simulate a production-like setting for thorough testing.  

- **Environment Variables:**  
  Configured environment variables securely to ensure sensitive data is protected.  

- **Validation & Fixes:**  
  Tested application functionality, identified issues, and resolved them before deployment.
