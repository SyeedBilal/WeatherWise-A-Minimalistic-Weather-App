function Input({ setCurrCity, cityName, setCityData }) {
    const handleOnChange = (e) => {
      setCurrCity(e.target.value);
    };
  
    const handleFetchRequest = async (cityName) => {
      try {
        const url = "https://api.openweathermap.org/data/2.5/weather?q";
        const apikey = "5acfac9bcfd556d39142981d2a998ae0"; // Replace with your API key.
        const response = await fetch(`${url}=${cityName}&appid=${apikey}`);
        const data = await response.json();
  
        if (!response.ok) {
          console.log("Response cleared");
          console.log("Fetched Data:", data);
          setCityData(data);
        }
  
        if (response.status === 304) {
          console.log("Using cached data");
          return;
        }
      } catch {
        throw new Error("Failed to get City Weather");
      }
    };
  
    return (
      <div className="mb-6">
        <label htmlFor="city" className="block text-sm font-semibold mb-2">
          Enter City
        </label>
        <div className="flex">
          <input
            type="text"
            id="city"
            placeholder="Enter city name"
            className="flex-1 px-4 py-2 text-black rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            onChange={(e) => handleOnChange(e)}
          />
          <button
            className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-r-lg font-semibold"
            onClick={() => handleFetchRequest(cityName)}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
  
  export default Input;
  