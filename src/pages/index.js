import React from "react"

import '../../static/style/style.css';
import '../../static/style/mobile-style.css';

import Helmet from 'react-helmet';

import App from "../components/App";

export default function Home() {

  return (<div className="app">
    <Helmet>
      <title>LukaszBurski.pl</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Twój marketingowiec" />
    </Helmet>
    <App />
  </div>)
}
