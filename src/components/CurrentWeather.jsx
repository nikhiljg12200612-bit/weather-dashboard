import { Cloud, CloudRain, Sun, Wind, Droplets, Eye, Gauge } from 'lucide-react'

function CurrentWeather({ weather }) {
  const getWeatherIcon = (main) => {
    switch (main) {
      case 'Clear':
        return <Sun className="w-20 h-20" />
      case 'Clouds':
        return <Cloud className="w-20 h-20" />
      case 'Rain':
        return <CloudRain className="w-20 h-20" />
      default:
        return <Cloud className="w-20 h-20" />
    }
  }

  const { main, weather: weatherDetails, wind, main: mainWeather, visibility, pressure } = weather
  const condition = weatherDetails[0]

  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl p-8 mb-8 text-white shadow-2xl border border-white border-opacity-30">
      {/* Location and Temperature */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-4xl font-bold mb-2">{weather.name}, {weather.sys.country}</h2>
          <p className="text-blue-100 text-lg capitalize">{condition.description}</p>
        </div>
        <div className="text-center">
          <div className="flex justify-center text-yellow-300 mb-2">
            {getWeatherIcon(condition.main)}
          </div>
          <div className="text-6xl font-bold">{Math.round(mainWeather.temp)}°C</div>
        </div>
      </div>

      {/* Weather Details Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur">
          <div className="flex items-center gap-2 mb-2">
            <Droplets size={18} />
            <span className="text-sm opacity-80">Humidity</span>
          </div>
          <p className="text-2xl font-semibold">{mainWeather.humidity}%</p>
        </div>

        <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur">
          <div className="flex items-center gap-2 mb-2">
            <Wind size={18} />
            <span className="text-sm opacity-80">Wind Speed</span>
          </div>
          <p className="text-2xl font-semibold">{wind.speed} m/s</p>
        </div>

        <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur">
          <div className="flex items-center gap-2 mb-2">
            <Gauge size={18} />
            <span className="text-sm opacity-80">Pressure</span>
          </div>
          <p className="text-2xl font-semibold">{mainWeather.pressure} hPa</p>
        </div>

        <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur">
          <div className="flex items-center gap-2 mb-2">
            <Eye size={18} />
            <span className="text-sm opacity-80">Visibility</span>
          </div>
          <p className="text-2xl font-semibold">{(weather.visibility / 1000).toFixed(1)} km</p>
        </div>
      </div>

      {/* Feels Like and Min/Max */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur text-center">
          <p className="text-sm opacity-80 mb-1">Feels Like</p>
          <p className="text-2xl font-semibold">{Math.round(mainWeather.feels_like)}°C</p>
        </div>
        <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur text-center">
          <p className="text-sm opacity-80 mb-1">Min Temp</p>
          <p className="text-2xl font-semibold">{Math.round(mainWeather.temp_min)}°C</p>
        </div>
        <div className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-blur text-center">
          <p className="text-sm opacity-80 mb-1">Max Temp</p>
          <p className="text-2xl font-semibold">{Math.round(mainWeather.temp_max)}°C</p>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
