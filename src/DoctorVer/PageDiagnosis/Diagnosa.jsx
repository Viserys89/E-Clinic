import React, { useState } from "react";
import { Link } from "react-router-dom";

const Diagnosa = () => {
  const dokter = [
    { nama: "Vicky", value: "1" },
    { nama: "Rakha", value: "2" },
    { nama: "Faisal", value: "3" },
    { nama: "Harun", value: "4" },
    { nama: "Aflah", value: "5" },
  ];

  const [pilih, setPilih] = useState("");

  console.log(pilih);
  return (
    <div id="diagnosaPage" className="mt-5">
      <div className="container-fluid" style={{ marginBottom: "17.6%" }}>
        <h2 id="titledashboard">Diagnosa</h2>
        <div className="container-lg d-flex justify-content-center">
          <div
            className="card "
            style={{
              width: "50rem",
              border: "2px solid black",
              marginTop: "100px",
            }}
          >
            <div className="card-body">
              <h3 className="card-title">Pilih Dokter</h3>
              <div className="dropdown d-flex justify-content-center">
                <div class="input-group">
                  <select
                    id="dropdowninput"
                    style={{ paddingLeft: "10px" }}
                    onChange={(event) => setPilih(event.target.value)}
                  >
                    {dokter.map((item, index) => {
                      return <option value={item.nama}>{item.nama}</option>;
                    })}
                  </select>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <Link to={`/SesiDiagnosa/${pilih}`}>
                  <button
                    id="btnMasukDiagnosa"
                    type="submit"
                    className="btn btn-dark"
                  >
                    Masuk
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diagnosa;
