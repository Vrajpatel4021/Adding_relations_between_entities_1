import React from "react";
import DestinationContainer from "./components/DestinationContainer";
import "./index.css"

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Top Travel Destinations</h1>
      <DestinationContainer />
    </div>
  );
}

export default App;
