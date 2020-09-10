import React from "react";

const TopBar = () => {

    const scrollToTop = () => {
        if(typeof window !== 'undefined') {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    };

    return (<header className="topBar">
            <div className="logoContainer" onClick={scrollToTop}>
                <img src={require("../../static/img/lukaszburski-logo.png")} alt="lukasz-burski" />
            </div>
            <div className="callToMe">
                <h3>Zadzwoń</h3>
                <img src={require("../../static/img/telefon-ikona.png")} alt="telefon" />
                <h4><a href="tel:+48728879491">728 879 491</a></h4>
            </div>
    </header>
    );
};

export default TopBar;
