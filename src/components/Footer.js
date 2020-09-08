import React from "react";

import { Link } from 'react-scroll';

const Footer = () => {
    return (<footer>
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
            <input type="email" name="email" placeholder="Twój email" />
            <button>Potwierdź</button>
        </div>
        <div className="bottom">
            <h6>Copyright &copy; LukaszBurski.pl</h6>
            <h6>Designed and created by <a href="https://stronnnka.pl" target="_blank">stronnnka.pl</a></h6>
        </div>
    </footer>)
};

export default Footer;
