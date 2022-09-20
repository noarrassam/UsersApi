import React, { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Details from "../components/Details";
import Api from "../components/Api";
import GlobalContext from "../store/store";

function AllDetails() {
  const params = useParams();
  return (
    <>
      <div>
        <Details data={params.id} />
      </div>
    </>
  );
}

export default function RoutesInfo() {
  const [state, setState] = useState({ arr: [], id: -1, setState: null });

  useEffect(() => {
    if (!state.setState) {
      setState({ ...state, setState: setGlobalVar });
    }
  });

  const setGlobalVar = (item) => {
    if (item) {
      setState({ ...state, ...item });
    }
  };

  return (
    <GlobalContext.Provider value={state}>
      <Routes>
        <Route path="/" element={<Api />}></Route>
        <Route path="/details/:id" element={<AllDetails />}></Route>
      </Routes>
    </GlobalContext.Provider>
  );
}
