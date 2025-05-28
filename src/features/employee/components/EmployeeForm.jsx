import React from 'react';

const EmployeeForm = () => {
  return (
    <div className="col-md-8 mb-4">
        <div className="card shadow-sm">
            <div className="card-body">
                <h5 className="card-title mb-3">Form Tambah Karyawan</h5>
                <form action="" method="post">
                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <label htmlFor="fullname">Nama Lengkap*</label>
                                <input type="text" className="form-control" name="status" id="fullname" required="" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nik">No. Kartu Identitas*</label>
                                <input type="text" className="form-control" name="nik" id="nik" required="" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="gender">Jenis Kelamin</label>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="inlineRadio1"
                                        defaultValue="l" />
                                    <label className="form-check-label" htmlFor="inlineRadio1">
                                        Laki-laki
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="inlineRadio2"
                                        defaultValue={0} />
                                    <label className="form-check-label" htmlFor="inlineRadio2">
                                        Perempuan
                                    </label>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="birth_place">Tempat Lahir</label>
                                <input type="text" className="form-control" name="birth_place" id="birth_place" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="birth_date">Tanggal Lahir</label>
                                <input type="date" className="form-control" name="birth_date" id="birth_date" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone">No. Telepon</label>
                                <input type="text" className="form-control" name="phone" id="phone" />
                            </div>
                            <div className="mb-3">
                                <div className="row mb-3">
                                    <div className="col-md-6 col-lg-6 col-sm-12 mb-3">
                                        <label htmlFor="province">Provinsi</label>
                                        <input type="text" className="form-control" placeholder="Provinsi"
                                            name="province" id="province" />
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-sm-12 mb-3">
                                        <label htmlFor="city">Kota/Kabupaten</label>
                                        <input type="text" className="form-control" placeholder="Kota/Kabupaten"
                                            name="city" id="city" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-lg-6 col-sm-12 mb-3">
                                        <label htmlFor="subdistrict">Kecamatan</label>
                                        <input type="text" className="form-control" placeholder="Kecamatan"
                                            name="subdistrict" id="subdistrict" />
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-sm-12 mb-3">
                                        <label htmlFor="village">Kelurahan</label>
                                        <input type="text" className="form-control" placeholder="Kelurahan"
                                            name="village" id="village" />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address">Detail Alamat</label>
                                <textarea name="address" id="address" className="form-control" placeholder="Alamat"
                                    defaultValue={""} />
                                </div>
                                </div>
                                <div className="col-auto d-flex justify-content-center align-items-stretch">
                                    <div
                                    style={{
                                        borderLeft: "2px solid #dee2e6",
                                        height: "100%"
                                    }}
                                    />
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                    <label htmlFor="username">Username*</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        id="username"
                                        required=""
                                    />
                                    </div>
                                    <div className="mb-3">
                                    <label htmlFor="email">Email*</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        required=""
                                    />
                                    </div>
                                    <div className="mb-3">
                                    <label htmlFor="password">Password*</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        id="password"
                                        required=""
                                    />
                                    </div>
                                    <div className="mb-3">
                                    <div className="row">
                                        <div className="col">
                                        <label htmlFor="tipe">Tipe</label>
                                        <div className="form-check">
                                            <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue="manager"
                                            id="manager"
                                            name="type"
                                            />
                                            <label
                                            className="form-check-label"
                                            htmlFor="manager"
                                            >
                                            Manager
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue="admin"
                                            id="admin"
                                            name="type"
                                            />
                                            <label
                                            className="form-check-label"
                                            htmlFor="admin"
                                            >
                                            Admin
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue="resepsionis"
                                            id="resepsionis"
                                            name="type"
                                            />
                                            <label
                                            className="form-check-label"
                                            htmlFor="admin"
                                            >
                                            Resepsionis
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue="manajemen"
                                            id="manajemen"
                                            name="type"
                                            />
                                            <label
                                            className="form-check-label"
                                            htmlFor="manajemen"
                                            >
                                            Manajemen
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue="finance"
                                            id="finance"
                                            name="type"
                                            />
                                            <label
                                            className="form-check-label"
                                            htmlFor="finance"
                                            >
                                            Finance
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue="kasir"
                                            id="kasir"
                                            name="type"
                                            />
                                            <label
                                            className="form-check-label"
                                            htmlFor="kasir"
                                            >
                                            Kasir
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                            className="form-check-input"
                                            type="checkbox"
                                            defaultValue="purchasing"
                                            id="purchasing"
                                            name="type"
                                            />
                                            <label
                                            className="form-check-label"
                                            htmlFor="purchasing"
                                            >
                                            Purchasing
                                            </label>
                                        </div>
                                        </div>
                                        <div className="col-auto d-flex justify-content-center align-items-stretch">
                                        <div
                                            style={{
                                            borderLeft: "2px solid #dee2e6",
                                            height: "100%"
                                            }}
                                        />
                                        </div>
                                        <div className="col">
                                        <div className="form-check">
                                            <input
                                            className="form-check-input"
                                            type="radio"
                                            name="position"
                                            id="perawat"
                                            />
                                            <label
                                            className="form-check-label"
                                            htmlFor="perawat"
                                            >
                                            {" "}
                                            Perawat
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                            className="form-check-input"
                                            type="radio"
                                            name="position"
                                            id="bidan"
                                            />
                                            <label
                                            className="form-check-label"
                                            htmlFor="bidan"
                                            >
                                            {" "}
                                            bidan
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                            className="form-check-input"
                                            type="radio"
                                            name="position"
                                            id="dokter"
                                            />
                                            <label
                                            className="form-check-label"
                                            htmlFor="dokter"
                                            >
                                            {" "}
                                            dokter
                                            </label>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="mb-3">
                                    <label htmlFor="start_contract">
                                        Tanggal Mulai Kontrak
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="start_contract"
                                        id="start_contract"
                                    />
                                    </div>
                                    <div className="mb-3">
                                    <label htmlFor="end_contract">
                                        Tanggal Selesai Kontrak
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="end_contract"
                                        id="end_contract"
                                    />
                                    </div>
                                    <div className="mb-3">
                                    <label htmlFor="marriage_status">
                                        Status Menikah
                                    </label>
                                    <select
                                        name="marriage_status"
                                        id="marriage_status"
                                        className="form-select"
                                    >
                                        <option value={1}>Sudah Menikah</option>
                                        <option value={0}>Belum Menikah</option>
                                    </select>
                                    </div>
                                    <div className="mb-3">
                                    <label htmlFor="doctor_code_bpjs">
                                        Kode Dokter BPJS
                                    </label>
                                    <select
                                        name="doctor_code_bpjs"
                                        id="doctor_code_bpjs"
                                        className="form-select"
                                    >
                                        <option value="">Pilih Dokter</option>
                                    </select>
                                    </div>
                                </div>
                                </div>
                                <div className="row">
                                <div className="col  text-end">
                                    <button type="submit" className="btn btn-primary">
                                    Simpan
                                    </button>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
  );
};

export default EmployeeForm;
