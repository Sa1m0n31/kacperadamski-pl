import React from "react";

const Oferta = () => {
    return (<section className="oferta">
        <div className="ofertaGrid">
            <div className="ofertaItem">
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

            <div className="ofertaItem">
                <div className="iconSection">
                    <img src={require("../../static/img/reklamy.png")} alt="reklamy" />
                </div>
                <h4>Reklamy</h4>
                <ul className="optionsSection">
                    <li><img src={require("../../static/img/strzalka.png")} alt="strzalka" />Strony portfolio</li>
                    <li><img src={require("../../static/img/strzalka.png")} alt="strzalka" />Strony wizytówki</li>
                    <li><img src={require("../../static/img/strzalka.png")} alt="strzalka" />Inne strony</li>
                </ul>
            </div>

            <div className="ofertaItem">
                <div className="iconSection">
                    <img src={require("../../static/img/konsultacje.png")} alt="konsultacje" />
                </div>
                <h4>Konsultacje</h4>
                <ul className="optionsSection">
                    <li><img src={require("../../static/img/strzalka.png")} alt="strzalka" />Strony portfolio</li>
                    <li><img src={require("../../static/img/strzalka.png")} alt="strzalka" />Strony wizytówki</li>
                    <li><img src={require("../../static/img/strzalka.png")} alt="strzalka" />Inne strony</li>
                </ul>
            </div>

            <div className="ofertaItem">
                <div className="iconSection">
                    <img src={require("../../static/img/copywriting.png")} alt="copywriting" />
                </div>
                <h4>Copywriting</h4>
                <ul className="optionsSection">
                    <li><img src={require("../../static/img/strzalka.png")} alt="strzalka" />Strony portfolio</li>
                    <li><img src={require("../../static/img/strzalka.png")} alt="strzalka" />Strony wizytówki</li>
                    <li><img src={require("../../static/img/strzalka.png")} alt="strzalka" />Inne strony</li>
                </ul>
            </div>
        </div>
    </section>);
};

export default Oferta;
