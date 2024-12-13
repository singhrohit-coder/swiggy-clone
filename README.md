# Food Ordering Application

This is a simple React project created by **Rohit Singh** as part of a learning exercise. It demonstrates basic React concepts such as state management, fetching data, and rendering dynamic content. The project showcases a list of restaurants with the ability to filter based on rating and search by name.

## Project Overview

The app displays a list of restaurants fetched from a dummy API. It includes features like:

- **Dynamic rendering** of restaurant cards.
- **Search functionality** to filter restaurants by name.
- **Top-rated restaurant filter** to display only restaurants with ratings above 4.5 stars.

## Features

- **Home**: Displays a list of restaurants with images, names, cuisines, and ratings.
- **Search**: Allows users to search restaurants by name.
- **Filter**: Users can filter the list to show top-rated restaurants (ratings > 4.5).

## Project Structure

The project follows a simple folder structure:

```
├── public/
│   └── index.html         # Main HTML file
├── src/
│   ├── components/        # Reusable components like Header, Body, RestaurantCard
│   ├── utils/             # Utility functions like constants
│   ├── App.js             # Main App component that ties everything together
│   ├── index.js           # Entry point for the React application
│   ├── index.css          # Global styles for the app
└── package.json           # Project dependencies and configurations
```

## Technologies Used

- **React**: The core library for building the user interface.
- **Parcel**: A web application bundler for fast and efficient build processes.
- **CSS**: For styling the application and creating a responsive layout.

## Setup Instructions

Follow these steps to run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/singhrohit-coder/swiggy-clone.git
   ```

2. Navigate to the project folder:
   ```bash
   cd swiggy-clone
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and visit `http://localhost:1234` to view the project.

## How It Works

- The `Header` component displays the logo and navigation items, along with a button that toggles between "Sign in" and "Logout" based on user interaction.
- The `Body` component handles fetching the restaurant data from a dummy API and displays it in the form of restaurant cards.
- The `RestaurantCard` component renders each individual restaurant's information, including an image, name, cuisine, and rating.
- The `Shimmer` component is shown while the data is loading.

## Future Enhancements

- Improve search functionality to handle partial matches more efficiently.
- Add more filters such as cuisine or price range.
- Implement routing with `react-router` for navigation between different pages (e.g., Home, Offers, Cart).


## Contact

- **Author**: Rohit Singh
- **GitHub**: [singhrohit-coder](https://github.com/singhrohit-coder)

---
<<<<<<< HEAD
=======

>>>>>>> ed4cd86d17ba35e5916dde1ddbbe7318d3ea31a4
