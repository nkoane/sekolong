# Mini Weather App: Lecturer Notes for Students

Welcome class. This project is a clean example of how a front-end JavaScript app
can fetch live API data, transform it, and render it into the DOM.

The project has three core files:

1. index.html: structure of the page.
2. main.css: cute-brutalism visual design and UI state styling.
3. main.js: application logic, API calls, and DOM updates.

This guide focuses mainly on the JavaScript in main.js.

## 1. What the App Does

At a high level, the app:

1. Loads and tries to get the user location.
2. If location is available, fetches weather for those coordinates.
3. If location fails, uses a default city.
4. Lets the user search for any city through a form.
5. Updates the main weather panel with current hour values.
6. Shows exactly one forecast card for the next relevant hour.
7. Applies visual states for loading, error, and condition theme.

## 2. HTML Hooks the JavaScript Uses

JavaScript targets these UI elements:

1. Form with id getTheCityForm.

# Mini Weather App: Lecturer Notes for Students

Welcome class. This project is a clear example of how a front-end JavaScript app
fetches real API data, transforms it, and renders it to the DOM.

The project has three core files.

1. index.html: page structure.
2. main.css: cute-brutalism design and UI state styling.
3. main.js: app logic, API calls, and DOM updates.

This guide focuses mainly on the JavaScript flow in main.js.

## 1. What the App Does

At a high level, the app does the following.

1. Loads and attempts to get the user location.
2. If location is available, fetches weather for those coordinates.
3. If location fails, falls back to a default city.
4. Lets the user search for another city.
5. Updates the weather panel with current-hour values.
6. Shows exactly one forecast card for the next relevant hour.
7. Applies loading, error, and condition states for styling.

## 2. HTML Hooks Used by JavaScript

JavaScript depends on these selectors.

1. Form id: getTheCityForm.
2. Weather panel id: panel.
3. City value class: city.
4. Temperature value class: temperature.
5. Time value class: time.
6. Rain value class: rain.
7. Forecast list id: hourly.
8. Main container element for state classes and condition data attribute.

Teaching point: selector names are a contract. If HTML selectors change,
JavaScript must change too.

## 3. Startup Lifecycle

On DOMContentLoaded, initialization runs.

Initialization steps are below.

1. Attach submit handler to the city form.
2. Request browser geolocation.
3. If geolocation succeeds, call weather loader with coordinates.
4. If geolocation fails, call weather loader using fallback behavior.
5. Make a fallback weather call so data appears even when location is
   unavailable.

This demonstrates event-driven setup and graceful fallback design.

## 4. Form Submission Flow

When the form is submitted, JavaScript does this.

1. Prevent default page refresh.
2. Trim the city input.
3. If not empty, call the weather loader with the city.

Why this matters:

1. The app behaves like a single-page interaction.
2. Trimmed input reduces whitespace-related bugs.

## 5. Core Function: getTheWeatherDetails

This is the central function in the app.

Inputs:

1. coords: optional coordinate object.
2. city: optional city name with default Johannesburg.

The function performs five jobs.

### Job A: Set pre-fetch UI state

Before network calls, it sets UI state.

1. Add is-loading class to main.
2. Remove is-error class from main.

This enables CSS-based loading feedback.

### Job B: Resolve coordinates

If coords is missing, it uses geocoding.

1. Call city geocoding API.
2. Parse JSON response.
3. Validate that results exist.
4. Extract latitude and longitude.
5. Normalize city display name from returned data.

If city lookup fails, an error is thrown and handled in catch.

### Job C: Fetch weather data

After coordinates are ready, it:

1. Builds the weather API URL.
2. Fetches hourly forecast data.
3. Parses JSON.

Key hourly fields used in rendering are below.

1. time
2. temperature_2m
3. rain
4. wind_speed_10m

### Job D: Update panel values

It computes current hour and updates panel content.

1. City text.
2. Temperature in Celsius.
3. Time formatted as hour and minute.
4. Rain amount in millimeters.

It also sets main condition state.

1. rainy when rain is above zero.
2. clear when rain is zero.

This is strong separation of concerns: JavaScript sets state, CSS styles state.

### Job E: Render one forecast card only

The app intentionally renders one card, not a list of many cards.

1. Clear existing forecast content.
2. Find first hour that is now or later.
3. Fallback to current hour if needed.
4. Create one list item.
5. Insert formatted text and weather icons.
6. Append single card to the forecast container.

This avoids duplicate entries after repeated searches.

## 6. Error Handling Pattern

The async workflow is wrapped in try, catch, and finally.

On failure, catch does this.

1. Logs the error.
2. Applies is-error class.
3. Sets condition to unknown.
4. Shows placeholder values in the panel.
5. Shows a user-friendly forecast message.

Finally always removes is-loading, which guarantees UI cleanup.

## 7. JavaScript and CSS State Contract

JavaScript sets these UI states.

1. main.is-loading
2. main.is-error
3. main data-condition with values rainy, clear, or unknown

CSS reacts to those states. This keeps logic and styling decoupled.

## 8. External APIs and Browser APIs

1. Open-Meteo Geocoding API: city name to coordinates.
2. Open-Meteo Forecast API: hourly weather values.
3. Browser Geolocation API: user location input.

## 9. Common Questions from Students

Why clear forecast content before appending?

1. To prevent stacked or duplicated cards on repeated updates.

Why use optional chaining on geocoding results?

1. To avoid runtime errors when the API returns no results.

Why set condition as data instead of setting colors directly in JavaScript?

1. Because presentation belongs in CSS while logic belongs in JavaScript.

## 10. Suggested Student Exercises

1. Add humidity to the weather panel.
2. Add sunrise and sunset display from daily data.
3. Add a retry action visible only in error state.
4. Replace string-based card HTML with explicit element creation for stronger
   safety.
5. Add temperature unit toggle between Celsius and Fahrenheit.

## 11. Running the App

This is a static front-end project.

1. Open index.html in a browser, or
2. Serve the folder using any local static server.

If geolocation permission is denied, the app still works using city-based
fallback.
