import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {fetchProduct,fetchCategoty,changecategory,chooseitem} from "../../store/actions";



class HomePage extends Component {

    componentDidMount() {
        this.props.fetchProduct("products");
        this.props.fetchCategoty();
    }

    render() {
        const url = 'http://localhost:8000/uploads/';
        if (this.props.choose !== "") {
            return (
                <Fragment>
                    {this.props.products && this.props.products.map((item, index) => {
                        if (this.props.choose === item._id) {
                            return (
                                <div key={index}>
                                    <img src={url + item.image} alt=""/>
                                    <span>{item.title}</span>
                                    <span>{item.price} USD</span>
                                </div>
                            )
                        }
                    })
                    }
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <div>
                        <select name="category" onChange={(event) => this.props.changecategory(event)}>
                            <option value="">Choose category</option>
                            {this.props.categories.map(category => {
                                return (
                                    <option key={category._id} value={category._id}>{category.title}</option>
                                )
                            })}
                        </select>
                    </div>
                    {this.props.products && this.props.products.map((item, index) => {
                        if (this.props.currentcategory !== "") {
                            if (this.props.currentcategory === item.category._id) {
                                return (
                                    <div key={index}>
                                        <img src={url + item.image} alt=""/>
                                        <span>{item.title}</span>
                                        <span>{item.price} USD</span>
                                    </div>
                                )
                            }
                        } else {
                            return (
                                <div key={index} id={item._id} onClick={(e) => this.props.chooseitem(e)}>
                                    <img src={url + item.image} alt=""/>
                                    <span>{item.title}</span>
                                    <span>{item.price} USD</span>
                                </div>
                            )
                        }
                    })}
                </Fragment>
            )}
    }
}
const mapStateToProps = (state)=>{
    return{
        products: state.products,
        categories: state.categories,
        currentcategory: state.currentcategory,
        choose: state.choose
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProduct:(url) => dispatch(fetchProduct(url)),
        fetchCategoty:()=>dispatch(fetchCategoty()),
        changecategory:(e) => dispatch(changecategory(e)),
        chooseitem:(e) => dispatch(chooseitem(e))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);