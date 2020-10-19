import React, { useState, useEffect, useRef } from "react";

import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';

import Modal from 'react-modal';

import { gsap } from "gsap/all";

import Typewriter from 'typewriter-effect';

const LandingPage = () => {
    useEffect(() => {
        if((typeof window !== 'undefined')&&(typeof document !== 'undefined')) {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);

            window.addEventListener("resize", () => {
                setWidth(window.innerWidth);
                setHeight(window.innerHeight);
            });

            document.addEventListener("scroll", () => {
                if(window.pageYOffset > 200) {
                    up.current.style.display = "flex";
                }
                else {
                    up.current.style.display = "none";
                }
            });
        }
    }, []);

    let [width, setWidth] = useState(0);
    let [height, setHeight] = useState(0);

    const data = useStaticQuery(graphql`
        query SliderQuery {
    landingPage: file(relativePath: { eq: "wiezowiec.png" }) {
        childImageSharp {
            fluid(maxWidth: 2600, maxHeight: 1733) {
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

    const h2 = useRef(null);
    const btn = useRef(null);
    const up = useRef(null);

    const removeCursor = () => {
        if(typeof document !== 'undefined') {
            document.querySelector(".Typewriter__cursor").style.display = "none";

            if(width > 700) {
                const el = document.createElement('span');
                el.classList.add("green");
                el.innerText = ".";
                const h1 = document.querySelector(".h1");
                h1.appendChild(el);
            }
        }
        gsap.fromTo(h2.current, { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1 });
        gsap.fromTo(btn.current, { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1, delay: 1 });
    }

    const goTo = (arg) => {
        if(typeof document !== 'undefined') {
            const el = document.querySelector(arg);
            el.scrollIntoView({behavior: "smooth"});
        }
    }

    const toTop = () => {
        if(typeof window !== 'undefined') {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }
    }

    return (<header className="landingPage section">
        <div ref={up} className="upBtn" onClick={toTop}>
            <img src={require("../../static/img/up.png")} alt="up" />
        </div>
        <Img className="landingPageImg" imgStyle={{objectPosition: '80% 0%'}} fluid={data.landingPage.childImageSharp.fluid} alt="marketing" />
        <div className="topMenu">
            <h2>KacperAdamski.pl</h2>
            <menu className="menu only-700">
                <h3>Strona główna</h3>
                <h3 onClick={() => goTo(".oferta")}>Oferta</h3>
                <h3 onClick={() => goTo(".omnieSection")}>O mnie</h3>
            </menu>
        </div>
        <div className="landingContent">
            <h1 className="h1">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString("Rozwiązania marketingowe")
                        .start()
                        .callFunction(removeCursor)

                }}
            />
            </h1>
            <h2 ref={h2}>Promowanie biznesu to bardzo ważna rzecz.<br/>Pomogę Ci osiągnąć Twoje cele i rozkręcić Twój interes.</h2>
            <button ref={btn} className="wspolpracaBtn" onClick={() => goTo(".kontakt")}>Współpraca</button>
        </div>
    </header>)
};

export default LandingPage;
