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
            isSend: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
        this.resetState = this.resetState.bind(this);
        if(typeof window !== 'undefined') {
            this.setState({
                mobile: window.innerWidth
            });
        }
    }

    componentDidMount() {
        if(typeof window !== 'undefined') {
            window.addEventListener("load", () => {
                this.setState({
                    mobile: 1600
                });
            });

            window.addEventListener("resize", () => {
                this.setState({
                    mobile: window.innerWidth
                });
            });

            console.log(this.state);
        }
        loadReCaptcha("6Le2asoZAAAAAD15aNFRC_BOttySbziLaTDkMmSD");
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
        console.log("HI!");
        this.setState({
            name: "",
            surname: "",
            email: "",
            phoneNumber: "",
            msg: "",
            isVerified: false,
            isSend: true
        });
        console.log(this.state);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        if(this.state.isVerified) {
            const form = e.target;
            const data = {
                imie: this.state.name,
                nazwisko: this.state.surname,
                telefon: this.state.phoneNumber,
                email: this.state.email,
                wiadomosc: this.state.msg
            };
            console.log(data);
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

    render() {
        return (<section className="kontakt">
            <Modal isOpen={this.state.isSend} closeTimeoutMS={500} onRequestClose={() => { this.setState({ isSend: false }) }} >
                <h1>Dzięki za kontakt!</h1>
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
