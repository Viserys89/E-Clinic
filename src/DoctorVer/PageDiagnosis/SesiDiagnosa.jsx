import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import TableAntrianDiagnosa from "../components/TableAntrianDiagnosa";
import TableDiagnosa from "../components/TableDiagnosa";

function SesiDiagnosa() {
  const { pilih } = useParams();

  return (
    <div id="sesiDiagnosaPage" className="mt-5">
      <div className="container-fluid">
        <h2 id="titledashboard">Sesi Diagnosa</h2>
        <div className="text-center mb-3">
          <h2 id="titledashboard" style={{ marginLeft: "0" }}>
            {pilih}
          </h2>
          <div className="row mt-3">
            <div className="col-lg-6">
              <div className="card" style={{ border: "2px solid black" }}>
                <div className="card-body">
                  <h3>
                    Pasien yang di diagnosa : <b>Rakhansyah Lubis</b>{" "}
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card" style={{ border: "2px solid black" }}>
                <div className="card-body">
                  <input
                    className="form-control form-control-lg"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Penyakit Pasien"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TableDiagnosa />
        <div
          className="modal fade"
          id="tambahObatPasien"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <b>Tambah Obat </b>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div id="form" className="container-fluid">
                  {/* <FormObatDiagnosa
                      {...this.state}
                      handleChange={this.handleChange}
                      handleSubmit={this.handleSubmit}
                    /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#tambahObatPasien"
            className="btn btn-dark mx-1"
          >
            Tambah Obat
          </button>
          <Link to="/HasilDiagnosa">
            <button
              id="btnBerikanHasilDiagnosis"
              type="submit"
              className="btn btn-primary mx-1"
            >
              Berikan Hasil Diagnosis
            </button>
          </Link>
        </div>
        <div className="mt-3 " style={{ border: "2px solid black" }}>
          <div
            className="text-center"
            style={{ borderBottom: "2px solid black" }}
          >
            <h5 className="my-3">
              Table dibawah ini berfungsi untuk menghapus seseorang dari
              antrian, jika orang tersebut tidak datang pada batas waktu yang
              telah ditentukan
            </h5>
          </div>
          <div style={{ borderBottom: "2px solid black" }}>
            <h5 className="p-1">5/10</h5>
          </div>
          <TableAntrianDiagnosa />
          <div id="tbldatanomor" className="mb-3">
            <Link>
              <button id="arrowleft">
                <i className="fas fa-arrow-left" />
              </button>
            </Link>
            <Link>
              <button id="currentnumber">1</button>
            </Link>
            <Link>
              <button id="arrowright">
                <i className="fas fa-arrow-right" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SesiDiagnosa;
