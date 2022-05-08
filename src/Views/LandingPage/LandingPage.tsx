import React, { useEffect, useState } from 'react';
import axios from 'axios';

import NavBar from '../../Components/NavBar/NavBar';
//import CountryTable from '../../Components/CountryTable/CountryTable';

// styles
import './LandingPage.scss';

function LandingPage() {

    const [loading, setLoading] = useState(false);

    const [data, setData] = useState<any>();

    const getAll = () => {
        setLoading(true);
        axios
          .get("https://www.hpb.health.gov.lk/api/get-current-statistical")
          .then(function (response) {
            console.log(response.data.data, "DATA")
            setData(response.data.data);
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
                <div className="global-box-container"> 
                    <div className="global-box">
                        <p>Total Cases: {data ? parseInt(data.global_total_cases).toLocaleString() : 0}</p>
                        <p>Total Deaths: {data ? parseInt(data.global_deaths).toLocaleString() : 0}</p>
                    </div>
                    <div className="global-box">
                        <p>New Cases: {data ? parseInt(data.global_new_cases).toLocaleString() : 0}</p>
                        <p>New Deaths: {data ? parseInt(data.global_new_deaths).toLocaleString() : 0}</p>
                    </div>
                    <div className="global-box">
                        <p>Recoveries: {data ? parseInt(data.global_recovered).toLocaleString() : 0}</p>
                    </div>
                </div>
                   
                }
            </div>

            <div className="local-container">
                <p>SRI LANKAN STATS</p>
                {!loading &&
                <div className="global-box-container"> 
                    <div className="global-box">
                        <p>Total Cases: {data ? parseInt(data.local_total_cases).toLocaleString() : 0}</p>
                        <p>Total Deaths: {data ? parseInt(data.local_deaths).toLocaleString() : 0}</p>
                    </div>
                    <div className="global-box">
                        <p>New Cases: {data ? parseInt(data.local_new_cases).toLocaleString() : 0}</p>
                        <p>New Deaths: {data ? parseInt(data.local_new_deaths).toLocaleString() : 0}</p>
                    </div>
                    <div className="global-box">
                        <p>Recoveries: {data ? parseInt(data.local_recovered).toLocaleString() : 0}</p>
                    </div>
                </div>
                   
                }
            </div>
            
            {/*!loading &&
                data &&
                <div className='table-container'>
                    <CountryTable tableData={data.Countries}/>
                </div>
            */}
        </div>
       
    </div>
  );
}

export default LandingPage;
