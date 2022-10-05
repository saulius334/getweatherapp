import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import './forecast.css';

const oroSalygos = {
  clear: `Giedra`,
  isolated_clouds: `Mažai debesuota`,
  scattered_clouds: `Debesuota su pragiedruliais`,
  overcast: `Debesuota`,
  light_rain: `Nedidelis lietus`,
  moderate_rain: `Lietus`,
  heavy_rain: `Smarkus lietus`,
  sleet: `Šlapdriba`,
  light_snow: `Nedidelis sniegas`,
  moderate_snow: `Sniegas`,
  heavy_snow: `Smarkus sniegas`,
  fog: `Rūkas`,
  na: `Oro sąlygos nenustatytos`,
};
// const vejoKryptis = [
//   "Šiaurės", "Rytų", "Pietų", "Vakarų"
// ]

const WEEK_DAYS = [
  "Pirmadienis",
  "Antradienis",
  "Trečiadienis",
  "Ketvirtadienis",
  "Penktadienis",
  "Šeštadienis",
  "Sekmadienis",
];

const Forecast = ({ data }) => {
  console.log(data)
  let oras = data.forecastTimestamps[0].conditionCode.replace("-", "_");
  const dayOfTheWeek = new Date().getDay();
  const day = WEEK_DAYS.slice(dayOfTheWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayOfTheWeek)
  );
  const fixedData = data.forecastTimestamps.filter(
    (item) =>
    //console.log(item)
 item.forecastTimeUtc.split(" ")[1] === "03:00:00" ||
item.forecastTimeUtc.split(" ")[1] === "06:00:00" ||
item.forecastTimeUtc.split(" ")[1] === "09:00:00" ||
item.forecastTimeUtc.split(" ")[1] === "12:00:00" ||
item.forecastTimeUtc.split(" ")[1] === "15:00:00" ||
item.forecastTimeUtc.split(" ")[1] === "18:00:00" ||
item.forecastTimeUtc.split(" ")[1] === "21:00:00" ||
item.forecastTimeUtc.split(" ")[1] === "00:00:00"
      );
      console.log(fixedData);
    function weekInfo() {
      let list = []
      let date = new Date()
      for(let i = 0; i < 7; i++) {
        date.setDate(date.getDate() + i)
        console.log('date-',date)
        let todayTimes = fixedData.filter((item) => item.forecastTimeUtc.split(" ")[0] === date.toISOString().split('T')[0]);
        list[i] = 
          todayTimes
      }
      return list;



    }
    console.log(weekInfo());
    // console.log(fixedData[0].forecastTimeUtc.split(" ")[0]);
    // let date = new Date();
    // date.setDate(date.getDate() + 1)
    // console.log(date.toISOString().split('T')[0]);

  function getMinMaxTemp(currentDay) {
    if (currentDay === new Date().toISOString().split('T')[0]) {
    let min = fixedData[0].airTemperature;
    let max = fixedData[0].airTemperature;
    for (let i = 1; i < fixedData.length; i++) {
      if (fixedData[i].airTemperature < min) {
        min = fixedData[i].airTemperature
      }
      if (fixedData[i].airTemperature > max) {
        max = fixedData[i].airTemperature
      }
    }
    return `Min temp: ${min}, Max temp:${max}`;
  }
}

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {fixedData.splice(0,7).map((item, index, array) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    src={`icons/${item.conditionCode}.png`}
                    className="icon-small"
                    alt="weather"
                  />
                  {index}
                  <label className="day">{day[index]}</label>
                  <label className="description">{oroSalygos[oras]}</label>
                  <label className="min-max">{getMinMaxTemp(array[index].forecastTimeUtc.split(' ')[0])}</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Slėgis </label>
                  <label>{item.seaLevelPressure} hPa</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Drėgnumas </label>
                  <label>{item.relativeHumidity}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Vėjas </label>
                  <label>{item.windSpeed} m/s</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
