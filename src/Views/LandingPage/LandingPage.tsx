import React, { useEffect, useState } from "react";
import axios from "axios";

import NavBar from "../../Components/NavBar/NavBar";
import DetailCard from "../../Components/DetailCard/DetailCard";
//import CountryTable from '../../Components/CountryTable/CountryTable';

// styles
import "./LandingPage.scss";

function LandingPage() {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState<any>();

  const getAll = () => {
    setLoading(true);
    axios
      .get("https://www.hpb.health.gov.lk/api/get-current-statistical")
      .then(function (response) {
        console.log(response.data.data, "DATA");
        setData(response.data.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <NavBar subTitle={"Home"} />
      <div className="container">
        <div className="page">
          <div className="global-container">
            <p>GLOBAL STATS</p>
            {!loading && (
              <div className="global-box-container">
                <DetailCard
                  title={"Total Statistics"}
                  firstRow={`Total Cases: ${
                    data
                      ? parseInt(data.global_total_cases).toLocaleString()
                      : 0
                  }`}
                  secondRow={`Total Deaths: ${
                    data ? parseInt(data.global_deaths).toLocaleString() : 0
                  }`}
                />
                <DetailCard
                  title={"New Statistics"}
                  firstRow={`New Cases: ${
                    data ? parseInt(data.global_new_cases).toLocaleString() : 0
                  }`}
                  secondRow={`New Deaths: ${
                    data ? parseInt(data.global_new_deaths).toLocaleString() : 0
                  }`}
                />
                <DetailCard
                  title={"Recoveries"}
                  firstRow={`New Cases: ${
                    data ? parseInt(data.global_recovered).toLocaleString() : 0
                  }`}
                />
              </div>
            )}
          </div>

          <div className="local-container">
            <p>SRI LANKAN STATS</p>
            {!loading && (
              <div className="global-box-container">
                <DetailCard
                  title={"Total Local Statistics"}
                  firstRow={`Total Cases: ${
                    data ? parseInt(data.local_total_cases).toLocaleString() : 0
                  }`}
                  secondRow={`Total Local Deaths: ${
                    data ? parseInt(data.local_deaths).toLocaleString() : 0
                  }`}
                />
                <DetailCard
                  title={"New Local Statistics"}
                  firstRow={`New Cases: ${
                    data ? parseInt(data.local_new_cases).toLocaleString() : 0
                  }`}
                  secondRow={`New Local Deaths: ${
                    data ? parseInt(data.local_new_deaths).toLocaleString() : 0
                  }`}
                />
                <DetailCard
                  title={"Recoveries"}
                  firstRow={`New Cases: ${
                    data ? parseInt(data.local_recovered).toLocaleString() : 0
                  }`}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
