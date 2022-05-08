import React, { useEffect, useState } from 'react';
import axios from 'axios';

import NavBar from '../../Components/NavBar/NavBar';
import CountryTable from '../../Components/CountryTable/CountryTable';

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
            setData(response.data);
            setLoading(false);
          });
      };

    useEffect(()=>{getAll();},[])

  return (
    <div className="container">
        <NavBar/>
        <div className="page">
            <div className="global-container">
                <p>GLOBAL STATS</p>
                {!loading &&
                    data &&
                        <div>
                            <p>Total Cases: {data.Global.TotalConfirmed}</p>
                            <p>Total Deaths: {data.Global.TotalDeaths}</p>
                        </div>
                }
            </div>
            
            {!loading &&
                data &&
                <div className='table-container'>
                    <CountryTable tableData={data.Countries}/>
                </div>
            }
        </div>
       
    </div>
  );
}

export default LandingPage;
