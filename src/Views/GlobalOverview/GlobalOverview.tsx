import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import NavBar from "../../Components/NavBar/NavBar";
import Spinner from "../../Components/Spinner/Spinner";
import GlobalTable from "../../Components/GlobalTable/GlobalTable";

// styles
import "./GlobalOverview.scss";

function GlobalOverview() {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState<any>();

  const getAll = () => {
    setLoading(true);

    axios
      .get("https://api.covid19api.com/summary")
      .then(function (response) {
        setData(response.data.Countries);
        setLoading(false);
      })
      .then(function (response) {})
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
        <div className="table-container">
          <GlobalTable data={data} />
        </div>
      )}
    </>
  );
}

export default GlobalOverview;
