import React, { useEffect, useRef } from "react";

import { gsap, ScrollTrigger } from 'gsap/all';

const Korzysci = () => {
    gsap.registerPlugin(ScrollTrigger);

    const header = useRef(null);
    const caption = useRef(null);
    const propozycje = useRef(null);

    useEffect(() => {

    }, []);


    return (<section className="korzysci section">
        <div className="mobileOnly korzysciHeader">
            <h3>Kacper Adamski</h3>
            <h4>Twoja marka w Internecie</h4>
        </div>
        <h2 ref={header}>Co mogę Ci <span className="greenFont">zaproponować</span>?</h2>
        <p ref={caption} className="korzysciP">Sprawdź moją ofertę i skontaktuj się ze mną aby dobrać <span className="bold">najskuteczniejsze</span> dla ustalonych przez Ciebie celów działania</p>
        <div ref={propozycje} className="propozycjeContainer">
            <div className="propozycjeStrzalki">
                <div className="cyfra desktopOnly">1</div>
                <img className="liniaPrzerywana desktopOnly" src={require("../../static/img/linia-przerywana.png")} alt="linia-przerywana" />
                <div className="cyfra desktopOnly">2</div>
                <img className="liniaPrzerywana desktopOnly" src={require("../../static/img/linia-przerywana.png")} alt="linia-przerywana" />
                <div className="cyfra desktopOnly">3</div>

                <img className="iconNumber gwarancja" src={require("../../static/img/gwarancja-ikonka.png")} alt="gwarancja-jakosci" />
                <h3 className="h3First mobileOnly">Gwarancja doboru najkorzystniejszych rozwiązań</h3>
                <p className="pFirst mobileOnly">Zapewniam indywidualne podejście do klienta i dobranie działań pod Twoje potrzeby i cele.</p>

                <img className="iconNumber dlonie" src={require("../../static/img/graba.png")} alt="gwarancja-jakosci" />
                <h3 className="h3Second mobileOnly">Korzystne warunki współpracy</h3>
                <p className="pSecond mobileOnly">Najniższe ceny i najwyższa jakość świadczonych usług. Na pewno uda nam się dogadać!</p>

                <img className="iconNumber zegar" src={require("../../static/img/zegar.png")} alt="gwarancja-jakosci" />
                <h3 className="h3Third mobileOnly">Terminowa<br/>współpraca</h3>
                <p className="pThird mobileOnly">Terminowość uważam za jedną ze swoich najmocniejszych stron. Skontaktuj się ze mną, a nie będziesz się musiał martwić o deadliny.</p>
            </div>
            <div className="propozycjeContent desktopOnly">
                <h3 className="h3First">Gwarancja doboru najkorzystniejszych rozwiązań</h3>
                <p className="pFirst">Zapewniam indywidualne podejście do klienta i dobranie działań pod Twoje potrzeby i cele</p>
                <h3 className="h3Second">Korzystne warunki współpracy</h3>
                <p className="pSecond">Najniższe ceny i najwyższa jakość świadczonych usług. Na pewno uda nam się dogadać!</p>
                <h3 className="h3Third">Terminowa<br/>współpraca</h3>
                <p className="pThird">Terminowość uważam za jedną ze swoich najmocniejszych stron. Skontaktuj się ze mną, a nie będziesz się musiał martwić o deadliny.</p>
            </div>
        </div>
    </section>)
};

export default Korzysci;
