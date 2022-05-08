import React, { useEffect, useState } from 'react';
import axios from 'axios';

import NavBar from '../../Components/NavBar/NavBar';

// styles
import './LandingPage.scss';

function LandingPage() {

    const [loading, setLoading] = useState(false);

    const [data, setData] = useState<any>();

    const getAll = () => {
        setLoading(true);
        axios
          .get("https://api.covid19api.com/summary")
          .then(function (response) {
            console.log(response.data);
            setData(response.data);
            setLoading(false);
          });
      };

    useEffect(()=>{getAll();},[])

  return (
    <div>
        <NavBar/>
        <div className="container">
        <p>GLOBAL STATS</p>
        {!loading &&
            data &&
                <div>
                    <p>Total Cases: {data.Global.TotalConfirmed}</p>
                    <p>Total Deaths: {data.Global.TotalDeaths}</p>
                </div>
        }
        </div>
    </div>
  );
}

export default LandingPage;
