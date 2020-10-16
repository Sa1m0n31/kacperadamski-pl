import React from "react"

import '../../static/style/style.css';
import '../../static/style/mobile-style.css';

import Helmet from 'react-helmet';

import App from "../components/App";

export default function Home() {

  return (<div className="app">
    <Helmet>
      <title>Kacper Adamski</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Rozwiązania marketingowe dla Twojego biznesu." />
      <link rel="icon" type="icon/png" href={require("../../static/img/online-marketing.png")} sizes="16x16" />
    </Helmet>
    <App />
  </div>)
}
