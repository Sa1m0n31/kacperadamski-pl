import React from 'react';

import { ReCaptcha, loadReCaptcha } from 'react-recaptcha-v3';

import Modal from 'react-modal';

export default class Kontakt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            surname: "",
            email: "",
            phoneNumber: "",
            msg: "",
            mobile: null,
            status: "",
            isVerified: false,
            isSend: false,
            formError: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
        this.resetState = this.resetState.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        if(typeof window !== 'undefined') {
            this.setState({
                mobile: window.innerWidth
            });

            window.addEventListener("resize", () => {
                this.setState({
                    mobile: window.innerWidth
                });
            });

            console.log(this.state);
        }
        loadReCaptcha("6Le2asoZAAAAAD15aNFRC_BOttySbziLaTDkMmSD");
        Modal.setAppElement(".kontakt");
    }

    recaptchaLoaded() {
        console.log("Recaptcha loaded");
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
            name: "",
            surname: "",
            email: "",
            phoneNumber: "",
            msg: "",
            isVerified: false,
            isSend: true
        });
        if(typeof document !== 'undefined') {
            document.querySelector(".zaufaliNam").style.zIndex = -10;
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        /* Email test */
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(this.state.email).toLowerCase())) {
            this.setState({
                formError: "Niepoprawny adres email"
            });
            return 0;
        }
        else {
            this.setState({
                formError: ""
            });
        }

        /* Name test */
        if(this.state.name === "") {
            this.setState({
                formError: "Wpisz swoje imię"
            });
            return 0;
        }
        else {
            this.setState({
                formError: ""
            })
        }

        /* Msg test */
        if(this.state.msg === "") {
            this.setState({
                formError: "Zostaw jakąś wiadomość"
            });
            return 0;
        }
        else {
            this.setState({
                formError: ""
            });
        }

        if((this.state.isVerified)&&(this.state.formError === "")) {
            const form = e.target;
            const data = {
                imie: this.state.name,
                nazwisko: this.state.surname,
                telefon: this.state.phoneNumber,
                email: this.state.email,
                wiadomosc: this.state.msg
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
        }
        this.resetState();
    }

    closeModal() {
        this.setState({
            isSend: false
        });

        if(typeof document !== 'undefined') {
            document.querySelector(".zaufaliNam").style.zIndex = 1;
        }
    }

    render() {
        return (<section className="kontakt">
            <Modal className="submitForm" isOpen={this.state.isSend} closeTimeoutMS={500} onRequestClose={() => this.closeModal()} >
                <img className="modalExit" src={require("../../static/img/x.png")} alt="exit" onClick={() => this.closeModal()} />
                <div className="modalInner">
                    <h2>Formularz wysłany!</h2>
                    <h3>Odezwę się do Ciebie jak najszybciej!</h3>
                    <img src={require("../../static/img/okejka.png")} alt="ok" />
                </div>
            </Modal>

            <header className="kontaktHeader">
                <h2>Zostaw kontakt</h2>
                <h3>Wypełnij i wyślij formularz, a ja odezwę się do Ciebie</h3>
            </header>
            <form method="POST" onSubmit={e => this.handleSubmit(e)} action="https://formspree.io/xgengdkz">
                <label htmlFor="name" className="mobileOnly">Twoje imię</label>
                <input type="text" name="name" value={this.state.name} placeholder={this.state.mobile < 900 ? "" : "Imię"} onChange={e => this.handleChange(e)} />
                <label htmlFor="surname" className="mobileOnly">Nazwisko (opcjonalnie)</label>
                <input type="text" name="surname" value={this.state.surname} placeholder={this.state.mobile < 900 ? "" : "Nazwisko (opcjonalnie)"} onChange={e => this.handleChange(e)} />
                <label htmlFor="email" className="mobileOnly">Adres email</label>
                <input type="email" name="email" value={this.state.email} placeholder={this.state.mobile < 900 ? "" : "Adres e-mail"} onChange={e => this.handleChange(e)} />
                <label htmlFor="phoneNumber" className="mobileOnly">Numer telefonu</label>
                <input type="text" name="phoneNumber" value={this.state.phoneNumber} placeholder={this.state.mobile < 900 ? "" : "Numer telefonu"} onChange={e => this.handleChange(e)} />
                <label htmlFor="msg" className="mobileOnly">Treść wiadomości</label>
                <textarea name="msg" value={this.state.msg} placeholder={this.state.mobile < 900 ? "" : "Treść wiadomości"} onChange={e => this.handleChange(e)} />

                <div className="recaptcha">
                    <ReCaptcha
                        sitekey="6Le2asoZAAAAAD15aNFRC_BOttySbziLaTDkMmSD"
                        render="implicit"
                        verifyCallback={this.verifyCallback}
                        onloadCallback={this.recaptchaLoaded}
                    />
                </div>

                { this.state.formError === "" ? "" : <div className="error">{this.state.formError}</div> }

                <button type="submit">
                    Wyślij
                </button>

                <div className="google">
                    <p>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
                </div>
            </form>
        </section>);
    }
}
