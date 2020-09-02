import React from "react"

import '../../static/style/style.css';

import TopBar from "../components/TopBar";
import LandingPage from "../components/LandingPage";
import Korzysci from "../components/Korzysci";
import Oferta from "../components/Oferta";

export default function Home() {
  return (<div className="app">
    <TopBar />
    <LandingPage />
    <Korzysci />
    <Oferta />
  </div>)
}
