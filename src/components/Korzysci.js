import React from "react";

const Korzysci = () => {
    return (<section className="korzysci">
        <h2>Co mogę Ci <span className="red">zaproponować</span>?</h2>
        <p className="korzysciP">Sprawdź moją ofertę i skontaktuj się ze mną aby dobrać <span className="bold">najskuteczniejsze</span> dla ustalonych przez Ciebie celów działania</p>
        <h4>Co gwarantuję?</h4>
        <div className="propozycjeContainer">
            <div className="propozycjeStrzalki">
                <div className="cyfra">1</div>
                <img className="liniaPrzerywana" src={require("../../static/img/linia-przerywana.png")} alt="linia-przerywana" />
                <div className="cyfra">2</div>
                <img className="liniaPrzerywana" src={require("../../static/img/linia-przerywana.png")} alt="linia-przerywana" />
                <div className="cyfra">3</div>
                <img className="iconNumber gwarancja" src={require("../../static/img/gwarancja-ikonka.png")} alt="gwarancja-jakosci" />
                <img className="iconNumber dlonie" src={require("../../static/img/graba.png")} alt="gwarancja-jakosci" />
                <img className="iconNumber zegar" src={require("../../static/img/zegar.png")} alt="gwarancja-jakosci" />
            </div>
            <div className="propozycjeContent">
                <h3 className="h3First">Gwarancja doboru najkorzystniejszych rozwiązań</h3>
                <p className="pFirst">Zapewniam indywidualne podejście do klienta i dobranie działań pod Twoje potrzeby i cele</p>
                <h3 className="h3Second">Korzystne warunki współpracy</h3>
                <p className="pSecond">Zapewniam indywidualne podejście do klienta i dobranie działań pod Twoje potrzeby i cele</p>
                <h3 className="h3Third">Korzystne warunki współpracy</h3>
                <p className="pThird">Zapewniam indywidualne podejście do klienta i dobranie działań pod Twoje potrzeby i cele</p>
            </div>
        </div>
    </section>)
};

export default Korzysci;
