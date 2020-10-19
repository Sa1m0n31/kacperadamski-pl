import React, { useEffect, useRef, useState } from "react";

import { gsap, ScrollTrigger } from 'gsap/all';

const Korzysci = () => {
    gsap.registerPlugin(ScrollTrigger);

    const one = useRef(null);
    const two = useRef(null);
    const three = useRef(null);

    let [width, setWidth] = useState(0);

    useEffect(() => {
        if(typeof window !== 'undefined') {
            setWidth(window.innerWidth);
            window.addEventListener("resize", () => {
               setWidth(window.innerWidth);
            });
        }

        gsap.set([one.current, two.current, three.current], { y: 2000 });
    }, []);

    console.log("Width: " + width);
    if(width > 700) {
        gsap.to(three.current, { y: 0, duration: .5, scrollTrigger: {
                trigger: ".korzysci",
                start: "top 70%"
            } });
        gsap.to(two.current, { y: 0, duration: .5, delay: .5, scrollTrigger: {
                trigger: ".korzysci",
                start: "top 70%"
            } });
        gsap.to(one.current, { y: 0, duration: .5, delay: 1, scrollTrigger: {
                trigger: ".korzysci",
                start: "top 70%"
            } });
    }
    else {
        gsap.to(one.current, { y: 0, duration: .5, scrollTrigger: {
                trigger: ".korzysci",
                start: "top 70%"
            } });
        gsap.to(two.current, { y: 0, duration: .5, delay: .5, scrollTrigger: {
                trigger: ".korzysci",
                start: "top 40%"
            } });
        gsap.to(three.current, { y: 0, duration: .5, delay: 1, scrollTrigger: {
                trigger: ".korzysci",
                start: "top 20%"
            } });
    }

    return (<section className="korzysci section">
        <h2>Co mogę Ci zaproponować?</h2>
        <div className="propozycjeContainer">
            <div ref={one} className="propozycjeItem">
                <div className="image">
                    <h3 className="number">1</h3>
                    <img src={require("../../static/img/sure.png")} alt="gwarancja" className="img-1" />
                </div>
                <div className="textWrap">
                    <h4 className="title">Gwarancja doboru najkorzystniejszych rozwiązań</h4>
                    <p className="text">
                        Zapewniam indywidualne podejście do klienta i dobranie działań pod Twoje potrzeby i cele.
                    </p>
                </div>
            </div>

            <div ref={two} className="propozycjeItem">
                <div className="image">
                    <h3 className="number">2</h3>
                    <img src={require("../../static/img/profit.png")} alt="korzysc" className="img-2" />
                </div>
                <div className="textWrap">
                    <h4 className="title">Korzystne warunki współpracy</h4>
                    <p className="text">
                        Najniższe ceny i najwyższa jakość świadczonych usług. Na pewno uda nam się dogadać!
                    </p>
                </div>
            </div>

            <div ref={three} className="propozycjeItem">
                <div className="image">
                    <h3 className="number">3</h3>
                    <img src={require("../../static/img/zegar.png")} alt="terminowosc" className="img-3" />
                </div>
                <div className="textWrap">
                    <h4 className="title">Terminowa współpraca</h4>
                    <p className="text">
                        Skontaktuj się ze mną, a nie będziesz się musiał martwić o deadliny.
                    </p>
                </div>
            </div>
        </div>
    </section>)
};

export default Korzysci;
