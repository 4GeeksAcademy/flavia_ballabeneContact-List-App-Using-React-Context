import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { AddContact } from "./views/addcontact";
import { UpdateContact } from "./views/updatecontact";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/addcontact" element={<AddContact />} />
            <Route exact path="/contact/:id" element={<UpdateContact />} />
            {/* ?? */}
            <Route exact path="*" element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);