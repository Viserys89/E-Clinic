import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <div>
      {/* footer */}
      <section>
        {/* Footer */}
        <footer className="text-white mt-4" id="globalfooter">
          {/* Grid container */}
          <div className="container-lg p-4">
            {/*Grid row*/}
            <div className="row">
              {/*Grid column*/}
              <div className="col-lg-3 col-md-3 mb-4 mb-md-0">
                <div id="ini">
                  <img src="../../public/img/nama&logo.png" id="logo2" />
                  <h3 id="titlefooter">E-Clinic</h3>
                </div>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h3 id="titlefooter">Alamat</h3>
                <ul className="list-unstyled mb-0">
                  <li>Jl.Lorem No.9</li>
                  <li>Rt.9, Rw.10</li>
                  <li>kel. Cibadak</li>
                  <li>kec. Cigajah</li>
                  <li>Kota. Bandung</li>
                  <li>Jawa Barat 40171</li>
                  <li>kode wilayah. 36.71</li>
                </ul>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h3 id="titlefooter">Contact</h3>
                <ul className="list-unstyled">
                  <li>Telp : 083245678934</li>
                  <li>WhatsApp : 083237568013</li>
                  <li>Email : EClinic123@gmail.com</li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h3 id="titlefooter">Media Sosial</h3>
                <ul className="list-unstyled">
                  <li>
                    <img src="../../public/img/ig.svg" id="icons" />
                    @EClinic
                  </li>
                  <li>
                    <img src="../../public/img/facebook.svg" id="icons" />
                    @EClinicJabar
                  </li>
                  <li>
                    <img src="../../public/img/twitter.svg" id="icons" />
                    @EClinicJuara
                  </li>
                </ul>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </div>
          {/* Grid container */}
          {/* Copyright */}
          <div
            className="text-center p-3"
            style={{ backgroundColor: "#00021E" }}
          >
            ©E-Clinic, 2023. ALL RIGHTS RESERVED
          </div>
          {/* Copyright */}
        </footer>
        {/* Footer */}
      </section>
    </div>
  );
};

export default Footer;
