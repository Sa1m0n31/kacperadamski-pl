import React, { useState, useEffect } from "react";

import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

import Modal from 'react-modal';

const LandingPage = () => {

    const data = useStaticQuery(graphql`
        query SliderQuery {
    landingPage: file(relativePath: { eq: "biznesmen.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 3560, maxHeight: 2800) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    messenger: file(relativePath: { eq: "messenger.png" }) {
        childImageSharp {
            fluid(maxWidth: 150, maxHeight: 150) {
                ...GatsbyImageSharpFluid
            }
        }
    }}`);

    let [ width, setWidth ] = useState(null);
    let [ open, setOpen ] = useState(false);
    let [ initial, setInitial ] = useState(true);

    useEffect(() => {

        if(typeof window !== 'undefined') {
            setWidth(window.innerWidth);
            window.addEventListener("resize", () => {
                setWidth(window.innerWidth);
            });

               setTimeout(() => {
                    if((width < 900)&&(initial)) {
                        setOpen(true);
                        setInitial(false);
                    }
                    else {
                        //setOpen(false);
                    }
                }, 2000);
        }
    });

    return (<header className="landingPage">
        <Modal isOpen={open} className="messengerModal mobileOnly" onRequestClose={() => { setOpen(false); }} portalClassName="landingMobileModal">
            <img className="modalExit" src={require("../../static/img/krzyzyk-szary.png")} alt="exit" onClick={() => { setOpen(false); }} />
            <img className="messengerBlue" src={require("../../static/img/messsenger.png")} alt="messenger" />
            <h2>Napisz do mnie na messengerze!</h2>
            <h3>Zachęcam do kontaktu w sprawie konsultacji oraz do zadawania pytań.</h3>
            <div className="messengerModalInner">
                <a href="http://m.me/lukasburski" target="_blank">
                    <img src={require("../../static/img/messenger-szary.png")} alt="messenger-szary" />
                    <h4>Przejdź do messengera</h4>
                </a>
            </div>
        </Modal>
        <Img className="landingPageImg" imgStyle={{objectPosition: '80% 0%'}} fluid={data.landingPage.childImageSharp.fluid} alt="marketing" />
        <div className="messengerContainer desktopOnly">
            <h2>Potrzebujesz konsultacji?</h2>
            <h1>Napisz do mnie na messengerze!</h1>
            <div className="messengerInner">
                <a href="http://m.me/lukasburski" target="_blank">
                    <img src={require("../../static/img/messenger.png")} alt="messenger" />
                    <h4>Kliknij i napisz wiadomość</h4>
                </a>
            </div>
        </div>
    </header>)
};

export default LandingPage;
