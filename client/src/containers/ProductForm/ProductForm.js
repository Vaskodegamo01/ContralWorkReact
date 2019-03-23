import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import axios from '../../axios-shop'


class ProductFrom extends Component {
    state = {
        name: '',
        description: '',
        price: 0,
        image: '',
        category: '',
        categories: []
    };

    componentDidMount() {
        axios.get('categories').then(response=>{
            this.setState({categories: response.data})
        })
    }

    textHandler = event =>{
        this.setState({[event.target.name]: event.target.value})
    };

    fileHandler = event =>{
        console.log(event.target.files);
        this.setState({[event.target.name]: event.target.files[0]})
    };

    submitForm = (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(this.state).forEach(item=>{
            formData.append(item, this.state[item])
        });
        console.log(formData);
    };
    render(){
        return (
            <div className='justify-content-center'>
                <Form as={Col}>
                    <Form.Group controlId="ProductName">
                        <Form.Label>Product name</Form.Label>
                        <Form.Control type="text" name="name" onChange={(e)=>this.textHandler(e)} value={this.state.name} placeholder="Enter product name" />
                    </Form.Group>
                    <Form.Group controlId="Description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name="description" onChange={(e)=>this.textHandler(e)} value={this.state.description} placeholder="Enter description" />
                    </Form.Group>
                    <Form.Group controlId="Price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number"  name="price" onChange={(e)=>this.textHandler(e)} value={this.state.price} placeholder="Enter price" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="Category">
                        <Form.Label>Category</Form.Label>
                        <Form.Control  name="category" onChange={(e)=>this.textHandler(e)} value={this.state.category} as="select">
                            <optgroup>
                                <option>Choose category</option>
                                {this.state.categories.map(category=>{
                                    return(
                                        <option key={category._id} value={category._id}>{category.title}</option>
                                    )
                                })}
                            </optgroup>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="Image">
                        <Form.Label>Image</Form.Label>
                        <Form.Control name="image" type="file" onChange={(e)=>this.fileHandler(e)}/>
                    </Form.Group>
                    <button onClick={(e)=>this.submitForm(e)}>send</button>
                </Form>
            </div>
        )
    }
}

export default ProductFrom;