import "../NavBar/NavBar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";

import React, { useState } from "react";

// const logo = "";
// const cart_icon="";

function NavBar() {
  const [menu, setMenu] = useState("tienda");
  const NavBarClicked = (click) => {
    setMenu();
  };

  return (
    <header className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>MiTienda</p>
      </div>
      <ul className="nav-menu">
        <li onClick={(e) => setMenu("tienda")}>
          Tienda {menu === "tienda" ? <hr /> : null}
        </li>
        <li onClick={(e) => setMenu("hombre")}>
          Hombre {menu === "hombre" ? <hr /> : null}
        </li>
        <li onClick={(e) => setMenu("mujer")}>
          Mujer {menu === "mujer" ? <hr /> : null}
        </li>
        <li onClick={(e) => setMenu("niños")}>
          Niños {menu === "niños" ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="carrito" />
      </div>
    </header>
  );
}

export default NavBar;
