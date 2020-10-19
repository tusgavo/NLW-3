import React from "react";
import mapMarkerimg from "../images/mapMarker.svg";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import "../styles/pages/orfanatoMap.css";

function orfanatoMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerimg} alt="" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Indaiatuba</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map
        center={[-23.0947621, -47.1846244]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>
      <Link to="" className="create-orfanato">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default orfanatoMap;
