import React from "react";

import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

const LandingPage = () => {

    const data = useStaticQuery(graphql`
        query SliderQuery {
    landingPage: file(relativePath: { eq: "biznesmen.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 2560, maxHeight: 1800) {
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

    return (<header className="landingPage">
        <Img className="landingPageImg" imgStyle={{objectPosition: '60% 20%'}} fluid={data.landingPage.childImageSharp.fluid} alt="marketing" />
        <div className="messengerContainer">
            <h2>Potrzebujesz konsultacji?</h2>
            <h1>Napisz do mnie na messengerze!</h1>
            <div className="messengerInner">
                <a href="http://m.me/lukasburski" target="_blank">
                    <img src={require("../../static/img/messenger.png")} alt="messenger" />
                    <h4>Kliknij i napisz wiadomość</h4>
                    <div id="translate" />
                    <a />
                </a>
            </div>
        </div>
        <h4 className="haslo">Lukasz Burski<br/>Twój marketingowiec</h4>
    </header>)
};

export default LandingPage;
