import React from "react";
import Table from "react-bootstrap/Table";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const Obat = () => {
  return (
    <>
      <div id="obatPage">
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
                  <b>Obat</b>
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
                      Mukhammad Vicky
                    </span>
                    <i className="fa fa-user me-sm-1 ml-2" />
                  </Link>
                </li>
                <li className="nav-item px-3 d-flex align-items-center">
                  <a href="javascript:;" className="nav-link text-body p-0">
                    <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* body */}
        <div className="container-fluid">
          <h2 id="titledashboard">Obat</h2>
        </div>
        <div className="container-lg mt-3">
          <div className="s131 mb-5">
            <form>
              <div className="inner-form">
                <div className="input-field first-wrap">
                  <input id="search" type="text" placeholder="Nama Obat" />
                </div>
                <div className="input-field third-wrap">
                  <button className="btn-search" type="button">
                    <img src="../../public/img/search.svg" />
                  </button>
                </div>
              </div>
            </form>
          </div>
          <Table striped bordered hover>
            <thead style={{ backgroundColor: "black", color: "white" }}>
              <tr>
                <th>Nama Obat</th>
                <th>Sediaan</th>
                <th>Stock</th>
                <th>Harga</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Amoxicillin</td>
                <td>Tablet</td>
                <td>68</td>
                <td>Rp. 10.000</td>
              </tr>
              <tr>
                <td>Cefixime</td>
                <td>Kapsul</td>
                <td>77</td>
                <td>Rp. 40.000</td>
              </tr>
              <tr>
                <td>Metronidazole</td>
                <td>Tablet</td>
                <td>10</td>
                <td>Rp. 10.000</td>
              </tr>
              <tr>
                <td>Paracetamol</td>
                <td>Tablet</td>
                <td>45</td>
                <td>Rp. 15.000</td>
              </tr>
              <tr>
                <td>Polyscylane</td>
                <td>Kapsul</td>
                <td>53</td>
                <td>Rp. 24.000</td>
              </tr>
              <tr>
                <td>Komik</td>
                <td>Botol</td>
                <td>23</td>
                <td>Rp. 16.000</td>
              </tr>
              <tr>
                <td>Paramex</td>
                <td>Tablet</td>
                <td>87</td>
                <td>Rp. 21.000</td>
              </tr>
              <tr>
                <td>Mylanta</td>
                <td>Tablet</td>
                <td>68</td>
                <td>Rp. 26.000</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div id="tbldatanomor">
          <a href="">
            <button id="arrowleft">
              <i class="fas fa-arrow-left"></i>
            </button>
          </a>
          <a href="">
            <button id="currentnumber">1</button>
          </a>
          <a href="">
            <button id="arrowright">
              <i class="fas fa-arrow-right"></i>
            </button>
          </a>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Obat;
