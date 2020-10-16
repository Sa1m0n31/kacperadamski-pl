import React, { useEffect, useRef } from "react";

import LandingPage from "./LandingPage";
import Korzysci from "./Korzysci";
import Oferta from "./Oferta";
import Kontakt from "./Kontakt";
import ZaufaliNam from "./ZaufaliNam";
import OMnie from "./OMnie";
import Footer from "./Footer";

const App = () => {

    return (<div className="app">
        <LandingPage />
        <Korzysci />
        <Oferta />
        <Kontakt />
        {/*<ZaufaliNam />*/}
        <OMnie/>
        <Footer/>
    </div>);
}

export default App;