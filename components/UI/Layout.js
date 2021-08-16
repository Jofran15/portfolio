import React from "react";
import Navbar from "../Navbar";

function Layout(props) {
  return (
    <>
      <Navbar />
    <main className='container py-4'>  {props.children}</main>
    </>
  );
}

export default Layout;
