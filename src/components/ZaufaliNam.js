import React from "react"

import ReactCardCarousel from 'react-card-carousel';

export default class ZaufaliNam extends React.Component {

    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.afterChange = this.afterChange.bind(this);
    }

    componentDidMount() {
        if(typeof document !== 'undefined') {
            document.querySelector("section.zaufaliNam>div>div>div:nth-child(2)").classList.add('opacity');
            document.querySelector("section.zaufaliNam>div>div>div:nth-child(3)").classList.add('opacity');
        }
    }

    next() {
        this.Carousel.next();
    }

    prev() {
        this.Carousel.prev();
    }

    static get CONTAINER_STYLE() {
        return {
            position: "relative",
            height: "500px",
            width: "100%",
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "middle",
            marginTop: "80px"
        };
    }

    static get CARD_STYLE() {
        return {
            height: "400px",
            width: "25vw",
            paddingTop: "80px",
            textAlign: "center",
            background: "#f6f6f6",
            color: "#363636",
            fontFamily: "sans-serif",
            fontSize: "12px",
            textTransform: "uppercase",
            borderRadius: "10px",
            boxSizing: "border-box"
        };
    }

    afterChange() {
        if(typeof document !== 'undefined') {
            if(this.Carousel.getCurrentIndex() === 0) {
                document.querySelector(`section.zaufaliNam>div>div>div:nth-child(2)`).classList.add("opacity");
                document.querySelector(`section.zaufaliNam>div>div>div:nth-child(3)`).classList.add("opacity");
                document.querySelector(`section.zaufaliNam>div>div>div:nth-child(1)`).classList.remove("opacity");
            }
            else if(this.Carousel.getCurrentIndex() === 1) {
                document.querySelector(`section.zaufaliNam>div>div>div:nth-child(1)`).classList.add("opacity");
                document.querySelector(`section.zaufaliNam>div>div>div:nth-child(3)`).classList.add("opacity");
                document.querySelector(`section.zaufaliNam>div>div>div:nth-child(2)`).classList.remove("opacity");
            }
            else {
                document.querySelector(`section.zaufaliNam>div>div>div:nth-child(2)`).classList.add("opacity");
                document.querySelector(`section.zaufaliNam>div>div>div:nth-child(1)`).classList.add("opacity");
                document.querySelector(`section.zaufaliNam>div>div>div:nth-child(3)`).classList.remove("opacity");
            }
        }
    }

    render() {
        return (
            <section className="zaufaliNam">
                <h2>Zaufali nam</h2>
                <div style={ZaufaliNam.CONTAINER_STYLE}>
                    <button className="cardBtn prevBtn" onClick={this.prev}>&lt;</button>
                    <ReactCardCarousel ref={ Carousel => this.Carousel = Carousel } autoplay={false} autoplay_speed={2500} spread="wide" afterChange={this.afterChange}>
                        <div style={ZaufaliNam.CARD_STYLE}>
                            <div className="imageSection">
                                <img src={require("../../static/img/tesla-logo.jpg")} alt="tesla" />
                            </div>
                            <div className="textSection">
                                <p>Współpraca z Panem Lukaszem to czysta przyjemność. Spoko z niego ziomek i ogólnie pozdro z fartem.</p>
                                <div className="podpis">
                                    <h5>Steve Jobs</h5>
                                    <h6>CEO firmy Apple</h6>
                                </div>
                            </div>
                        </div>
                        <div style={ZaufaliNam.CARD_STYLE}>
                            <div className="imageSection">
                                <img src={require("../../static/img/tesla-logo.jpg")} alt="tesla" />
                            </div>
                            <div className="textSection">
                                <p>Współpraca z Panem Lukaszem to czysta przyjemność. Spoko z niego ziomek i ogólnie pozdro z fartem.</p>
                                <div className="podpis">
                                    <h5>Elon Musk</h5>
                                    <h6>CEO firmy Tesla</h6>
                                </div>
                            </div>
                        </div>
                        <div style={ZaufaliNam.CARD_STYLE}>
                            <div className="imageSection">
                                <img src={require("../../static/img/tesla-logo.jpg")} alt="tesla" />
                            </div>
                            <div className="textSection">
                                <p>Współpraca z Panem Lukaszem to czysta przyjemność. Spoko z niego ziomek i ogólnie pozdro z fartem.</p>
                                <div className="podpis">
                                    <h5>Steve Jobs</h5>
                                    <h6>CEO firmy Apple</h6>
                                </div>
                            </div>
                        </div>
                    </ReactCardCarousel>
                    <button className="cardBtn nextBtn" onClick={this.next}>></button>
                </div>
            </section>
        );
    }

};
