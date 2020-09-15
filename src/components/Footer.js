import React from "react";

import { Link } from 'react-scroll';

import { ReCaptcha, loadReCaptcha } from 'react-recaptcha-v3';

import Modal from 'react-modal';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            isVerified: false,
            isSend: false,
            emailError: ""
        };
        this.resetState = this.resetState.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
    }

    componentDidMount() {
        loadReCaptcha("6Le2asoZAAAAAD15aNFRC_BOttySbziLaTDkMmSD");
    }

    verifyCallback(res) {
        if(res) {
            this.setState({
                isVerified: true
            });
        }
    }

    resetState() {
        this.setState({
            email: "",
            isVerified: false,
            isSend: true
        });
    }

    async handleChange(e) {
        await this.setState({
           email: e.target.value
        });

        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!re.test(String(this.state.email).toLowerCase())) {
            this.setState({
                emailError: "Niepoprawny adres email"
            });
        }
        else {
            this.setState({
                emailError: ""
            });
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        if(this.state.email === "") {
            this.setState({
                emailError: "Wpisz swój adres email"
            });
        }

        if((this.state.isVerified)&&(this.state.emailError === "")&&(this.state.email !== "")) {
            const form = e.target;
            const data = {
                email: this.state.email
            };
            const xhr = new XMLHttpRequest();
            xhr.open(form.method, form.action);
            xhr.setRequestHeader("Accept", "application/json");
            xhr.onreadystatechange = () => {
                if (xhr.readyState !== XMLHttpRequest.DONE) return;
                if (xhr.status === 200) {
                    form.reset();
                    this.setState({ status: "SUCCESS" });
                } else {
                    this.setState({ status: "ERROR" });
                }
            };
            xhr.send(JSON.stringify(data));
            this.resetState();
        }
    }

    render() {
        return (<footer>
            <Modal className="submitForm" isOpen={this.state.isSend} closeTimeoutMS={500} onRequestClose={() => { this.setState({ isSend: false }) }} >
                <img className="modalExit" src={require("../../static/img/x.png")} alt="exit" onClick={() => { this.setState({ isSend: false }) }} />
                <div className="modalInner">
                    <h2>Formularz wysłany!</h2>
                    <h3>Odezwę się do Ciebie jak najszybciej!</h3>
                    <img src={require("../../static/img/okejka.png")} alt="ok" />
                </div>
            </Modal>


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
                <form method="post" name='Email form' action="https://formspree.io/meqrynkg">
                    <input type="email" name="email" placeholder="Twój email" onChange={e => this.handleChange(e)} value={this.state.email} />

                    <ReCaptcha
                        siteKey="6Le2asoZAAAAAD15aNFRC_BOttySbziLaTDkMmSD"
                        render="implicit"
                        verifyCallback={this.verifyCallback} />

                    <button onClick={e => this.handleSubmit(e)}>Potwierdź</button>

                    <div className="error">
                        {this.state.emailError}
                    </div>
                </form>
            </div>
            <div className="bottom">
                <h6>Copyright &copy; LukaszBurski.pl</h6>
                <h6>Designed and created by <a href="https://stronnnka.pl" target="_blank">stronnnka.pl</a></h6>
            </div>
        </footer>)
    }

}
