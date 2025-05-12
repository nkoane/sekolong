# Himalaya YouTube Playlist Viewer

This project is a simple web application that fetches and displays videos from a YouTube playlist. It uses the YouTube Data API to retrieve playlist items and dynamically embeds the videos on the page.

## Features

- Fetches videos from a specified YouTube playlist.
- Dynamically displays the videos in an ordered list.
- Responsive and clean UI built with HTML and CSS.

## How It Works

1. The application fetches an API key from a local `env.json` file (excluded from version control via `.gitignore`).
2. It uses the API key to make a request to the YouTube Data API for playlist items.
3. The videos are embedded into the page using `<iframe>` elements.

## Project Structure

- `index.html`: The main HTML file that defines the structure of the web page.
- `main.css`: Styles for the web page.
- `main.js`: JavaScript file that handles fetching data from the YouTube API and dynamically updating the DOM.
- `env.json`: Contains the API key for accessing the YouTube Data API (excluded from version control).
- `.env`: Stores the API key for local development (also excluded from version control).

## Prerequisites

- A valid YouTube Data API key.
- A YouTube playlist ID.

## How to Run

1. Clone the repository.
2. Add your YouTube Data API key to the `env.json` file.
3. Open `index.html` in a browser to view the application.

## Disclaimer

This project is for educational purposes only. Ensure you comply with YouTube's API usage policies when using this codebase.