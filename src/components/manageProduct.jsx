import React, { Component } from "react";
import { connect } from 'react-redux'
import axios from "axios";

import {loadProduct} from '../store/product/actions';
import {startLoader,stopLoader} from '../store/loader/actions';
import AddProduct from "./addProduct";
import EditProduct from "./editProduct";
import FullPageLoader from './fullPageLoader';
import './manageProduct.css';

var fetchProductsUrl = "https://cors-anywhere.herokuapp.com/http://13.127.249.221:8000/vendor/fetch/products";
var deleteProductUrl = "https://cors-anywhere.herokuapp.com/http://13.127.249.221:8000/vendor/delete/product";
export class ManageProduct extends Component {
    state={
        products:[],
        model:0,
        loading:true
    }
    componentDidMount(){
        this.props.startLoader();
        this.updateState();
    }
    updateState = ()=>{
        this.getProductsList();
    }
    getProductsList = ()=>{
        return new Promise((resolve,reject)=>{
            axios.get(fetchProductsUrl).then((res)=>{
                let products = res.data.products;
                this.setState({products});
                this.props.stopLoader();
                resolve();
                reject("Fetching products failed");
            });
        })
    }
    editProductItem = (product)=>{
        this.props.loadProduct(product);
        this.setState({ model:1 });
        // return new Promise((resolve,reject)=>{
        //     axios.post(fetchProductsUrl,product,{}).then((res)=>resolve());
        // })
    }
    removeProductItem = (product)=>{
        return new Promise((resolve,reject)=>{
            axios.post(deleteProductUrl,product,{}).then((res)=>resolve());
        })
    }
        handleAddProduct=()=>{
            this.setState({model:2})
        }
      handleModelClose = () => {
          this.updateState();
          this.props.startLoader();
        this.setState({ product: null,model:0 });
      };
    
    render() {
        const {products} = this.state;
        return (
            <div>
                <center><h1>Manage Products</h1></center>
                <div className="container">
                    <br/>
                    <span   >
                        <button
                        className="btn btn-primary btn-sm"
                        onClick={this.handleAddProduct}
                        >
                        Add New Product
                        </button>
                    </span>
                    <br/>
                    <br/>
                    {products && products.map((product,i)=>{
                        return <div className="row" key={i}>
                            <div className="product-image col-4">
                                <img src={product.product_thumbnail} alt={product.product_title}/>
                            </div>
                            <div className="product-details col-8">
                                <div className="product-name">{product["product_title"]}</div>
                                <br/>
                                <br/>
                                <div className="product-rate">
                                    <div className="final-rate">
                                        ₹ {product["product_price"]["selling_price"]}
                                        {"   "}
                                    </div>
                                    {product["product_price"]["discount"] > 0 && (
                                        <div className="offer-rate">
                                        <div className="original-rate">
                                            ₹ {product["product_price"]["mrp"]}
                                        </div>
                                        <div className="discount-percent">
                                            ({product["product_price"]["discount"]}% discount)
                                        </div>
                                        </div>
                                    )}
                                </div>
                                <br/>
                                <br/>
                                <div className="manage-btns">
                                    <span>
                                        <button
                                        className="btn btn-secondary btn-sm"
                                        onClick={() => this.editProductItem(product)}
                                        >
                                        Edit
                                        </button>
                                    </span>
                                    <span>
                                        <button
                                        className="btn btn-danger btn-sm"
                                        onClick={() => this.removeProductItem(product)}
                                        >
                                        Remove
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    })}
                    
                    
                </div>
                {this.state.model==1  && (
                    <EditProduct product={this.state.product} onClose={this.handleModelClose}/>
                )}
                {this.state.model==2  && (
                    <AddProduct  onClose={this.handleModelClose}/>
                )}

                {this.state.loading && <FullPageLoader />}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { product,loading } = state;
    return { product,loading };
  };
  
  const mapDispatchToProps = (dispatch) => ({
    loadProduct: (product) => dispatch(loadProduct(product)),
    startLoader: ()=>dispatch(startLoader()),
    stopLoader: ()=>dispatch(stopLoader()),
  });

export default connect(mapStateToProps, mapDispatchToProps)(ManageProduct)

