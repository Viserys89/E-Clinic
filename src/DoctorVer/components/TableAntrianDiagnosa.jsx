import React from "react";
import Table from "react-bootstrap/Table";

const TableAntrianDiagnosa = () => {
  return (
    <div className="table-responsive-lg mb-1">
      <Table className="table table-bordered table-striped table-hover">
        <thead
          style={{
            border: "2px solid white",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Umur</th>
            <th>Gender</th>
            <th>No. Telp</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>001</td>
            <td>Mukhammad Vicky</td>
            <td>17</td>
            <td>Laki-Laki</td>
            <td>087821010989</td>
            <td>fistvicky@gmail.com</td>
            <td>
              <button className="btn btn-danger">Hapus</button>
            </td>
          </tr>
          <tr>
            <td>002</td>
            <td>Aflah Rizkyadhafin Nurfikri</td>
            <td>17</td>
            <td>Laki-Laki</td>
            <td>082193567741</td>
            <td>aflahrizky@gmail.com</td>
            <td>
              <button className="btn btn-danger">Hapus</button>
            </td>
          </tr>
          <tr>
            <td>003</td>
            <td>Faisal Muslim</td>
            <td>17</td>
            <td>Laki-Laki</td>
            <td>081176908351</td>
            <td>faisallmuslim@gmail.com</td>
            <td>
              <button className="btn btn-danger">Hapus</button>
            </td>
          </tr>
          <tr>
            <td>004</td>
            <td>Harun Kusnaedi</td>
            <td>16</td>
            <td>Laki-Laki</td>
            <td>086631745963</td>
            <td>arunkusnaedi@gmail.com</td>
            <td>
              <button className="btn btn-danger">Hapus</button>
            </td>
          </tr>
          <tr>
            <td>005</td>
            <td>Rakhansyah Lubis</td>
            <td>18</td>
            <td>Laki-Laki</td>
            <td>082931618969</td>
            <td>rakaansyah@gmail.com</td>
            <td>
              <button className="btn btn-danger">Hapus</button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TableAntrianDiagnosa;
