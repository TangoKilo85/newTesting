import React, { Component } from "react";
//import './styles/brewsbars.css'

class Brewsbars extends Component {
    render() {
        return(
            <div className="main">
                <div className="bar-display">
                    <div className="display-body">
                        <img src={this.props.img} alt='' />
                        <h2 className="bar-h2">{this.props.title}</h2>
                        <p className="bar-info">{this.props.paragraph}</p>
                        <a href={this.props.link} target='blank'><div className="button">{this.props.btn}</div></a>
                    </div>
                </div>
            </div>
        )
    }
}

class BrewbarsCards extends Component {
    render() {
        return (
            <>
            <div class='header'>
            <div className="bars-banner">
            </div>
                <h1>Breweries and Bars</h1>   
            </div>
            <div className="brewbars">
                <Brewsbars
                img='https://filler.jpg'
                title='filler'
                paragraph='filler'
                link='https://filler.com' />

                <Brewsbars
                img='https://filler.jpg'
                title='filler'
                paragraph='filler'
                link='https://filler.com' />

                <Brewsbars
                img='https://filler.jpg'
                title='filler'
                paragraph='filler'
                link='https://filler.com' />

                <Brewsbars
                img='https://filler.jpg'
                title='filler'
                paragraph='filler'
                link='https://filler.com' />
                
                <Brewsbars
                img='https://filler.jpg'
                title='filler'
                paragraph='filler'
                link='https://filler.com' />
            </div>

            </>

        )
    }
}

export default (Brewsbars, BrewbarsCards);