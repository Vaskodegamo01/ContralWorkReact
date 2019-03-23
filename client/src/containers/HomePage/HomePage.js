import React, {Component, Fragment} from 'react';
import axios from '../../axios-shop';

import Header from '../../components/UI/Header/Header';

class HomePage extends Component {

    state = {
        products: null
    };

    componentDidMount() {
        axios.get('products').then(response => {
            this.setState({
                products: response.data
            })
        })
    }

    render() {
        console.log('home render')
        const url = 'http://localhost:8000/uploads/';
        return (
            <Fragment>
                {this.state.products && this.state.products.map((item, index) => {
                    return (
                        <div key={index}>
                            <img src={url + item.image} alt=""/>
                            <span>{item.name}</span>
                            <span>{item.price} USD</span>
                        </div>
                    )
                })}
            </Fragment>
        )
    }
}

export default HomePage;