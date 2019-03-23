import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {fetchProduct, fetchCategoty, changecategory, chooseitem, fetchback,fetchdeleteitem} from "../../store/actions";
import {NavLink} from "react-router-dom";

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
                                    <p>Category item: {item.category.title}</p>
                                    <p>Item title: {item.title}</p>
                                    <p>Item description: {item.description}</p>
                                    <p>Item price: {item.price}</p>
                                    <NavLink onClick={()=>this.props.fetchback()} exact className='buttonNav' activeClassName='buttonNavActive' to="/">Back</NavLink>
                                    {this.props.user.name === item.userId.username ?  <button id={item._id} onClick={(e)=>this.props.fetchdeleteitem(e,this.props.user.token)}>delete</button> : null}
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
        choose: state.choose,
        user: state.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProduct:(url) => dispatch(fetchProduct(url)),
        fetchCategoty:()=>dispatch(fetchCategoty()),
        changecategory:(e) => dispatch(changecategory(e)),
        chooseitem:(e) => dispatch(chooseitem(e)),
        fetchback:() => dispatch(fetchback()),
        fetchdeleteitem:(e,token) => dispatch(fetchdeleteitem(e,token))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);