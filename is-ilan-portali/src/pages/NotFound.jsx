import React from "react";
import { Link } from "react-router-dom";
import { BsFillSignStopFill } from "react-icons/bs";

const NotFound = () => {
  return (
    <div id="not-found">
      <BsFillSignStopFill style={{ fontSize: "72px", color: "orange" }} />
      <h1 style={{ color: "red" }}>404</h1>
      <h2>SAYFA BULUNAMADI</h2>
      <Link to="/">
        <h2>Anasayfa'ya geri dönmek için tıklayın!</h2>
      </Link>
    </div>
  );
};

export default NotFound;
