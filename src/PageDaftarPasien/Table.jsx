import React from "react";
import Table from "react-bootstrap/Table";

const Tables = ({ formulir, editData }) => {
  return (
    <Table striped bordered hover style={{ border: "2px solid black" }}>
      <thead>
        <tr>
          <th>NIK</th>
          <th>Nama</th>
          <th>Alamat</th>
          <th>Perkerjaan</th>
          <th>Gol Darah</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>3313091704330001</td>
          <td>Intan Permata Sari</td>
          <td>Jl. Kepatihan No.11-17, Balonggede, Kec. Regol, Kota Bandung</td>
          <td>Atlet Volly</td>
          <td>A</td>
          <td>intanprmata@gmail.com</td>
        </tr>
        <tr>
          <td>3313071304220001</td>
          <td>Suci Sahmi Asri</td>
          <td>Jl. Dago Pojok No.22, Dago, Kec. Coblong ,Kota Bandung</td>
          <td>Wirausahawati</td>
          <td>O</td>
          <td>suciasrii@gmail.com</td>
        </tr>
        <tr>
          <td>3313021709430002</td>
          <td>Astri Nuraini</td>
          <td>
            Jl. Dipati Ukur No.63, Lebakgede, Kecamatan Coblong, Kota Bandung
          </td>
          <td>Cosplayer</td>
          <td>A+</td>
          <td>iamharuka@gmail.com</td>
        </tr>
        <tr>
          <td>3313021709430011</td>
          <td>Ilham Alamul Huda</td>
          <td>
            Jl. Raya Cipadung No.12, Cipadung Wetan, Kecamatan Ujung Berung,
            Kota Bandung
          </td>
          <td>Binaragawan</td>
          <td>O+</td>
          <td>ilhamhuda23@gmail.com</td>
        </tr>
        <tr>
          <td>3313021709938002</td>
          <td>Rayyan Rafkhi Ardiha</td>
          <td>
            Jl. Bojong Koneng Atas No.63, Mekarsaluyu, Kecamatan Bojong Koneng,
            Kota Bandung
          </td>
          <td>Youtuber</td>
          <td>AB+</td>
          <td>cockyroach69@gmail.com</td>
        </tr>
        <tr>
          <td>3313021709768301</td>
          <td>Rakhansyah Lubis</td>
          <td>
            Jl. Muararajeun No.12, Muararajeun, Kecamatan Cihapit, Kota Bandung
          </td>
          <td>Programmer</td>
          <td>O</td>
          <td>skeetmaster@gmail.com</td>
        </tr>
        <tr>
          <td>3313021716438025</td>
          <td>Aflah Rizkyadhafin Nurfikri</td>
          <td>Jl. Luna No.26, Cibadak, Kecamatan Pasir Kaliki, Kota Bandung</td>
          <td>Front end Developer</td>
          <td>A-</td>
          <td>aflahrizky99@gmail.com</td>
        </tr>
        <tr>
          <td>3313021709938002</td>
          <td>Faisal Muslim</td>
          <td>
            Jl. Bojong Koneng Atas No.63, Mekarsaluyu, Kecamatan Bojong Koneng,
            Kota Bandung
          </td>
          <td>Youtuber</td>
          <td>AB+</td>
          <td>cockyroach69@gmail.com</td>
        </tr>
        <tr>
          <td>3313021709938002</td>
          <td>Harun Kusnaedi</td>
          <td>
            Jl. Bojong Koneng Atas No.63, Mekarsaluyu, Kecamatan Bojong Koneng,
            Kota Bandung
          </td>
          <td>Youtuber</td>
          <td>AB+</td>
          <td>cockyroach69@gmail.com</td>
        </tr>
        <tr>
          <td>3313021709938002</td>
          <td>Raygie Putra</td>
          <td>
            Jl. Bojong Koneng Atas No.63, Mekarsaluyu, Kecamatan Bojong Koneng,
            Kota Bandung
          </td>
          <td>Youtuber</td>
          <td>AB+</td>
          <td>cockyroach69@gmail.com</td>
        </tr>
        {formulir.map((formulir, index) => {
          return (
            <tr>
              <td>{formulir.nik}</td>
              <td>{formulir.nama}</td>
              <td>{formulir.alamat}</td>
              <td>{formulir.perkerjaan}</td>
              <td>{formulir.golongandarah}</td>
              <td>{formulir.email}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Tables;
