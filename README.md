# README

Welcome to Clime! A weather app to give you current and accurate weather data across the globe.

## What's it all about?

Using Ruby on Rails, I created a back-end API with seeded data that includes a city location and an image of that specific city's skyline. After completing the back-end build, I deployed the production API to Heroku in order to retrieve that data on the front-end. I built the front-end using React.js paired with styled components to achieve my design. I gathered inspiration and color schemes from the Weather widget on my iPhone in order to create a wireframe using Figma. 

For the front-end, I utilized the Open Weather Map API to pull real-time data to display it on the screen. Using the 5 cities from the back-end API, I hoped to show their current temperatures on my home screen. Due to issues with state, the rendering is inconsistent and I have commented out that portion of my code to avoid infinite calls to the API. In addition, I incorporated a search function to be able to retrieve data by searching a city name, which takes you to a Results screen.

Given more time, I am confident I could have figured out what the issue is. The challenges I ran into were very new to me and took a lot of time to sift through. I have learned a lot during this assessment, including what I already knew and things I need to spend more time on.  

Figma Wireframe: https://www.figma.com/file/q0oAAXjxhvcsVtPXwAsEdr/Clime?node-id=0%3A1
Heroku App: https://clime-api.herokuapp.com/cities
