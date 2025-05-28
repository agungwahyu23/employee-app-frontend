import React from 'react';

const EmployeeList = () => {
  // nanti data di-fetch pakai axios
  const employees = [
    { id: 1, name: 'Agung', role: 'Perawat', active: true },
    { id: 2, name: 'Wahyu', role: 'Perawat', active: false },
  ];

  return (
    <div className="col-md-4 mb-4">
        <div className="card shadow-sm">
            <div className="card-body">
                <div className="card-title">
                    <div className="row">
                        <div className="col">
                            <h5>Data Karyawan &amp; Tenaga Kesehatan</h5>
                        </div>
                        <div className="col">
                            <div className="dropdown text-end">
                                <button className="btn btn-secondary" type="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    ...
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            + Tambah Karyawan
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <i className="bi bi-copy" /> Salin Data Karyawan
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <form>
                    <div className="mb-3">
                        <select name="emp_id" id="" className="form-select">
                            <option value="">Pilih</option>
                            <option value={1}>Fulan</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="status" className="form-label">
                            Status
                        </label>
                        <div className="btn-group w-100" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" className="btn-check" name="status" id="all" autoComplete="off"
                                defaultChecked="" />
                            <label className="btn btn-outline-primary" htmlFor="all">
                                Semua
                            </label>
                            <input type="radio" className="btn-check" name="status" id="active" autoComplete="off" />
                            <label className="btn btn-outline-primary" htmlFor="active">
                                Aktif
                            </label>
                            <input type="radio" className="btn-check" name="status" id="nonactive" autoComplete="off" />
                            <label className="btn btn-outline-primary" htmlFor="nonactive">
                                Non Aktif
                            </label>
                        </div>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Pencarian" aria-label="Pencarian"
                            aria-describedby="button-addon2" name="cari" />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                            Cari
                        </button>
                    </div>
                </form>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Karyawan/Tenaga Kesehatan</th>
                            <th scope="col" />
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((emp, index) => (
                        <tr key={emp.id}>
                            <td>{index + 1}</td>
                            <td>
                            <b>{emp.name}</b>
                            <br />
                            {emp.role}
                            <br />
                            <span className={`badge ${emp.active ? 'bg-success' : 'bg-danger'}`}>
                                {emp.active ? 'Aktif' : 'Non Aktif'}
                            </span>
                            </td>
                            <td className="text-center">
                            <button className="btn btn-link text-primary p-0">
                                <i className="bi bi-arrow-right-circle-fill fs-4"></i>
                            </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};

export default EmployeeList;
