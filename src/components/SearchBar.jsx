import { useState } from 'react'
import { Search } from 'lucide-react'

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim()) {
      onSearch(input)
      setInput('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search for a city..."
            className="w-full px-6 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-blue-100 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition"
          />
          <Search className="absolute right-4 top-3 text-blue-100" size={20} />
        </div>
        <button
          type="submit"
          className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition shadow-lg"
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchBar
