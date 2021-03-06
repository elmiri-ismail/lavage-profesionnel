class SideBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <aside style={{ backgroundColor: "#03A7D4" }} className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="../../index3.html" className="brand-link">

          <span className="brand-text font-weight-light text-white">Suivi véhicules</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="dist/img/ismail.jpg" className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
              <a href="#" className="d-block text-white">El miri Ismail</a>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              {/* Add icons to the links using the .nav-icon class
                 with font-awesome or any other icon font library */}
              <li className="nav-item">
                <a href="ouvriers.html" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p className="text-white">Les véhicules</p>
                </a>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>


    )
  }
}