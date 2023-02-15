import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import KlinikPenyakitDalam from "./PagePoliklinik/Klinik/KlinikPenyakitDalam";
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
import "./css/Poliklinik.css";
import "./css/global.css";
import "./css/styleLogin.css";
import "./css/register.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      {1 % 2 == 1 ? (
        <Routes>
          <Route exact path="/" element={<Logins />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      ) : (
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
              path="/KlinikPenyakitDalam"
              element={<KlinikPenyakitDalam />}
            />
            <Route path="/PenyakitDalamUmum" element={<PenyakitDalamUmum />} />
            <Route path="/Antrian" element={<Antrian />} />
            <Route path="/Hasil" element={<Hasil />} />
          </Routes>
        </SideNav>
      )}
    </BrowserRouter>
  </React.StrictMode>
);
