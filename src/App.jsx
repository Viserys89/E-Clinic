import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { createContext, useContext } from "react";
import { useState } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// login pages
import ForgotPassword from "./Login/ForgotPassword";
import ResetPassword from "./Login/ResetPassword";
import Register from "./Login/Register";
import Logins from "./Login/Login";
// patient ver pages
import PenyakitDalamUmum from "./PagePoliklinik/Klinik/PenyakitDalamUmum";
import PembayaranBerhasil from "./PagePoliklinik/PembayaranBerhasil";
import BuktiPembayaran from "./PagePoliklinik/BuktiPembayaran";
import MainPasien from "./PageDaftarPasien/MainPasien";
import Antrian from "./PagePoliklinik/Klinik/Antrian";
import Poliklinik from "./PagePoliklinik/Poliklinik";
import SideNav from "./components/SideNav";
import Hasil from "./PagePoliklinik/Hasil";
import DashBoard from "./Pages/DashBoard";
import Footer from "./components/footer";
import Aplikasi from "./Pages/Aplikasi";
import Riwayat from "./Pages/Riwayat";
import Profile from "./Pages/Profile";
import Doctor from "./Pages/Doctor";
import Obat from "./Pages/Obat";
// admin ver pages
import PoliklinikDokter from "./AdminVer/JadwalDokterPage/PoliklinikDokter";
import PoliklinikAntrian from "./AdminVer/AntrianPage/PoliklinikAntrian";
import PoliklinikAdmin from "./AdminVer/PagePoliklinik/PoliklinikAdmin";
import JadwalDokter from "./AdminVer/JadwalDokterPage/JadwalDokter";
import HapusAntrian from "./AdminVer/AntrianPage/HapusAntrian";
import SideNavAdmin from "./AdminVer/components/SideNavAdmin";
import DashBoardAdmin from "./AdminVer/Pages/DashBoardAdmin";
import Announcement from "./AdminVer/Pages/Announcement";
import ProfileAdmin from "./AdminVer/Pages/ProfileAdmin";
import DaftarPasien from "./AdminVer/Pages/PasienAdmin";
import DoctorAdmin from "./AdminVer/Pages/DoctorAdmin";
import ObatAdmin from "./AdminVer/Pages/ObatAdmin";
// css
import "./AdminVer/css/globalAdmin.css";
import "./css/Poliklinik.css";
import "./css/styleLogin.css";
import "./css/global.css";
import ProfilePasien from "./AdminVer/Pages/ProfilePasien";
import RiwayatPasien from "./AdminVer/Pages/RiwayatPasien";
import SideNavDoctor from "./DoctorVer/components/SideNavDoctor";
import Diagnosa from "./DoctorVer/PageDiagnosis/Diagnosa";
import SesiDiagnosa from "./DoctorVer/PageDiagnosis/SesiDiagnosa";
import HasilDiagnosa from "./DoctorVer/PageDiagnosis/HasilDiagnosa";
import { UserData } from "./UseContext";

export const loginContext = createContext();
export const API_URL = ("http://localhost:5000");

function App() {
  const [isLogin, setIsLogin] = useState(1);
  return (
    <loginContext.Provider value={[isLogin, setIsLogin]}>
      <UserData>
      <BrowserRouter basename="/">
        {isLogin == 1 ? (
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
                <Route path="/Announcement" element={<Announcement />} />
                <Route
                  path="/PoliklinikDokter"
                  element={<PoliklinikDokter />}
                />
                <Route path="/JadwalDokter" element={<JadwalDokter />} />
                <Route
                  path="/PoliklinikAntrian"
                  element={<PoliklinikAntrian />}
                />
                <Route path="/HapusAntrian" element={<HapusAntrian />} />
                <Route path="/ProfilePasien" element={<ProfilePasien />} />
                <Route path="/RiwayatPasien" element={<RiwayatPasien />} />
              </Routes>
              <Footer />
            </SideNavAdmin>
          </div>
        ) : isLogin == 4 ? (
          <div className="App">
            <SideNavDoctor>
              <Routes>
                <Route exact path="/" element={<Diagnosa />} />
                <Route path="/Diagnosa" element={<Diagnosa />} />
                <Route path="/SesiDiagnosa" element={<SesiDiagnosa />} />
                <Route path="/HasilDiagnosa" element={<HasilDiagnosa />} />
              </Routes>
              <Footer />
            </SideNavDoctor>
          </div>
        ) : (
          ""
        )}
      </BrowserRouter>
      </UserData>
    </loginContext.Provider>
  );
}

export function logout(id) {
  const handleLogout = async () => {
    const payload = { id };
    try {
      const res = await fetch(`http://localhost:5000/login/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const jsonRes = await res.json();
      if (res.status === 200) {
        window.alert(jsonRes.alert);
        localStorage.removeItem('remember');
        window.location.href = '/';
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (window.confirm('Anda yakin ingin logout?')) {
    handleLogout();
  }
}

export default App;