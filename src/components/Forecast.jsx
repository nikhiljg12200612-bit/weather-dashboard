import { Cloud, CloudRain, Sun } from 'lucide-react'

function Forecast({ forecast }) {
  const getWeatherIcon = (main) => {
    switch (main) {
      case 'Clear':
        return <Sun className="w-8 h-8 text-yellow-300" />
      case 'Clouds':
        return <Cloud className="w-8 h-8 text-gray-300" />
      case 'Rain':
        return <CloudRain className="w-8 h-8 text-blue-300" />
      default:
        return <Cloud className="w-8 h-8 text-gray-300" />
    }
  }

  // Get unique days from forecast (one entry per day at noon)
  const dailyForecasts = forecast.list.filter((item, index) => index % 8 === 0).slice(0, 5)

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000)
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
  }

  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl p-8 text-white shadow-2xl border border-white border-opacity-30">
      <h3 className="text-2xl font-bold mb-6">5-Day Forecast</h3>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {dailyForecasts.map((item, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-10 rounded-xl p-4 backdrop-blur text-center hover:bg-opacity-20 transition"
          >
            <p className="font-semibold mb-3">{formatDate(item.dt)}</p>
            <div className="flex justify-center mb-3">
              {getWeatherIcon(item.weather[0].main)}
            </div>
            <p className="text-sm opacity-80 mb-2 capitalize">{item.weather[0].description}</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">{Math.round(item.main.temp_max)}°</span>
              <span className="text-sm opacity-70">{Math.round(item.main.temp_min)}°</span>
            </div>
            <p className="text-xs opacity-70 mt-2">💧 {item.main.humidity}%</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Forecast
