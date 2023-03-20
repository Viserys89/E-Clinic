import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext } from "react";
import { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PenyakitDalamUmum from "./PagePoliklinik/Klinik/PenyakitDalamUmum";
import MainPasien from "./PageDaftarPasien/MainPasien";
import Poliklinik from "./PagePoliklinik/Poliklinik";
import SideNav from "./components/SideNav";
import DashBoard from "./Pages/DashBoard";
import Aplikasi from "./Pages/Aplikasi";
import Riwayat from "./Pages/Riwayat";
import Profile from "./Pages/Profile";
import Doctor from "./Pages/Doctor";
import Obat from "./Pages/Obat";
import Antrian from "./PagePoliklinik/Klinik/Antrian";
import Hasil from "./PagePoliklinik/Hasil";
import Logins from "./Login/Login";
import ForgotPassword from "./Login/ForgotPassword";
import ResetPassword from "./Login/ResetPassword";
import Register from "./Login/Register";
import BuktiPembayaran from "./PagePoliklinik/BuktiPembayaran";
import PembayaranBerhasil from "./PagePoliklinik/PembayaranBerhasil";
import "./css/Poliklinik.css";
import "./css/global.css";
import "./AdminVer/css/globalAdmin.css";
import "./css/styleLogin.css";
import Footer from "./components/footer";
import SideNavAdmin from "./AdminVer/components/SideNavAdmin";
import DashBoardAdmin from "./AdminVer/Pages/DashBoardAdmin";
import DoctorAdmin from "./AdminVer/Pages/DoctorAdmin";
import ProfileAdmin from "./AdminVer/Pages/ProfileAdmin";
import ObatAdmin from "./AdminVer/Pages/ObatAdmin";
import PoliklinikAdmin from "./AdminVer/PagePoliklinik/PoliklinikAdmin";
import DaftarPasien from "./AdminVer/Pages/PasienAdmin";

export const loginContext = createContext();

function App() {
  const [isLogin, setIsLogin] = useState(1);
  return (
    <loginContext.Provider value={[isLogin, setIsLogin]}>
      <BrowserRouter basename="/">
        {2 % 2 == 1 ? (
          <Routes>
            <Route exact path="/" element={<Logins />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        ) : isLogin == 2 ? (
          <div className="App">
            <SideNav>
              <Routes>
                <Route exact path="/" element={<DashBoard />} />
                <Route path="/DashBoard" element={<DashBoard />} />
                <Route path="/Doctor" element={<Doctor />} />
                <Route path="/Aplikasi" element={<Aplikasi />} />
                <Route path="/Obat" element={<Obat />} />
                <Route path="/MainPasien" element={<MainPasien />} />
                <Route path="/Riwayat" element={<Riwayat />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Poliklinik" element={<Poliklinik />} />
                <Route
                  path="/PenyakitDalamUmum"
                  element={<PenyakitDalamUmum />}
                />
                <Route path="/Antrian" element={<Antrian />} />
                <Route path="/Hasil" element={<Hasil />} />
                <Route path="/BuktiPembayaran" element={<BuktiPembayaran />} />
                <Route
                  path="/PembayaranBerhasil"
                  element={<PembayaranBerhasil />}
                />
              </Routes>
              <Footer />
            </SideNav>
          </div>
        ) : isLogin == 3 ? (
          <div className="App">
            <SideNavAdmin>
              <Routes>
                <Route exact path="/" element={<DashBoardAdmin />} />
                <Route path="/DashBoardAdmin" element={<DashBoardAdmin />} />
                <Route path="/DoctorAdmin" element={<DoctorAdmin />} />
                <Route path="/ObatAdmin" element={<ObatAdmin />} />
                <Route path="/Pasienadmin" element={<DaftarPasien />} />
                <Route path="/Riwayat" element={<Riwayat />} />
                <Route path="/ProfileAdmin" element={<ProfileAdmin />} />
                <Route path="/PoliklinikAdmin" element={<PoliklinikAdmin />} />
                <Route
                  path="/PenyakitDalamUmum"
                  element={<PenyakitDalamUmum />}
                />
                <Route path="/Antrian" element={<Antrian />} />
                <Route path="/Hasil" element={<Hasil />} />
                <Route path="/BuktiPembayaran" element={<BuktiPembayaran />} />
                <Route
                  path="/PembayaranBerhasil"
                  element={<PembayaranBerhasil />}
                />
              </Routes>
              <Footer />
            </SideNavAdmin>
          </div>
        ) : (
          ""
        )}
      </BrowserRouter>
    </loginContext.Provider>
  );
}

export default App;
