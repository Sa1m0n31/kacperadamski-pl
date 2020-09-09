import React from "react";

const Korzysci = () => {
    return (<section className="korzysci">
        <div className="mobileOnly korzysciHeader">
            <h3>Lukasz Burski</h3>
            <h4>Twój marketingowiec</h4>
        </div>
        <h2>Co mogę Ci <span className="red">zaproponować</span>?</h2>
        <p className="korzysciP">Sprawdź moją ofertę i skontaktuj się ze mną aby dobrać <span className="bold">najskuteczniejsze</span> dla ustalonych przez Ciebie celów działania</p>
        <h4 className="desktopOnly">Co gwarantuję?</h4>
        <div className="propozycjeContainer">
            <div className="propozycjeStrzalki">
                <div className="cyfra desktopOnly">1</div>
                <img className="liniaPrzerywana desktopOnly" src={require("../../static/img/linia-przerywana.png")} alt="linia-przerywana" />
                <div className="cyfra desktopOnly">2</div>
                <img className="liniaPrzerywana desktopOnly" src={require("../../static/img/linia-przerywana.png")} alt="linia-przerywana" />
                <div className="cyfra desktopOnly">3</div>

                <img className="iconNumber gwarancja" src={require("../../static/img/gwarancja-ikonka.png")} alt="gwarancja-jakosci" />
                <h3 className="h3First mobileOnly">Gwarancja doboru najkorzystniejszych rozwiązań</h3>
                <p className="pFirst mobileOnly">Zapewniam indywidualne podejście do klienta i dobranie działań pod Twoje potrzeby i cele</p>

                <img className="iconNumber dlonie" src={require("../../static/img/graba.png")} alt="gwarancja-jakosci" />
                <h3 className="h3Second mobileOnly">Korzystne warunki współpracy</h3>
                <p className="pSecond mobileOnly">Zapewniam indywidualne podejście do klienta i dobranie działań pod Twoje potrzeby i cele</p>

                <img className="iconNumber zegar" src={require("../../static/img/zegar.png")} alt="gwarancja-jakosci" />
                <h3 className="h3Third mobileOnly">Terminowa współpraca</h3>
                <p className="pThird mobileOnly">Zapewniam indywidualne podejście do klienta i dobranie działań pod Twoje potrzeby i cele</p>
            </div>
            <div className="propozycjeContent desktopOnly">
                <h3 className="h3First">Gwarancja doboru najkorzystniejszych rozwiązań</h3>
                <p className="pFirst">Zapewniam indywidualne podejście do klienta i dobranie działań pod Twoje potrzeby i cele</p>
                <h3 className="h3Second">Korzystne warunki współpracy</h3>
                <p className="pSecond">Zapewniam indywidualne podejście do klienta i dobranie działań pod Twoje potrzeby i cele</p>
                <h3 className="h3Third">Terminowa współpraca</h3>
                <p className="pThird">Zapewniam indywidualne podejście do klienta i dobranie działań pod Twoje potrzeby i cele</p>
            </div>
        </div>
    </section>)
};

export default Korzysci;
