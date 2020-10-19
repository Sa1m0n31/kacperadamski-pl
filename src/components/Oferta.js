import React, { useEffect, useRef, useState } from "react";

import { gsap, ScrollTrigger, Bounce } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, Bounce);

const Oferta = () => {

    const one = useRef(null);
    const two = useRef(null);
    const three = useRef(null);
    const four = useRef(null);

    let [width, setWidth] = useState(0);

    useEffect(() => {

        if(typeof window !== 'undefined') {
            setWidth(window.innerWidth);
            window.addEventListener("resize", () => {
               setWidth(window.innerWidth);
            });

            gsap.set([one.current, two.current, three.current, four.current], { x: -3000, opacity: 0 });
        }


    }, []);

    if(width > 700) {
        gsap.to(four.current, { x: 0, duration: 0.5, opacity: 1, scrollTrigger: {
                trigger: ".oferta",
                start: "top 50%"
            } });

        gsap.to(three.current, { x: 0, duration: 0.5, opacity: 1, delay: 0.5, scrollTrigger: {
                trigger: ".oferta",
                start: "top 50%"
            } });

        gsap.to(two.current, { x: 0, duration: 0.5, opacity: 1, delay: 1, scrollTrigger: {
                trigger: ".oferta",
                start: "top 50%"
            } });

        gsap.to(one.current, { x: 0, duration: 0.5, opacity: 1, delay: 1.5, scrollTrigger: {
                trigger: ".oferta",
                start: "top 50%"
            } });
    }
    else if((width > 300)&&(width < 700)) {
        gsap.to(one.current, { x: 0, duration: 0.5, opacity: 1, scrollTrigger: {
                trigger: ".oferta",
                start: "top 50%"
            } });

        gsap.to(two.current, { x: 0, duration: 0.5, opacity: 1, delay: 0.5, scrollTrigger: {
                trigger: ".second",
                start: "top 100%"
            } });

        gsap.to(three.current, { x: 0, duration: 0.5, opacity: 1, delay: 1, scrollTrigger: {
                trigger: ".third",
                start: "top 100%"
            } });

        gsap.to(four.current, { x: 0, duration: 0.5, opacity: 1, delay: 1.5, scrollTrigger: {
                trigger: ".fourth",
                start: "top 100%"
            } });
    }

    return (<section className="oferta section" id="oferta">
        <h2>Oferta</h2>
        <div className="ofertaGrid">
            <div ref={one} className="ofertaItem">
                <div className="iconSection">
                    <img src={require("../../static/img/www.png")} alt="strony-internetowe" />
                </div>
                <h4>Strony internetowe</h4>
                <ul className="optionsSection">
                    <li>Strony portfolio</li>
                    <li>Strony wizytówki</li>
                    <li>Inne strony</li>
                </ul>
            </div>

            <div ref={two} className="ofertaItem second">
                <div className="iconSection">
                    <img src={require("../../static/img/reklamy.png")} alt="reklamy" />
                </div>
                <h4>Reklamy</h4>
                <ul className="optionsSection">
                    <li>Facebook Ads</li>
                    <li>Google Ads</li>
                    <li>Kampanie reklamowe</li>
                </ul>
            </div>

            <div ref={three} className="ofertaItem third">
                <div className="iconSection">
                    <img src={require("../../static/img/konsultacje.png")} alt="konsultacje" />
                </div>
                <h4>Konsultacje</h4>
                <ul className="optionsSection">
                    <li>Marka osobista</li>
                    <li>Firma</li>
                    <li>Doradztwo marketingowe</li>
                </ul>
            </div>

            <div ref={four} className="ofertaItem fourth">
                <div className="iconSection">
                    <img src={require("../../static/img/copywriting.png")} alt="copywriting" />
                </div>
                <h4>Copywriting</h4>
                <ul className="optionsSection">
                    <li>Leady</li>
                    <li>Slogany reklamowe</li>
                    <li>Teksty blogowe</li>
                </ul>
            </div>
        </div>
    </section>);
};

export default Oferta;
