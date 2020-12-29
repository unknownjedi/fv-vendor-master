import React, { Component } from "react";
import { connect } from 'react-redux'
import axios from "axios";


import AddProduct from "./addProduct";
import EditProduct from "./editProduct";


export class ManageProduct extends Component {
    state={
        products:[]
    }
    render() {
        const {products} = this.state;
        return (
            <div>
                <center><h1>Admin Page</h1></center>
                <div className="container admin-cards">
                    <table className="table">
                        <thead>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((i)=>{
                                
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(manageProduct)

