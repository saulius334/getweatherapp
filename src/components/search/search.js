import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { METEO_API_URL, meteoApiOptions } from "../../api";
import axios from 'axios';

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return axios.get(`${METEO_API_URL}/places`, meteoApiOptions)
      .then((response) => console.log(response.data))
      .then((response) => {
        let list = response.data.filter(item => item.code.search(inputValue) !== -1)
        return {
          options: list.map(item => {
            return {
              value: `${item.code}`,
              label: `${item.name}, ${item.administrativeDivision}`,
            }
          })
        }})
        // .then((options) => console.log(options.options[0].label))
      // .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Įveskite miestą... pvz. Vilnius"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;


