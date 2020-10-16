import React, { useState, useEffect, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

import { gsap, ScrollTrigger } from 'gsap/all';
import Modal from "react-modal";
import {Link} from "react-scroll";
import {ReCaptcha} from "react-recaptcha-v3";
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

    return (<section className="omnieSection section" id="omnieSection">
        {width > 900 ? (<div className="omnieInner">
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

        <footer>
            <div className="left">
                <img className="footerLogo" src={require("../../static/img/lukasz-burski-footer.png")} alt="Lukasz Burski" />
                <ul className="menuFooter">
                    <li>
                        <Link
                            activeClass="active"
                            to="kontakt"
                            smooth={true}
                            duration={500}>Kontakt</Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="omnieSection"
                            smooth={true}
                            duration={200}>O mnie</Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="oferta"
                            smooth={true}
                            duration={500}>Oferta</Link>
                    </li>
                    <li>
                        <Link
                            activeClass="active"
                            to="zaufaliNam"
                            smooth={true}
                            duration={500}>Referencje</Link>
                    </li>
                </ul>
                <div className="socialMedia">
                    <img src={require("../../static/img/facebook.png")} alt="facebook" />
                    <img src={require("../../static/img/instagram.png")} alt="instagram" />
                    <img src={require("../../static/img/linked.png")} alt="linkedin" />
                </div>
            </div>
            <div className="right">
                <h3>Zostaw swojego maila</h3>
                <h4>Odezwę się do Ciebie najszybciej jak to możliwe</h4>
                <form method="POST" action="https://formspree.io/meqrynkg" >
                    <input type="email" name="email" placeholder="Twój email" />
                    <button type="submit">Potwierdź</button>
                </form>
            </div>
            <div className="bottom">
                <h6>Copyright &copy; LukaszBurski.pl</h6>
                <h6>Designed and created by <a href="https://stronnnka.pl" target="_blank">stronnnka.pl</a></h6>
            </div>
        </footer>

    </section>)
};

export default OMnie;
