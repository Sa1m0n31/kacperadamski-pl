import React from "react";

import { useStaticQuery, graphql } from "gatsby";

import Img from 'gatsby-image';

const TopBar = () => {

    const data = useStaticQuery(graphql`
    query TopBarQuery {
        logo: file(relativePath: { eq: "lukaszburski-logo.png" }) {
        childImageSharp {
            fluid(maxWidth: 400, maxHeight: 200) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    telefon: file(relativePath: { eq: "telefon-ikona.png" }) {
        childImageSharp {
            fluid(maxWidth: 150, maxHeight: 150) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    }
    `);

    return (<header className="topBar">
            <div className="logoContainer">
                <img src={require("../../static/img/lukaszburski-logo.png")} alt="lukasz-burski" />
            </div>
            <div className="callToMe">
                <h3>Zadzwoń</h3>
                <img src={require("../../static/img/telefon-ikona.png")} alt="telefon" />
                <h4>100 200 300</h4>
            </div>
    </header>
    );
};

export default TopBar;
