import React, { useState } from "react";

const Profile = () => {
  const fields = [
    { label: "Nama", type: "text", placeholder: "Masukan nama" },
    {
      label: "Nomor Telfon",
      type: "number",
      placeholder: "Masukan nomor telfon",
    },
    {
      label: "NIK",
      type: "number",
      placeholder: "Masukan NIK",
    },
    {
      label: "Perkerjaan",
      type: "text",
      placeholder: "Masukan Perkerjaan",
    },
    {
      label: "Email",
      type: "email",
      placeholder: "Masukan Email",
    },
    {
      label: "Tempat Lahir",
      type: "text",
      placeholder: "Masukan tempat lahir",
    },
    {
      label: "Tanggal Lahir",
      type: "date",
      placeholder: "Masukan tanggal lahir",
    },
    {
      label: "Golongan Darah",
      placeholder: "Masukan golongan darah",
    },
  ];

  const [golongan, setGolongan] = useState(["A", "B", "AB", "O"]);
  // function to render input fields
  const renderFields = () => {
    const rows = [];
    for (let i = 0; i < fields.length; i += 6) {
      const rowFields = fields.slice(i, i + 6);
      const row = (
        <div className="row" key={i}>
          {rowFields.map((field, index) => (
            <div className="col-6" key={index}>
              <div className="form-group">
                <h4>{field.label}</h4>
                {field.label === "Golongan Darah" ? undefined : (
                  <div>
                    <input
                      id="kotakinput"
                      type={field.type}
                      className="form-control"
                      placeholder={field.placeholder}
                    />
                  </div>
                )}

                {field.label === "Golongan Darah" ? (
                  <select
                    id="dropdowninput"
                    defaultValue={"Golongan"}
                    style={{ paddingLeft: "10px" }}
                  >
                    <option value={"Golongan"}>Golongan Darah</option>
                    {golongan.map((item, index) => {
                      return (
                        <option value={item} key={index}>
                          {item}
                        </option>
                      );
                    })}
                  </select>
                ) : undefined}
              </div>
            </div>
          ))}
        </div>
      );
      rows.push(row);
    }

    return rows;
  };
  return (
    <div id="profilePage">
      {/* body */}
      <div className="container-fluid">
        <h2 id="titledashboard">Profile</h2>
      </div>
      <div
        id="profilecontainer"
        className="container-lg"
        style={{ width: "100%" }}
      >
        <div className="row">
          <div className="col12">
            <div className="card" id="profilecard">
              <div className="card-content">
                <img
                  id="profilepicture"
                  style={{ cursor: "pointer" }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  src="../../public/img/profile.jpg"
                />
                <div>
                  <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Edit Profile
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body justify-content-center d-flex">
                          <button
                            type="button"
                            className="btn btn-dark mx-lg-2"
                          >
                            View
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary mx-lg-2"
                          >
                            Upload
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger mx-lg-2"
                          >
                            Remove
                          </button>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container-lg">
                  <div className="row">
                    <div className="col12">
                      <div className="row">
                        {renderFields()}
                        <button id="tombolsimpan" className="btn btn-dark mb-3">
                          Simpan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
