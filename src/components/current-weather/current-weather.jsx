import "./current-weather.css";


const CurrentWeather = ({data}) => {
  const oroSalygos = {
    clear : `Giedra`,
    isolated_clouds : `Mažai debesuota`,
    scattered_clouds : `Debesuota su pragiedruliais`,
    overcast : `Debesuota`,
    light_rain : `Nedidelis lietus`,
    moderate_rain : `Lietus`,
    heavy_rain : `Smarkus lietus`,
    sleet : `Šlapdriba`,
    light_snow : `Nedidelis sniegas`,
    moderate_snow : `Sniegas`,
    heavy_snow : `Smarkus sniegas`,
    fog : `Rūkas`,
    na : `Oro sąlygos nenustatytos`
  }
  let oras = data.forecastTimestamps[0].conditionCode
  console.log(oroSalygos[oras]);
  return (
    <>
      <div className="weather">
        <div className="top">
          <div>
            <p className="city">{data.place.name}, {data.place.administrativeDivision}</p>
            <p className="weather-desc">{oroSalygos.oras}</p>
          </div>
          <img src={`icons/${data.forecastTimestamps[0].conditionCode}.png`} className="weather-icon" alt="weather" />
        </div>
        <div className="bottom">
          <p className="temperature">{data.forecastTimestamps[0].airTemperature}C</p>
          <div className="details">
            <div className="parameter-row">
              <span className="parameter-label top">Details</span>
            </div>
            {/* <div className="parameter-row">
              <span className="parameter-label">Feels like</span>
              <span className="parameter-value">{data.forecastTimestamps[0].airTemperature}C</span>
            </div> */}
            <div className="parameter-row">
              <span className="parameter-label">Vėjas</span>
              <span className="parameter-value">{data.forecastTimestamps[0].windSpeed}m/s</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Drėgnumas</span>
              <span className="parameter-value">{data.forecastTimestamps[0].relativeHumidity}%</span>
            </div>
            <div className="parameter-row">
              <span className="parameter-label">Slėgis</span>
              <span className="parameter-value">{data.forecastTimestamps[0].seaLevelPressure} hPa</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CurrentWeather;
