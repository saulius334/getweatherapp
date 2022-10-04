import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

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
  let oras = data.forecastTimestamps[0].conditionCode.replace("-", "_");
  const dayOfTheWeek = new Date().getDay();
  const day = WEEK_DAYS.slice(dayOfTheWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayOfTheWeek)
  );

    const mydata = {
      list : []
    }
    mydata.list = data.forecastTimestamps.filter(
      (item) =>
        item.forecastTimeUtc.split(" ")[1] === "03:00:00" ||
        item.forecastTimeUtc.split(" ")[1] === "06:00:00" ||
        item.forecastTimeUtc.split(" ")[1] === "09:00:00" ||
        item.forecastTimeUtc.split(" ")[1] === "12:00:00" ||
        item.forecastTimeUtc.split(" ")[1] === "15:00:00" ||
        item.forecastTimeUtc.split(" ")[1] === "18:00:00" ||
        item.forecastTimeUtc.split(" ")[1] === "21:00:00" ||
        item.forecastTimeUtc.split(" ")[1] === "00:00:00"
        );
        mydata.minTemp = 
console.log(mydata);




  const fixedData = data.forecastTimestamps.filter(
    (item) =>
      item.forecastTimeUtc.split(" ")[1] === "03:00:00" ||
      item.forecastTimeUtc.split(" ")[1] === "06:00:00" ||
      item.forecastTimeUtc.split(" ")[1] === "09:00:00" ||
      item.forecastTimeUtc.split(" ")[1] === "12:00:00" ||
      item.forecastTimeUtc.split(" ")[1] === "15:00:00" ||
      item.forecastTimeUtc.split(" ")[1] === "18:00:00" ||
      item.forecastTimeUtc.split(" ")[1] === "21:00:00" ||
      item.forecastTimeUtc.split(" ")[1] === "00:00:00"
      );

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
console.log(fixedData);
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
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
