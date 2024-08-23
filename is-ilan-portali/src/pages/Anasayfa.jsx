import React, { useState } from "react";
import IlanList from "../components/IlanList";
import { is_ilanlari_veriler } from "../components/IlanList.jsx";

const Anasayfa = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="App">
      <h1>İş İlan Portalı</h1>
      <div className="header">
        <div className="arama-kutusu">
          <input
            type="text"
            placeholder="İş İlanı Arayın"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button id="arama_butonu">Ara</button>
        </div>
      </div>
      <IlanList jobs={is_ilanlari_veriler} query={query} />
    </div>
  );
};

export default Anasayfa;
