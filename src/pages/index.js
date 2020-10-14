import React from "react"

import '../../static/style/style.css';
import '../../static/style/mobile-style.css';

import Helmet from 'react-helmet';

import LandingPage from "../components/LandingPage";
import Korzysci from "../components/Korzysci";
import Oferta from "../components/Oferta";
import Kontakt from "../components/Kontakt";
import ZaufaliNam from "../components/ZaufaliNam";
import OMnie from "../components/OMnie";
import Footer from "../components/Footer";

export default function Home() {
  return (<div className="app">
    <Helmet>
      <title>LukaszBurski.pl</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Twój marketingowiec" />
    </Helmet>
    <LandingPage />
    <Korzysci />
    <Oferta />
    <Kontakt />
    {/*<ZaufaliNam />*/}
    <OMnie/>
    <Footer/>
  </div>)
}
