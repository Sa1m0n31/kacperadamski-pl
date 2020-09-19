import React from "react"

import ReactCardCarousel from 'react-card-carousel';

import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';

export default class ZaufaliNam extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            slider1: React.createRef(),
            slider2: React.createRef(),
            slider3: React.createRef(),
            currentSlide: 1
        };
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.afterChange = this.afterChange.bind(this);
        this.sliderBack = this.sliderBack.bind(this);
        this.sliderNext = this.sliderNext.bind(this);
        this.cssStyles = this.cssStyles.bind(this);
    }

    componentDidMount() {
        if((typeof document !== 'undefined')&&(document.querySelector("section.zaufaliNam>div>div>div:nth-child(3)") !== null)&&(this.state.width > 900)) {
            document.querySelector("section.zaufaliNam>div>div>div:nth-child(2)").classList.add('opacity');
            document.querySelector("section.zaufaliNam>div>div>div:nth-child(3)").classList.add('opacity');
        }
        if(typeof window !== 'undefined') {
            this.setState({
                width: window.innerWidth
            });

            window.addEventListener("resize", () => {
                this.setState({
                    width: window.innerWidth
                });
            });
        }
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

    static get EMPTY_STYLE() {
        return {
            position: "relative"
        };
    };

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
            boxSizing: "border-box",
            cursor: "pointer"
        };
    }

    cssStyles() {
        console.log(this.Carousel.getCurrentIndex());
        switch(this.Carousel.getCurrentIndex()+2)
        {
            case 0:
                this.state.slider1.current.style.cursor = "default";
                this.state.slider2.current.style.cursor = "pointer";
                this.state.slider3.current.style.cursor = "pointer";
                break;
            case 1:
                this.state.slider2.current.style.cursor = "default";
                this.state.slider1.current.style.cursor = "pointer";
                this.state.slider3.current.style.cursor = "pointer";
                break;
            case 2:
                this.state.slider3.current.style.cursor = "default";
                this.state.slider1.current.style.cursor = "pointer";
                this.state.slider2.current.style.cursor = "pointer";
                break;
            default:
                break;
        }
    }

    next() {
        this.Carousel.next();
        this.cssStyles();
    }

    prev() {
        this.Carousel.prev();
        this.cssStyles();
    }

    afterChange() {
        if((typeof document !== 'undefined')&&(document.querySelector(`section.zaufaliNam>div>div>div:nth-child(2)`) !== null)&&(this.state.width > 900)) {
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

    sliderNext() {
        if(typeof document !== 'undefined') {
            if(this.state.currentSlide === 3) {
                this.setState({
                    currentSlide: 1
                });
            }
            else {
                this.setState((prevState) => {
                    return {
                        currentSlide: prevState.currentSlide + 1
                    }
                })
            }
        }
    }


    sliderBack() {
        if(this.state.currentSlide === 1) {
            this.setState({
                currentSlide: 3
            });
        }
        else {
            this.setState((prevState) => {
                return {
                    currentSlide: prevState.currentSlide - 1
                }
            })
        }
    }

    render() {
        return (
            <section className="zaufaliNam">
                <h2>Zaufali nam</h2>
                <div style={this.state.width > 900 ? ZaufaliNam.CONTAINER_STYLE : ZaufaliNam.EMPTY_STYLE}>

                    {this.state.width > 900 ? (<button className="cardBtn prevBtn" onClick={this.prev}>&lt;</button>) : ""}

                    {this.state.width > 900 ? (
                        <ReactCardCarousel className="desktop" ref={ Carousel => this.Carousel = Carousel } autoplay={false} autoplay_speed={2500} spread="wide" afterChange={this.afterChange}>
                        <div style={ZaufaliNam.CARD_STYLE} ref={this.state.slider1}>
                            <div className="imageSection">
                                <img src={require("../../static/img/tesla-logo.jpg")} alt="tesla" />
                            </div>
                            <div className="textSection">
                                <p>Współpraca z Panem Lukaszem to czysta przyjemność. Spoko z niego ziomek i ogólnie pozdro z fartem.</p>
                                <div className="podpis">
                                    <h5>1</h5>
                                    <h6>CEO firmy Apple</h6>
                                </div>
                            </div>
                        </div>
                        <div style={ZaufaliNam.CARD_STYLE} ref={this.state.slider2}>
                            <div className="imageSection">
                                <img src={require("../../static/img/tesla-logo.jpg")} alt="tesla" />
                            </div>
                            <div className="textSection">
                                <p>Współpraca z Panem Lukaszem to czysta przyjemność. Spoko z niego ziomek i ogólnie pozdro z fartem.</p>
                                <div className="podpis">
                                    <h5>2</h5>
                                    <h6>CEO firmy Tesla</h6>
                                </div>
                            </div>
                        </div>
                        <div style={ZaufaliNam.CARD_STYLE} ref={this.state.slider3}>
                            <div className="imageSection">
                                <img src={require("../../static/img/tesla-logo.jpg")} alt="tesla" />
                            </div>
                            <div className="textSection">
                                <p>Współpraca z Panem Lukaszem to czysta przyjemność. Spoko z niego ziomek i ogólnie pozdro z fartem.</p>
                                <div className="podpis">
                                    <h5>3</h5>
                                    <h6>CEO firmy Apple</h6>
                                </div>
                            </div>
                        </div>
                    </ReactCardCarousel>) : (<div className="mobileSlider">
                        <div className="arrow leftArrow" onClick={this.sliderBack}>
                            <img src={require("../../static/img/right.png")} alt="right-arrow" />
                        </div>

                        <div className={this.state.currentSlide === 1 ? "slider active" : "slider"}>
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

                        <div className={this.state.currentSlide === 2 ? "slider active" : "slider"}>
                            <div className="imageSection">
                                <img src={require("../../static/img/tesla-logo.jpg")} alt="tesla" />
                            </div>
                            <div className="textSection">
                                <p>Współpraca z Panem Mateuszem to czysta przyjemność. Spoko z niego ziomek i ogólnie pozdro z fartem.</p>
                                <div className="podpis">
                                    <h5>Elon Musk</h5>
                                    <h6>CEO firmy Tesla</h6>
                                </div>
                            </div>
                        </div>

                        <div className={this.state.currentSlide === 3 ? "slider active" : "slider"}>
                            <div className="imageSection">
                                <img src={require("../../static/img/apple-logo.png")} alt="tesla" />
                            </div>
                            <div className="textSection">
                                <p>Współpraca z Panem Szymonem to czysta przyjemność. Spoko z niego ziomek i ogólnie pozdro z fartem.</p>
                                <div className="podpis">
                                    <h5>Elon Musk</h5>
                                    <h6>CEO firmy Tesla</h6>
                                </div>
                            </div>
                        </div>

                        <div className="arrow rightArrow" onClick={this.sliderNext}>
                            <img src={require("../../static/img/right.png")} alt="right-arrow" />
                        </div>
                    </div>)}

                    {this.state.width > 900 ? (<button className="cardBtn nextBtn" onClick={this.next}>></button>) : ""}
                </div>
            </section>
        );
    }

};
