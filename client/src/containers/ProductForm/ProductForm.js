import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import {connect} from "react-redux";
import {productinputchangefile, productinputchangetext, fetchCategoty, fetchSendProductForm} from "../../store/actions";



class ProductFrom extends Component {
    componentDidMount() {
        this.props.fetchCategoty();
    }

    data = () => {
        const formData = new FormData();
        Object.keys(this.props).forEach(item=>{
            if(item !== "categories" && item !== "user" ) formData.append(item, this.props[item])
        });
        console.log(formData);
        return formData
    };
    render(){
        return (
            <div className='justify-content-center'>
                <Form as={Col}>
                    <Form.Group controlId="ProductName">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title" onChange={(e)=>this.props.productinputchangetext(e)} defaultValue={this.props.title} placeholder="Enter product name" />
                    </Form.Group>
                    <Form.Group controlId="Description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" onChange={(e)=>this.props.productinputchangetext(e)} defaultValue={this.props.description} placeholder="Enter description" />
                    </Form.Group>
                    <Form.Group controlId="Price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number"  name="price" onChange={(e)=>this.props.productinputchangetext(e)} defaultValue={this.props.price} placeholder="Enter price" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="Category">
                        <Form.Label>Category</Form.Label>
                        <Form.Control  name="category" onChange={(e)=>this.props.productinputchangetext(e)} defaultValue={this.props.category} as="select">
                            <optgroup>
                                <option>Choose category</option>
                                {this.props.categories.map(category=>{
                                    return(
                                        <option key={category._id} value={category._id}>{category.title}</option>
                                    )
                                })}
                            </optgroup>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="Image">
                        <Form.Label>Image</Form.Label>
                        <Form.Control name="image" type="file" onChange={(e)=>this.props.productinputchangefile(e)}/>
                    </Form.Group>
                    <button onClick={(e)=>this.props.fetchSendProductForm(e, "products", this.data(), this.props.user.token, this.props.history)}>send</button>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        title: state.title,
        description: state.description,
        price: state.price,
        image: state.image,
        category: state.category,
        categories: state.categories,
        user: state.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        productinputchangetext:(e) => dispatch(productinputchangetext(e)),
        productinputchangefile:(e) => dispatch(productinputchangefile(e)),
        fetchCategoty:() => dispatch(fetchCategoty()),
        fetchSendProductForm:(e,url,data,token,history) => dispatch(fetchSendProductForm(e,url,data,token,history))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductFrom);