/**
 * @description      :
 * @author           : DHANUSH
 * @group            :
 * @created          : 03/10/2025 - 11:33:13
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 03/10/2025
 * - Author          : DHANUSH
 * - Modification    :
 **/

import "./App.css";
import { countriesUrl } from "./Constants/Urls";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [countiresData, setCountriesData] = useState([]);

  useEffect(() => {
    getCountriesList();
  }, []);

  const getCountriesList = async () => {
    try {
      let data = await axios.get(countriesUrl);
      setCountriesData(data.data);
    } catch (error) {
      console.error("Error fetching data");
      console.error(error);
    }
  };

  return (
    <div className="body">
      <div className="title">X-Countries</div>
      <div className="content">
        {countiresData.map((ele, index) => {
          return (
            <div className="card" key={index}>
              <img className="flag" src={ele.flag} alt={ele.abbr}></img>
              <div> {ele.name} </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
