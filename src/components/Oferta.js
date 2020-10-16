import React, { useEffect, useRef } from "react";


const Oferta = () => {

    const leftTop = useRef(null);
    const leftBottom = useRef(null);
    const rightTop = useRef(null);
    const rightBottom = useRef(null);

    return (<section className="oferta section" id="oferta">
        <h2>Oferta</h2>
        <div className="ofertaGrid">
            <div ref={leftTop} className="ofertaItem">
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

            <div ref={rightTop} className="ofertaItem">
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

            <div ref={leftBottom} className="ofertaItem">
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

            <div ref={rightBottom} className="ofertaItem">
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
