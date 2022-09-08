import React, { Component } from "react";
//import './styles/historical.css'

class Historical extends Component {
    render() {
        return(
            <div className="main">
                <div className="historical-display">
                    <div className="display-body">
                        <img src={this.props.img} alt='' />
                        <h2 className="historical-h2">{this.props.title}</h2>
                        <p className="historical-info">{this.props.paragraph}</p>
                        <a href={this.props.link} target='blank'><div className="button">{this.props.btn}</div></a>
                    </div>
                </div>
            </div>
        )
    }
}

class HistoricalCards extends Component {
    render() {
        return (
            <>
            <div class='header'>
            <div className="historical-banner">
            </div>
                <h1>Arts, Musuems, and History</h1>   
            </div>
            <div className="historical">
                <Historical
                img='https://filler.jpg'
                title='filler'
                paragraph='filler'
                link='https://filler.com' />

                <Historical
                img='https://filler.jpg'
                title='filler'
                paragraph='filler'
                link='https://filler.com' />

                <Historical
                img='https://filler.jpg'
                title='filler'
                paragraph='filler'
                link='https://filler.com' />

                <Historical
                img='https://filler.jpg'
                title='filler'
                paragraph='filler'
                link='https://filler.com' />
                
                <Historical
                img='https://filler.jpg'
                title='filler'
                paragraph='filler'
                link='https://filler.com' />
            </div>

            </>

        )
    }
}

export default (Historical, HistoricalCards);