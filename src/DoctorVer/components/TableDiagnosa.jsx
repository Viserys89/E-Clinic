import React from "react";
import Table from "react-bootstrap/Table";

const TableDiagnosa = () => {
  const obatPasien = [
    {
      namaObat: "Mylanta",
      jumlahObat: "12",
      hargaObat: "30000",
    },
    {
      namaObat: "Paracetamol",
      jumlahObat: "120",
      hargaObat: "300000",
    },
    {
      namaObat: "Promag",
      jumlahObat: "15",
      hargaObat: "14000",
    },
    {
      namaObat: "Polysilane",
      jumlahObat: "2",
      hargaObat: "21000",
    },
    {
      namaObat: "Antidot",
      jumlahObat: "5",
      hargaObat: "11000",
    },
  ];
  return (
    <div className="table-responsive-lg">
      <Table className="table table-bordered table-striped table-hover">
        <thead
          style={{
            border: "2px solid white",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <tr>
            <th>Id</th>
            <th>Nama Obat</th>
            <th>Jumlah</th>
            <th>Harga</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {obatPasien.map((obatPasien, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{obatPasien.namaObat}</td>
                <td>{obatPasien.jumlahObat}</td>
                <td>Rp. {obatPasien.hargaObat}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => hapusData(obatPasien.Id)}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TableDiagnosa;
