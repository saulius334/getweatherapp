import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { METEO_API_URL, meteoApiOptions } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(`${METEO_API_URL}/places`, meteoApiOptions)
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.map((city) => {
            return {
              value: `${city.code}`,
              label: `${city.name}, ${city.administrativeDivision}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
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
