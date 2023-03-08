import { Link } from "react-router-dom";

const BuktiPembayaran = () => {
  const Print = () => {
    let printContents = document.getElementById("printablediv").innerHTML;
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };
  return (
    <div id="buktiPembayaranPage">
      <nav
        className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
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
              <li className="breadcrumb-item text-sm">
                <Link className="opacity-5 text-dark" to="/Poliklinik">
                  Poliklinik
                </Link>
              </li>
              <li className="breadcrumb-item text-sm">
                <Link className="opacity-5 text-dark" to="/PenyakitDalamUmum">
                  Penyakit Dalam
                </Link>
              </li>
              <li className="breadcrumb-item text-sm">
                <Link className="opacity-5 text-dark" to="/Hasil">
                  Hasil & Pembayaran
                </Link>
              </li>
              <li
                className="breadcrumb-item text-sm text-dark active"
                aria-current="page"
              >
                <b>Bukti Pembayaran</b>
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
                <Link to="javascript:;" className="nav-link text-body p-0">
                  <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <h2 id="titledashboard">Bukti Pembayaran</h2>
      </div>
      <div className="d-flex justify-content-center my-5">
        <div
          id="printablediv"
          className="card mt-5 mb-4"
          style={{ width: "30rem", border: "2px solid black" }}
        >
          <div className="card-body">
            <h4 className="text-center">
              <b>Bukti Pembayaran</b>
            </h4>
            <div
              className="container-lg p-3"
              style={{ border: "1px solid black" }}
            >
              <div className="row">
                <div className="col-sm-6">
                  <h6>Nama Pasien</h6>
                </div>
                <div className="col-sm-6">
                  <h6>: Mukhammad Vicky</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <h6>Nama Dokter</h6>
                </div>
                <div className="col-sm-6">
                  <h6>: Dr. Jessica Pricilla</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <h6>Penyakit</h6>
                </div>
                <div className="col-sm-6">
                  <h6>: Sakit mata</h6>
                </div>
              </div>
            </div>
            <div
              className="container-lg p-3 mt-3"
              style={{ border: "1px solid black" }}
            >
              <div className="row">
                <div className="col-sm-6">
                  <h6>
                    Cendo Xitrol Eyedrop <br /> Rp.13.000 x 1
                  </h6>
                </div>
                <div className="col-sm-6">
                  <h6>: 13.000</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <h6>
                    De Nature <br /> Rp.17.000 x 1
                  </h6>
                </div>
                <div className="col-sm-6">
                  <h6>: 17.000</h6>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <h6>
                    Wallatra Limatta Softgel
                    <br /> Rp.23.000 x 1
                  </h6>
                </div>
                <div className="col-sm-6">
                  <h6>: 23.000</h6>
                </div>
              </div>
            </div>
            <h5 className="mt-1 mb-0 text-center">
              Total Pembayaran : <b>Rp. 53.000</b>
            </h5>
            <div className="d-flex justify-content-center mt-3">
              <button
                type="button"
                onClick={Print}
                className="btn btn-dark mx-1"
              >
                <i class="fa fa-print" aria-hidden="true"></i>
              </button>
              <button type="button" className="btn btn-dark mx-1">
                <i class="fa fa-download" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuktiPembayaran;
