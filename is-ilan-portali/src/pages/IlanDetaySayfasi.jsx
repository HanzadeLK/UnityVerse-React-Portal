import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { is_ilanlari_veriler } from "../components/IlanList.jsx";
import IlanList from "../components/IlanList.jsx";

const IlanDetaySayfasi = () => {
  const { id } = useParams();

  console.log(id);

  const arananVeri = is_ilanlari_veriler.filter((item) => item.job_title == id);

  return (
    <>
      <div className="App">
        <h1>İş İlan Portalı</h1>
        <div>
          <Link to="/">
            <BsArrowLeftSquareFill style={{ color: "red" }} />
            <span>Ana sayfa</span>
          </Link>
        </div>

        <div className="tek-ilan-karti">
          <div id="tek-ilan-item-1">
            <h2>{arananVeri[0].job_title}</h2>
            <div className="ilan-kategori">
              Kategori: {arananVeri[0].category}
            </div>
            <div className="ilan-lokasyon">Konum: {arananVeri[0].location}</div>
          </div>
          <div id="tek-ilan-item-2">
            <img
              src={arananVeri[0].job_image_url}
              alt={arananVeri[0].job_title}
            />
          </div>

          <div id="tek-ilan-item-3">
            <h3>İş Tanımı</h3>
            <p>{arananVeri[0].job_description}</p>
          </div>
        </div>
        <Link to="/">
          <BsArrowLeftSquareFill style={{ color: "red" }} />{" "}
          <span>
            Diğer seçenekleri değerlendirmek için arama sayfasına geri dönün
          </span>
        </Link>
      </div>
    </>
  );
};

export default IlanDetaySayfasi;
