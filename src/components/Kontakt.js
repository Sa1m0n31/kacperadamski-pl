import React from 'react';

export default class Kontakt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            surname: "",
            email: "",
            phoneNumber: "",
            msg: "",
            mobile: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if(typeof window !== 'undefined') {
            window.addEventListener("load", () => {
                this.setState({
                    mobile: window.innerWidth
                });
            });

            window.addEventListener("resize", () => {
                this.setState({
                    mobile: window.innerWidth
                });
            });
            console.log(this.state.mobile);
    }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (<section className="kontakt">
            <header className="kontaktHeader">
                <h2>Zostaw kontakt</h2>
                <h3>Wypełnij i wyślij formularz, a ja odezwę się do Ciebie</h3>
            </header>
            <form method="POST" onSubmit={e => this.handleSubmit(e)}>
                <label htmlFor="name" className="mobileOnly">Twoje imię</label>
                <input type="text" name="name" placeholder={this.state.mobile < 900 ? "" : "Imię"} />
                <label htmlFor="surname" className="mobileOnly">Nazwisko (opcjonalnie)</label>
                <input type="text" name="surname" placeholder={this.state.mobile < 900 ? "" : "Nazwisko (opcjonalnie)"} />
                <label htmlFor="email" className="mobileOnly">Adres email</label>
                <input type="email" name="email" placeholder={this.state.mobile < 900 ? "" : "Adres e-mail"} />
                <label htmlFor="phoneNumber" className="mobileOnly">Numer telefonu</label>
                <input type="text" name="phoneNumber" placeholder={this.state.mobile < 900 ? "" : "Numer telefonu"} />
                <label htmlFor="msg" className="mobileOnly">Treść wiadomości</label>
                <textarea name="msg" placeholder={this.state.mobile < 900 ? "" : "Treść wiadomości"} />
                <button type="submit">
                    Wyślij
                </button>
            </form>
        </section>);
    }
}
