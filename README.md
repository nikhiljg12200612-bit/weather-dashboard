# Weather Dashboard ☀️

A modern, responsive weather dashboard application that fetches real-time weather data from the OpenWeatherMap API. Built with React, Tailwind CSS, and Vite.

## Features

✨ **Real-time Weather Data**
- Current weather conditions for any city worldwide
- Temperature, humidity, wind speed, pressure, and visibility
- Feels-like temperature and min/max temperatures
- Weather condition icons and descriptions

📅 **5-Day Weather Forecast**
- Daily forecast with high/low temperatures
- Weather conditions and humidity
- Visual weather icons

🎨 **Beautiful UI**
- Modern gradient background
- Glass-morphism design with backdrop blur
- Responsive layout (mobile, tablet, desktop)
- Smooth animations and transitions
- Dark-themed interface

🔍 **Easy Search**
- Search weather by city name
- Real-time error handling
- Loading states

## Tech Stack

- **Frontend Framework:** React 18
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **HTTP Client:** Axios
- **Icons:** Lucide React
- **Weather API:** OpenWeatherMap API

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- OpenWeatherMap API key (free at https://openweathermap.org/api)

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/nikhiljg12200612-bit/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get your API key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate an API key

4. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your OpenWeatherMap API key:
   ```
   VITE_WEATHER_API_KEY=your_api_key_here
   VITE_WEATHER_API_URL=https://api.openweathermap.org/data/2.5
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:3000`

## Usage

1. Open the application in your browser
2. Enter a city name in the search bar
3. Click "Search" or press Enter
4. View current weather conditions and 5-day forecast

## Project Structure

```
weather-dashboard/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx      # Search input component
│   │   ├── CurrentWeather.jsx # Current weather display
│   │   └── Forecast.jsx       # 5-day forecast component
│   ├── services/
│   │   └── weatherService.js  # API service functions
│   ├── App.jsx                # Main application component
│   ├── main.jsx               # React entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## API Reference

### Current Weather Endpoint
```
GET /weather?q={city}&appid={API_KEY}&units=metric
```

### Forecast Endpoint
```
GET /forecast?lat={latitude}&lon={longitude}&appid={API_KEY}&units=metric
```

## Features Breakdown

### Current Weather Display
- City name and country code
- Current temperature
- Weather condition with description
- Humidity percentage
- Wind speed
- Atmospheric pressure
- Visibility
- Feels-like temperature
- Min/Max temperature range

### Forecast Display
- 5-day forecast (one entry per day)
- High/Low temperatures
- Weather conditions
- Humidity levels
- Weather condition icons

## Error Handling

- **City Not Found:** Displays user-friendly error message
- **API Errors:** Catches and displays API errors
- **Missing API Key:** Console warning if API key is not configured
- **Loading States:** Shows loading spinner during data fetch

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Add location-based weather (geolocation)
- [ ] Weather alerts and notifications
- [ ] Multiple city comparison
- [ ] Weather history and trends
- [ ] Unit toggle (Celsius/Fahrenheit)
- [ ] Dark/Light theme toggle
- [ ] Saved favorite cities
- [ ] Weather charts and graphs
- [ ] Air quality information
- [ ] PWA support (offline functionality)

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Troubleshooting

### "City not found" error
- Check the spelling of the city name
- Use the full city name (e.g., "New York" instead of "NY")
- Some smaller cities might not be available

### No weather data displays
- Verify your API key is correct and active
- Check if your API key quota has been exceeded
- Ensure internet connection is active

### Environment variable not working
- Restart the development server after adding the .env file
- Ensure variable names start with `VITE_`
- Check that .env file is in the root directory

## Contact & Support

For issues, questions, or suggestions, please open an issue on the GitHub repository.

---

**Happy weather checking! 🌤️**
