import React from 'react';

export default class Kontakt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            surname: "",
            email: "",
            phoneNumber: "",
            msg: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                <input type="text" name="name" placeholder="Imię" />
                <input type="text" name="surname" placeholder="Nazwisko (opcjonalnie)" />
                <input type="email" name="email" placeholder="Adres e-mail" />
                <input type="text" name="phoneNumber" placeholder="Numer telefonu (opcjonalnie)" />
                <textarea name="msg" placeholder="Treść wiadomości" />
                <button type="submit">
                    <div id="translate" />
                    <a>Wyślij</a>
                </button>
            </form>
        </section>);
    }
}
