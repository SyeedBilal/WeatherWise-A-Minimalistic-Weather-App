const Card = ({ cityData }) => {
    if (!cityData || Object.keys(cityData).length === 0) {
      return <p className="text-center">No data available. Please search for a city.</p>;
    }
  
    const temp = cityData.main?.temp;
    const name = cityData.name;
    const humidity = cityData.main?.humidity;
    const wind = cityData.wind?.speed;
  
    return (
      <div>
        <img src="/Images/rain.png" alt="Weather Icon" className="weather-icon" />
        <h1 className="temp">{temp}</h1>
        <h2 className="city">{name}</h2>
        <div className="details">
          <div className="col1">
            <img src="/Images/humidity.png" alt="Humidity Icon" />
            <div>
              <p className="humidity">{humidity}</p>
              <p>Humidity</p>
            </div>
          </div>
          <div className="col2">
            <img src="/Images/wind.png" alt="Wind Icon" />
            <div>
              <p className="wind">{wind}</p>
              <p>Wind</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  