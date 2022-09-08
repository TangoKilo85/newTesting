import React, { Component } from "react";
//import './styles/foods.css'

class Foods extends Component {
    render() {
        return(
            <div className="main">
                <div className="food-display">
                    <div className="display-body">
                        <img src={this.props.img} alt='' />
                        <h2 className="food-h2">{this.props.title}</h2>
                        <p className="food-info">{this.props.paragraph}</p>
                        <a href={this.props.link} target='blank'><div className="button">{this.props.btn}</div></a>
                    </div>
                </div>
            </div>
        )
    }
}

class FoodsCards extends Component {
    render() {
        return (
            <>
            <div class='header'>
            <div className="food-banner">
            </div>
                <h1>Restuarants and Food</h1>   
            </div>
            <div className="foods">
                <Foods
                img='https://filler.jpg'
                title='filler'
                paragraph='filler'
                link='https://filler.com' />

                <Foods
                img='https://filler.jpg'
                title='filler'
                paragraph='filler'
                link='https://filler.com' />

                <Foods
                img='https://filler.jpg'
                title='filler'
                paragraph='filler'
                link='https://filler.com' />

                <Foods
                img='https://filler.jpg'
                title='filler'
                paragraph='filler'
                link='https://filler.com' />
                
                <Foods
                img='https://filler.jpg'
                title='filler'
                paragraph='filler'
                link='https://filler.com' />
            </div>

            </>

        )
    }
}

export default (Foods, FoodsCards);