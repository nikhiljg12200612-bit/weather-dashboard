import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurrentWeather'
import Forecast from './components/Forecast'
import { fetchWeatherData, fetchForecastData } from './services/weatherService'
import './App.css'

function App() {
  const [city, setCity] = useState('London')
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadWeatherData(city)
  }, [])

  const loadWeatherData = async (cityName) => {
    setLoading(true)
    setError(null)
    try {
      const weatherData = await fetchWeatherData(cityName)
      const forecastData = await fetchForecastData(weatherData.coord.lat, weatherData.coord.lon)
      setWeather(weatherData)
      setForecast(forecastData)
      setCity(cityName)
    } catch (err) {
      setError(err.message || 'Failed to fetch weather data')
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (searchCity) => {
    if (searchCity.trim()) {
      loadWeatherData(searchCity)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-2">Weather Dashboard</h1>
          <p className="text-blue-100">Get real-time weather information for any city</p>
        </div>

        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} />

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            </div>
            <p className="text-white mt-4">Loading weather data...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-500 text-white p-4 rounded-lg mb-6 text-center">
            <p className="font-semibold">Error: {error}</p>
          </div>
        )}

        {/* Weather Data */}
        {weather && !loading && (
          <>
            <CurrentWeather weather={weather} />
            {forecast && <Forecast forecast={forecast} />}
          </>
        )}
      </div>
    </div>
  )
}

export default App
