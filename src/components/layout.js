import React from "react";
import { IdentityContextProvider } from "react-netlify-identity-widget";
import "react-netlify-identity-widget/styles.css";
import { Link } from "gatsby";

import "./layout.css";

const Layout = ({ children }) => (
  <IdentityContextProvider url="https://cranky-davinci-1a32a2.netlify.com/">
    <header>
      <Link to="/">JAMstack App</Link>
    </header>
    <main>{children}</main>
  </IdentityContextProvider>
);

export default Layout;
