import './App.css';
import CurrentWeather from './components/current-weather/current-weather';
import Search from './components/search/search';

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
      <CurrentWeather />
    </div>
  );
}

export default App;
