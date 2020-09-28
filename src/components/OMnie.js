import React, { useState, useEffect, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

import { gsap, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

const OMnie = () => {

    let [width, setWidth] = useState(1600);

    useEffect(() => {
       setWidth(window.innerWidth);
       if(typeof window !== 'undefined') {
           window.addEventListener("load", () => {
               setWidth(window.innerWidth);
           });

           window.addEventListener("resize", () => {
               setWidth(window.innerWidth);
           });
       }
    });

    const data = useStaticQuery(graphql`
        query OmnieQuery {
    landingPage: file(relativePath: { eq: "menszczyzna.png" }) {
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

    const overlay = useRef(null);

    useEffect(() => {
        gsap.to(overlay.current, {scaleY: 0, transformOrigin: "100% 100%", duration: 1, scrollTrigger: {
            trigger: ".omnieSection",
                start: "top 50%"
            }})
    }, []);

    return (<section className="omnieSection">
        {width > 900 ? (<div className="omnieInner">
            <div ref={overlay} className="overlayOMnie" />
            <div className="omnieImgContainer">
                <Img className="omnieImg" fluid={data.landingPage.childImageSharp.fluid} alt="marketing" />
            </div>
            <div className="omnieTekst">
                <h2 className="omnieHeader"><span className="opacityh2">Hej! Nazywam się</span><br/><span className="superBold">Kacper Adamski</span><br/><span className='opacityh2'>i jestem tu po to, by Ci pomóc</span></h2>
                <p>
                    Mam 31 lat. W 2016 roku ukończyłem studia na kierunku zarządzanie na Uniwersytecie Mikołaja Kopernika w Toruniu.
                    Marketingiem zajmuje się zawodowo od ponad pięciu lat, jednak dziedzina ta to przede wszystkim moja życiowa pasja.
                    Skontaktuj się ze mną, a razem wyprowadzimy Twoją firmę na marketingowe szczyty!
                </p>
                <div className="hasloReklamowe">
                    <h2>Biznes bez marketingu?</h2>
                    <h3>Promowanie biznesu to bardzo ważna rzecz.<br/>Pomogę Ci osiągnąć Twoje cele i rozkręcić Twój biznes.</h3>
                </div>
            </div>
        </div>) : (<div className="omnieInnerMobile">
            <h2 className="omnieHeader"><span className="opacityh2">Cześć, witajcie! Nazywam się</span><br/><span className="superBold">Łukasz Burski</span><br/><span className='opacityh2'>i jestem waszym marketingowcem</span></h2>
            <div className="omnieImgContainer">
                <Img className="omnieImg" imgStyle={{objectPosition: '90% 80%'}} fluid={data.landingPage.childImageSharp.fluid} alt="marketing" />
            </div>
            <div className="omnieTekst">
                <p>
                    Mam 31 lat. W 2016 roku ukończyłem studia na kierunku zarządzanie na Uniwersytecie Mikołaja Kopernika w Toruniu.
                    Marketingiem zajmuje się zawodowo od ponad pięciu lat, jednak dziedzina ta to przede wszystkim moja życiowa pasja.
                    Skontaktuj się ze mną, a razem wyprowadzimy Twoją firmę na marketingowe szczyty!
                </p>
            </div>
        </div>)}

    </section>)
};

export default OMnie;
