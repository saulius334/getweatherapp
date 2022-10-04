
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";

    const WEEK_DAYS = ['Pirmadienis', 'Antradienis', 'Trečiadienis',
    'Ketvirtadienis', 'Penktadienis', 'Šeštadienis', 'Sekmadienis']
const Forecast = ({data}) => {
    const dayOfTheWeek = new Date().getDay();
    const day =WEEK_DAYS.slice(dayOfTheWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayOfTheWeek));

    const fixedData = data.forecastTimestamps.filter(item =>
        item.forecastTimeUtc.split(' ')[1] === '02:00:00' ||
        item.forecastTimeUtc.split(' ')[1] === '06:00:00' ||
        item.forecastTimeUtc.split(' ')[1] === '10:00:00' ||
        item.forecastTimeUtc.split(' ')[1] === '14:00:00' ||
        item.forecastTimeUtc.split(' ')[1] === '18:00:00' ||
        item.forecastTimeUtc.split(' ')[1] === '22:00:00' )

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {fixedData.map((item, index) => (
            <AccordionItem key={index}>
                <AccordionItemHeading>
                <AccordionItemButton>
                    <div className="daily-item">
                        <img src={`icons/${item.conditionCode}.png`} className="icon-small" alt="weather"/>
                        <label className="day">{day[index]}</label>
                        <label className="description">{oroSalygos[oras]}</label>
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
