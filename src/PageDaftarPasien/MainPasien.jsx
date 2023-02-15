import React, { Component } from "react";
import Forms from "./Form";
import Tables from "./Table";
import Footer from "../components/footer";

export default class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formulir: [],
      nik: "",
      nama: "",
      alamat: "",
      perkerjaan: "",
      golongandarah: "",
      email: "",
      // Id: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      formulir: [
        ...this.state.formulir,
        {
          // Id: this.state.formulir.length + 1,
          nik: this.state.nik,
          nama: this.state.nama,
          alamat: this.state.alamat,
          perkerjaan: this.state.perkerjaan,
          golongandarah: this.state.golongandarah,
          email: this.state.email,
        },
      ],
    });

    this.setState({
      nik: "",
      nama: "",
      alamat: "",
      perkerjaan: "",
      golongandarah: "",
      email: "",
      // Id: "",
    });
  };
  render() {
    return (
      <>
        <div id="pasienPage">
          <nav
            className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
            id="navbarBlur"
            navbar-scroll="true"
          >
            <div className="container-fluid py-1 px-3">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                  <li className="breadcrumb-item text-sm">
                    <a className="opacity-5 text-dark" href="/DashBoard">
                      Pages
                    </a>
                  </li>
                  <li
                    className="breadcrumb-item text-sm text-dark active"
                    aria-current="page"
                  >
                    <b>Daftar Pasien</b>
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
                    <a
                      href="./Profile"
                      className="nav-link text-body  font-weight-bold px-0"
                    >
                      <span className="d-sm-inline d-none m-lg-2">
                        Mukhammad Vicky
                      </span>
                      <i className="fa fa-user me-sm-1 ml-2" />
                    </a>
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
            <h2 id="titledashboard">Daftar Pasien</h2>
          </div>
          <div className="container-lg">
            <div>
              <div id="coltable">
                <Tables
                  formulir={this.state.formulir}
                  editData={this.editData}
                />
              </div>
            </div>
          </div>
          <div id="form" className="container-lg">
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@mdo"
              >
                Show Form
              </button>
              <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        New message
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                    </div>
                    <div className="modal-body">
                      <Forms
                        {...this.state}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}
