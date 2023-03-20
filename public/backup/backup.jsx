<nav
  className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
  id="navbarBlur"
  navbar-scroll="true"
>
  <div className="container-fluid py-1 px-3">
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
        <li className="breadcrumb-item text-sm">
          <a className="opacity-5 text-dark" href="javascript:;">
            Pages
          </a>
        </li>
        <li
          className="breadcrumb-item text-sm text-dark active"
          aria-current="page"
        >
          <b>Profile</b>
        </li>
      </ol>
    </nav>
    <div
      className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
      id="navbar"
    >
      <div className="ms-md-auto pe-md-3 d-flex align-items-center"></div>
      <ul className="navbar-nav  justify-content-end">
        <li className="nav-item d-flex align-items-center">
          <i className="fa fa-bell cursor-pointer mx-lg-2 " />
          <Link
            to="/Profile"
            className="nav-link text-body  font-weight-bold px-0"
          >
            <span className="d-sm-inline d-none m-lg-2">Mukhammad Vicky</span>
            <i className="fa fa-user me-sm-1 ml-2" />
          </Link>
        </li>
        <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
          <a
            href="./Profile"
            className="nav-link text-body p-3"
            id="iconNavbarSidenav"
          >
            <div className="sidenav-toggler-inner">
              <i className="sidenav-toggler-line" />
              <i className="sidenav-toggler-line" />
              <i className="sidenav-toggler-line" />
            </div>
          </a>
        </li>
        <li className="nav-item px-3 d-flex align-items-center">
          <a href="javascript:;" className="nav-link text-body p-0">
            <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>;
