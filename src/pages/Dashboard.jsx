import React from 'react';
import EmployeeList from '../features/employee/components/EmployeeList';
import EmployeeForm from '../features/employee/components/EmployeeForm';

const Dashboard = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-white px-3 border-bottom">
            <div className="container-fluid">
            <button
                className="btn btn-outline-secondary d-lg-none me-2"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#sidebar"
                aria-controls="sidebar"
            >
                <i className="bi bi-list" />
            </button>
            <a className="navbar-brand fw-bold" href="#">
                Management Employee
            </a>
            <div className="mx-auto d-none d-lg-block">
                <img
                src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png"
                alt="Logo"
                width={40}
                height={40}
                />
            </div>
            <div className="d-flex align-items-center ms-auto">
                <button className="btn position-relative me-3">
                <i className="bi bi-bell fs-5" />
                </button>
                <span className="me-2 fw-semibold">John Doe</span>
                <img
                src="https://i.pravatar.cc/32"
                alt="Avatar"
                className="rounded-circle"
                width={32}
                height={32}
                />
            </div>
            </div>
        </nav>
        <div className="container-fluid">
            <div className="row">
            <nav
                id="sidebar"
                className="col-auto bg-white border-end offcanvas-lg offcanvas-start p-5 d-flex flex-column align-items-center min-vh-100"
                aria-labelledby="sidebarLabel"
            >
                <div className="offcanvas-header d-lg-none">
                <h5 className="offcanvas-title" id="sidebarLabel">
                    Menu
                </h5>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                />
                </div>
                <div className="offcanvas-body p-0">
                <ul className="nav nav-pills flex-column mb-auto text-center">
                    <li className="nav-item my-3">
                    <a
                        href="#"
                        className="nav-link"
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        title="Dashboard"
                    >
                        <i className="bi bi-house fs-4" />
                        Dashboard
                    </a>
                    </li>
                    <li className="nav-item my-3">
                    <a
                        href="#"
                        className="nav-link"
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        title="Pasien"
                    >
                        <i className="bi bi-people fs-4" />
                        <br />
                        Pasien
                    </a>
                    </li>
                    <li className="nav-item my-3">
                    <a
                        href="#"
                        className="nav-link"
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        title="Kunjungan"
                    >
                        <i className="bi bi-journals fs-4" />
                        Kunjungan
                    </a>
                    </li>
                    <li className="nav-item my-3">
                    <a
                        href="#"
                        className="nav-link"
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        title="Pelayanan"
                    >
                        <i className="bi bi-prescription2 fs-4" />
                        Pelayanan
                    </a>
                    </li>
                </ul>
                </div>
            </nav>
            <main className="col py-4 min-vh-100 m-0">
                <div className="container-fluid px-1">
                <div className="row">
                    <EmployeeList />
                    <EmployeeForm />
                </div>
                </div>
            </main>
            </div>
        </div>
    </>
  );
};

export default Dashboard;
