import React, { useEffect, useRef } from "react";

import { gsap, ScrollTrigger } from 'gsap/all';

const Oferta = () => {
    gsap.registerPlugin(ScrollTrigger);

    const leftTop = useRef(null);
    const leftBottom = useRef(null);
    const rightTop = useRef(null);
    const rightBottom = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        gsap.fromTo(leftTop.current, { x: "-=800", y: "-=200" }, { x: "0", y: "0", duration: 1, scrollTrigger: {trigger: ".ofertaGrid",
                start: "top, 70%"} });
        gsap.fromTo(rightTop.current, { x: "+=800", y: "-=200" }, { x: "0", y: "0", duration: 1, scrollTrigger: {
                trigger: ".ofertaGrid",
                start: "top, 70%"
            } });
        gsap.fromTo(leftBottom.current, { x: "-=800", y: "+=200" }, { x: "0", y: "0", duration: 1, scrollTrigger: {trigger: ".ofertaGrid",
                start: "top, 20%"} });
        gsap.fromTo(rightBottom.current, { x: "+=800", y: "+=200" }, { x: "0", y: "0", duration: 1, scrollTrigger: {
                trigger: ".ofertaGrid",
                start: "top, 20%"
            } });
    }, []);

    return (<section className="oferta">
        <div className="ofertaGrid">
            <div ref={leftTop} className="ofertaItem">
                <div className="iconSection">
                    <img src={require("../../static/img/www.png")} alt="strony-internetowe" />
                </div>
                <h4>Strony internetowe</h4>
                <ul className="optionsSection">
                    <li><img src={require("../../static/img/strzalka.png")} alt="strzalka" />Strony portfolio</li>
                    <li><img src={require("../../static/img/strzalka.png")} alt="strzalka" />Strony wizytówki</li>
                    <li><img src={require("../../static/img/strzalka.png")} alt="strzalka" />Inne strony</li>
                </ul>
            </div>

            <div ref={rightTop} className="ofertaItem">
                <div className="iconSection">
                    <img src={require("../../static/img/reklamy.png")} alt="reklamy" />
                </div>
                <h4>Reklamy</h4>
                <ul className="optionsSection">
                    <li><img src={require("../../static/img/strzalka.png")} alt="strzalka" />Facebook Ads</li>
                    <li><img src={require("../../static/img/strzalka.png")} alt="strzalka" />Google Ads</li>
                    <li><img src={require("../../static/img/strzalka.png")} alt="strzalka" />Kampanie reklamowe</li>
                </ul>
            </div>

            <div ref={leftBottom} className="ofertaItem">
                <div className="iconSection">
                    <img src={require("../../static/img/konsultacje.png")} alt="konsultacje" />
                </div>
                <h4>Konsultacje</h4>
                <ul className="optionsSection">
                    <li><img src={require("../../static/img/strzalka.png")} alt="strzalka" />Marka osobista</li>
                    <li><img src={require("../../static/img/strzalka.png")} alt="strzalka" />Firma</li>
                    <li><img src={require("../../static/img/strzalka.png")} alt="strzalka" />Doradztwo marketingowe</li>
                </ul>
            </div>

            <div ref={rightBottom} className="ofertaItem">
                <div className="iconSection">
                    <img src={require("../../static/img/copywriting.png")} alt="copywriting" />
                </div>
                <h4>Copywriting</h4>
                <ul className="optionsSection">
                    <li><img src={require("../../static/img/strzalka.png")} alt="strzalka" />Leady</li>
                    <li><img src={require("../../static/img/strzalka.png")} alt="strzalka" />Slogany reklamowe</li>
                    <li><img src={require("../../static/img/strzalka.png")} alt="strzalka" />Teksty blogowe</li>
                </ul>
            </div>
        </div>
    </section>);
};

export default Oferta;
