import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';


const OMnie = () => {

    let [width, setWidth] = useState(1600);

    useEffect(() => {
       if(typeof window !== 'undefined') {
           window.addEventListener("load", () => {
               setWidth(window.innerWidth);
           });

           window.addEventListener("resize", () => {
               setWidth(window.innerWidth);
           });
           console.log(width);
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

    return (<section className="omnieSection">
        {width > 900 ? (<div className="omnieInner">
            <div className="omnieImgContainer">
                <Img className="omnieImg" fluid={data.landingPage.childImageSharp.fluid} alt="marketing" />
            </div>
            <div className="omnieTekst">
                <h2 className="omnieHeader"><span className="opacityh2">Cześć, witajcie! Nazywam się</span><br/><span className="superBold">Łukasz Burski</span><br/><span className='opacityh2'>i jestem waszym marketingowcem</span></h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed dolor turpis. Pellentesque convallis consequat varius. In hac habitasse platea dictumst. Morbi porta vestibulum pulvinar. Suspendisse sodales mi ut malesuada placerat. Integer euismod convallis leo eget maximus. Nam fringilla massa non faucibus vehicula. Suspendisse potenti. Nam et euismod magna, a laoreet sem. Nunc fermentum, diam in consectetur tincidunt, dui neque luctus augue, ac malesuada felis sem in dui. Praesent ac sollicitudin magna, id aliquet massa. Sed tincidunt fringilla urna, nec interdum sapien commodo eget. Proin ultrices a turpis in congue.</p>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed dolor turpis. Pellentesque convallis consequat varius. In hac habitasse platea dictumst. Morbi porta vestibulum pulvinar. Suspendisse sodales mi ut malesuada placerat. Integer euismod convallis leo eget maximus. Nam fringilla massa non faucibus vehicula. Suspendisse potenti. Nam et euismod magna, a laoreet sem. Nunc fermentum, diam in consectetur tincidunt, dui neque luctus augue, ac malesuada felis sem in dui. Praesent ac sollicitudin magna, id aliquet massa. Sed tincidunt fringilla urna, nec interdum sapien commodo eget. Proin ultrices a turpis in congue.</p>
            </div>
        </div>)}

    </section>)
};

export default OMnie;
