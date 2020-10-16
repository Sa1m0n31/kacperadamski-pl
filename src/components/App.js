import React, { useEffect, useRef } from "react";

import LandingPage from "./LandingPage";
import Korzysci from "./Korzysci";
import Oferta from "./Oferta";
import Kontakt from "./Kontakt";
import ZaufaliNam from "./ZaufaliNam";
import OMnie from "./OMnie";
import Footer from "./Footer";
import $ from "jquery";

const App = () => {
    useEffect(() => {
        if(typeof document !== 'undefined') {
            $.scrollify({
                section: ".section",
                scrollSpeed: 1500,
                scrollbar: false,
                easing: "easeOutExpo",
                after: () => {
                    if($.scrollify.currentIndex() === 0) {
                        document.querySelector(".dots").style.display = "none";
                        return 0;
                    }

                    document.querySelector(".dots").style.display = "block";
                    const dot = $.scrollify.currentIndex();
                    const el = document.querySelectorAll(`.dotItem`);
                    for(let i=0; i<el.length; i++) {
                        el[i].style.backgroundColor = "#363636";
                    }
                    el[dot].style.backgroundColor = "#27E59E";
                }
            });
        }
    }, []);

    const changeSection = (num) => {
        $.scrollify.move(num);
    }

    const sec1 = useRef(null);
    const sec2 = useRef(null);
    const sec3 = useRef(null);
    const sec4 = useRef(null);
    const sec5 = useRef(null);

    return (<div className="app">
        <div className="dots">
            <div className="dotItem" ref={sec1} onClick={() => changeSection(0)}/>
            <div className="dotItem" ref={sec2} onClick={() => changeSection(1)}/>
            <div className="dotItem" ref={sec3} onClick={() => changeSection(2)}/>
            <div className="dotItem" ref={sec4} onClick={() => changeSection(3)}/>
            <div className="dotItem" ref={sec5} onClick={() => changeSection(4)}/>
        </div>
        <LandingPage />
        <Korzysci />
        <Oferta />
        <Kontakt />
        {/*<ZaufaliNam />*/}
        <OMnie/>
        {/*<Footer/>*/}
    </div>);
}

export default App;