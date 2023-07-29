import React from "react";
import RouteTable from "./components/RouteTable";
import MapView from "./components/MapView";
import "./App.css";
const App = () => {
  return (
    <div className="app">
      <RouteTable />
      <MapView />
    </div>
  );
};

export default App;
