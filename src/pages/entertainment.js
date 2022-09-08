import React, { Component } from "react";
//import './styles/entertainment.css'

class Entertainment extends Component {
    render() {
        return(
            <div className="main">
                <div className="entertainment-display">
                    <div className="display-body">
                        <img src={this.props.img} alt='' />
                        <h2 className="entertainment-h2">{this.props.title}</h2>
                        <p className="entertainment-info">{this.props.paragraph}</p>
                        <a href={this.props.link} target='blank'><div className="button">{this.props.btn}</div></a>
                    </div>
                </div>
            </div>
        )
    }
}

class EntertainmentCards extends Component {
    render() {
        return (
            <>
            <div class='header'>
            <div className="entertainment-banner">
            </div>
                <h1>Entertainment</h1>   
            </div>
            <div className="entertainment">
                <Entertainment
                img='https://filler.jpg'
                title='filler'
                paragraph='filler'
                link='https://filler.com' />

                <Entertainment
                img='https://filler.jpg'
                title='filler'
                paragraph='filler'
                link='https://filler.com' />

                <Entertainment
                img='https://filler.jpg'
                title='filler'
                paragraph='filler'
                link='https://filler.com' />

                <Entertainment
                img='https://filler.jpg'
                title='filler'
                paragraph='filler'
                link='https://filler.com' />
                
                <Entertainment
                img='https://filler.jpg'
                title='filler'
                paragraph='filler'
                link='https://filler.com' />
            </div>

            </>

        )
    }
}

export default (Entertainment, EntertainmentCards);