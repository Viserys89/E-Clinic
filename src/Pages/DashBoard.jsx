import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProgressBar from "react-bootstrap/ProgressBar";
import { makeContext } from "../UseContext";
import moment from "moment";
import { API_URL } from "../App";

const DashBoard = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [member, setMember] = useState(0);
  const {userdata} = useContext(makeContext);
  
  const [jumlah, setJumlah] = useState();
  useEffect(() => {
    async function setUsers() {
      const res = await fetch("http://localhost:5000/data/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        try {
          const jsonRest = await res.json();
          console.log(jsonRest);
          if (res.status == 200) {
            setJumlah(jsonRest.id);
          } else {
            alert(jsonRest.alert);
          }
        } catch (err) {
          console.error(err);
        }
      });
    }
    setUsers();
  }, [setJumlah]);

  useEffect(() => {

    let subscribe = false
    if (subscribe) return
    fetch(`${API_URL}/data/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).then(async res => {

        const jsonRes = await res.json();
        if (res.status === 200) {
          setMember(jsonRes.id);
          const mergedData = jsonRes.data.map(({ pekerjaan: nama, count: jumlah }) => {
            return { nama, jumlah };
          });
          setPekerjaan(mergedData);
        } else {
          alert(jsonRes.alert);
        }
    });

    fetch(`${API_URL}/data/darah`)
    .then(res => res.json())
    .then(data => {  
      setGdarah(data);
    })

    return () => {
      subscribe = true
    }

  }, [userdata]);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true)
    fetch(`${API_URL}/data/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }).then(async res => {
      try {
        const jsonRes = await res.json();
        if (res.status === 200) {
          setMember(jsonRes.id);
        } else {
          alert(jsonRes.alert);
        }
      } catch (err) {
        console.log(err)
      }
    }).finally(() => {
      setRefreshing(false)
    });
  }, [refreshing]);

  var jumlahPasien = 1000;

  const [timeRange, setTimeRange] = useState("year");
  const [progressData, setProgressData] = useState({
    demam: { label: "Demam", value: 800 },
    jantung: { label: "Jantung", value: 700 },
    flu: { label: "Flu", value: 650 },
    anemia: { label: "Anemia", value: 600 },
    ginjal: { label: "Ginjal", value: 500 },
    kangker: { label: "Kangker", value: 400 },
  });

  useEffect(() => {
    // fetch progress data based on time range
    let newData;
    if (timeRange === "year") {
      newData = {
        demam: { label: "Demam", value: 400 },
        jantung: { label: "Jantung", value: 700 },
        flu: { label: "Flu", value: 650 },
        anemia: { label: "Anemia", value: 600 },
        ginjal: { label: "Ginjal", value: 550 },
        kangker: { label: "Kangker", value: 400 },
      };
    } else if (timeRange === "month") {
      // fetch data for month
      newData = {
        demam: { label: "Demam", value: 500 },
        jantung: { label: "Jantung", value: 450 },
        flu: { label: "Flu", value: 800 },
        anemia: { label: "Anemia", value: 650 },
        ginjal: { label: "Ginjal", value: 700 },
        kangker: { label: "Kangker", value: 450 },
      };
    } else if (timeRange === "week") {
      newData = {
        demam: { label: "Demam", value: 300 },
        jantung: { label: "Jantung", value: 400 },
        flu: { label: "Flu", value: 600 },
        anemia: { label: "Anemia", value: 250 },
        ginjal: { label: "Ginjal", value: 350 },
        kangker: { label: "Kangker", value: 200 },
      };
    }
    setProgressData(newData);
  });
  const [time, setTime] = useState("year");
  const [Pekerjaan, setPekerjaan] = useState({
    Wiraswasta: { label: "Wiraswasta", value: 800},
    Penyanyi: { label: "Penyanyi", value: 700},
    Guru: { label: "Guru", value: 650},
    Polisi: { label: "Polisi", value: 600},
    Tentara: { label: "Tentara", value: 400},
    Pelajar: { label: "Pelajar", value: 250},
  });

  useEffect(() => {
    // fetch progress data based on time range
    let newData;
    if (time === "year") {
      newData = {
        Wiraswasta: { label: "Wiraswasta", value: 800},
        Penyanyi: { label: "Penyanyi", value: 700},
        Guru: { label: "Guru", value: 650},
        Polisi: { label: "Polisi", value: 600},
        Tentara: { label: "Tentara", value: 400},
        Pelajar: { label: "Pelajar", value: 250},
      };
    } else if (time === "month") {
      // fetch data for month
      newData = {
        Wiraswasta: { label: "Wiraswasta", value: 700},
        Penyanyi: { label: "Penyanyi", value: 600},
        Guru: { label: "Guru", value: 550},
        Polisi: { label: "Polisi", value: 400},
        Tentara: { label: "Tentara", value: 350},
        Pelajar: { label: "Pelajar", value: 100},
      };
    } else if (time === "week") {
      newData = {
        Wiraswasta: { label: "Wiraswasta", value: 600},
        Penyanyi: { label: "Penyanyi", value: 500},
        Guru: { label: "Guru", value: 450},
        Polisi: { label: "Polisi", value: 300},
        Tentara: { label: "Tentara", value: 200},
        Pelajar: { label: "Pelajar", value: 50},
      };
    }
    setPekerjaan(newData);
  });

  const [date, setDate] = useState("year");
  const [Gdarah, setGdarah] = useState({
    A: { label: "A", value: 800},
    B: { label: "B", value: 700},
    AB: { label: "AB", value: 650},
    O: { label: "O", value: 600},
  });

  useEffect(() => {
    // fetch progress data based on time range
    let newData;
    if (date === "year") {
      newData = {
        A: { label: "A", value: 800},
        B: { label: "B", value: 700},
        AB: { label: "AB", value: 650},
        O: { label: "O", value: 600},
      };
    } else if (date === "month") {
      // fetch data for month
      newData = {
        A: { label: "A", value: 700},
        B: { label: "B", value: 600},
        AB: { label: "AB", value: 550},
        O: { label: "O", value: 400},
      };
    } else if (date === "week") {
      newData = {
        A: { label: "A", value: 600},
        B: { label: "B", value: 450},
        AB: { label: "AB", value: 300},
        O: { label: "O", value: 200},
      };
    }
    setGdarah(newData);
  });

  return (
    <>
      <div id="content" refreshing={refreshing} onRefresh={onRefresh}>
        <nav
          className="navbar navbar-main navbar-expand-lg px-4 shadow-none border-radius-xl"
          id="navbarBlur"
          navbar-scroll="true"
        >
          <div className="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                <li className="breadcrumb-item text-sm">
                  <Link className="opacity-5 text-dark" to="/DashBoard">
                    Pages
                  </Link>
                </li>
                <li
                  className="breadcrumb-item text-sm text-dark active"
                  aria-current="page"
                >
                  <b>Dashboard</b>
                </li>
              </ol>
            </nav>
            <div
              className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
              id="navbar"
            >
              <div className="ms-md-auto pe-md-3 d-flex align-items-center"></div>
              <ul className="navbar-nav  justify-content-end">
                <li className="nav-item d-flex align-items-center">
                  <i className="fa fa-bell cursor-pointer mx-lg-2 " />
                  <Link
                    to="/Profile"
                    className="nav-link text-body  font-weight-bold px-0"
                  >
                    <span className="d-sm-inline d-none m-lg-2">
                      {userdata.namalengkap}
                    </span>
                    <i className="fa fa-user me-sm-1 ml-2" />
                  </Link>
                </li>
                <li className="nav-item px-3 d-flex align-items-center">
                  <a href="" className="nav-link text-body p-0">
                    <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* body */}
        <div className="container-fluid">
          <h2 id="titledashboard">Dashboard</h2>
          {/* firstrow */}
          <div className="row">
            <div className="col-12">
              <div className="card" style={{ border: "2px solid black" }}>
                <div className="card-content">
                  <div className="row">
                    <div className="col-lg-4 col-sm-12">
                      <div className="card-body text-center">
                        <img id="borderimage" src="../public/img/orang.svg" />
                        <h1 id="number" className="display-4 white">
                          {jumlah}
                        </h1>
                        <span id="descnumber" className="white">
                          Jumlah orang yang telah registrasi
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                      <div className="card-body text-center">
                        <img
                          id="borderimagesuhu"
                          src="../public/img/suhuu.svg"
                        />
                        <h1 id="number" className="display-4 white">
                          36,2-37,5
                        </h1>
                        <span id="descnumber" className="white">
                          Rata-rata suhu tubuh normal manusia
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                      <div className="card-body text-center">
                        <img id="borderimage" src="../public/img/detakk.svg" />
                        <h1 id="number" className="display-4 white">
                          50-100
                        </h1>
                        <span id="descnumber" className="white">
                          Rata-rata detak jantung normal manusia
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* secondrow */}
          <div id="row2" className="row">
            <div className="col-12">
              <div className="card" style={{ border: "2px solid black" }}>
                <div className="card-content">
                  <div className="row">
                    <div id="topbar">
                      <h2 id="titlestatistik">Statistik Penyakit Pasien</h2>
                      <div id="statbutton">
                        <button
                          id="yearbutton"
                          onClick={() => setTimeRange("year")}
                        >
                          Year
                        </button>
                        <button
                          id="monthbutton"
                          onClick={() => setTimeRange("month")}
                        >
                          Month
                        </button>
                        <button
                          id="weekbutton"
                          onClick={() => setTimeRange("week")}
                        >
                          Week
                        </button>
                      </div>
                      <div id="progressbar3" className="px-4 mt-2">
                        {Object.keys(progressData).map((key) => (
                          <div key={key}>
                            <p>
                              {progressData[key].value} of {jumlahPasien} /{" "}
                              <b>{progressData[key].label}</b>
                            </p>
                            <ProgressBar
                              id="progress"
                              variant={
                                key === "demam"
                                  ? "warning"
                                  : key === "jantung"
                                  ? "success"
                                  : key === "flu"
                                  ? "danger"
                                  : key === "anemia"
                                  ? "Primary"
                                  : key === "ginjal"
                                  ? "warning"
                                  : key === "kangker"
                                  ? "danger"
                                  : "dark"
                              }
                              now={
                                (progressData[key].value / jumlahPasien) * 100
                              }
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* thirdrow */}
              <div id="row3" className="row mt-4">
                <div className="col">
                  <div className="card" style={{ border: "2px solid black" }}>
                    <div className="card-content">
                      <div className="row">
                        <div id="statperkerjaanpasien">
                          <h3 id="titlestatistik">
                            Statistik Pekerjaan Pasien
                          </h3>
                          <div id="statbutton">
                            <button
                              id="yearbutton"
                              onClick={() => setTime("year")}
                            >
                              Year
                            </button>
                            <button
                              id="monthbutton"
                              onClick={() => setTime("month")}
                            >
                              Month
                            </button>
                            <button
                              id="weekbutton"
                              onClick={() => setTime("week")}
                            >
                              Week
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="progressbar3" className="px-4 mt-2">
                      {Object.keys(Pekerjaan).map((key) => (
                        <div key={key}>
                          <p>
                            {Pekerjaan[key].value} of {jumlahPasien} /{" "}
                            <b>{Pekerjaan[key].label}</b>
                          </p>
                          <ProgressBar
                            id="progress"
                            variant={
                              key === "Wiraswasta"
                                ? "warning"
                                : key === "Penyanyi"
                                ? "success"
                                : key === "Guru"
                                ? "danger"
                                : key === "Polisi"
                                ? "Primary"
                                : key === "Tentara"
                                ? "warning"
                                : key === "Pelajar"
                                ? "danger"
                                : "dark"
                            }
                            now={(Pekerjaan[key].value / jumlahPasien) * 100}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card" style={{ border: "2px solid black" }}>
                    <div className="card-content">
                      <div className="row">
                        <div id="statperkerjaanpasien">
                          <h3 id="titlestatistik">Statistik Golongan Darah</h3>
                          <div id="statbutton">
                            <button
                              id="yearbutton"
                              onClick={() => setDate("year")}
                            >
                              Year
                            </button>
                            <button
                              id="monthbutton"
                              onClick={() => setDate("month")}
                            >
                              Month
                            </button>
                            <button
                              id="weekbutton"
                              onClick={() => setDate("week")}
                            >
                              Week
                            </button>
                          </div>
                        </div>
                        <div id="progressbar3" className="px-4 mt-2">
                          {Object.keys(Gdarah).map((key) => (
                            <div key={key}>
                              <p>
                                {Gdarah[key].value} of {jumlahPasien} /{" "}
                                <b>{Gdarah[key].label}</b>
                              </p>
                              <ProgressBar
                                id="progress"
                                variant={
                                  key === "A"
                                    ? "warning"
                                    : key === "B"
                                    ? "success"
                                    : key === "AB"
                                    ? "danger"
                                    : key === "O"
                                    ? "Primary"
                                    : "dark"
                                }
                                now={
                                  (Gdarah[key].value / jumlahPasien) * 100
                                }
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
