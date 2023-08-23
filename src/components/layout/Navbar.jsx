import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { themeProviders } from "../../Context/ThemeProvider";

function Navbar() {
  const {theme, setTheme} = useContext(themeProviders);

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to='/'>Logo</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mynavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to='/color'>COlorBox</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='song/album'>AlbumList</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to='/login'>Login</NavLink>
            </li>
          </ul>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Change theme
            </button>
            <ul className="dropdown-menu">
              <li><button className={`dropdown-item  ${theme} === 'light' ? 'active' : ''`} onClick={() => setTheme('light')}>Light</button></li>
              <li><button className={`dropdown-item  ${theme} === 'dark' ? 'active' : ''`} onClick={() => setTheme('dark')}>Dark</button></li>
            </ul>
          </div>
          <form className="d-flex">

            <input className="form-control me-2" type="text" placeholder="Search" />
            <button className="btn btn-primary" type="button">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;