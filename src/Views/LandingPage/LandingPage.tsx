import React, { useEffect, useState } from "react";
import axios from "axios";

// Components
import NavBar from "../../Components/NavBar/NavBar";
import Spinner from "../../Components/Spinner/Spinner";
import DetailCard from "../../Components/DetailCard/DetailCard";
import Heading from "../../Components/Heading/Heading";

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
      })
      .catch(function (error) {
        console.log(error, "API ERROR OCCURED");
        setLoading(true);
      });
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <NavBar />
      {loading && (
        <div className="spinner">
          <Spinner />
        </div>
      )}
      {!loading && (
        <div className="container">
          <div className="page">
            <div className="global-container">
              <Heading text={"GLOBAL STATISTICS"} level={3} />
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
                      data
                        ? parseInt(data.global_new_cases).toLocaleString()
                        : 0
                    }`}
                    secondRow={`New Deaths: ${
                      data
                        ? parseInt(data.global_new_deaths).toLocaleString()
                        : 0
                    }`}
                  />
                  <DetailCard
                    title={"Recoveries"}
                    firstRow={`New Cases: ${
                      data
                        ? parseInt(data.global_recovered).toLocaleString()
                        : 0
                    }`}
                  />
                </div>
              )}
            </div>

            <div className="local-container">
              <Heading text={"SRI LANKAN STATISTICS"} level={3} />
              {!loading && (
                <div className="global-box-container">
                  <DetailCard
                    title={"Total Local Statistics"}
                    firstRow={`Total Cases: ${
                      data
                        ? parseInt(data.local_total_cases).toLocaleString()
                        : 0
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
                      data
                        ? parseInt(data.local_new_deaths).toLocaleString()
                        : 0
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
      )}
    </>
  );
}

export default LandingPage;
