import { Grid } from '@material-ui/core';
import React,{useState,useEffect} from 'react'
import { Link,useHistory } from 'react-router-dom';
import { connect,useDispatch } from 'react-redux';
import {addToCart} from '../../actions/productActions'
//import SearchFilter from '../filters/SearchFilter';

const ProductList=(props)=> {
    const [product,setProduct] = useState([])
    const [filterProduct,setFilterProduct] = useState([])
    const history = useHistory()
    const dispatch = useDispatch()
    useEffect(() => {
        console.log("mera")
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json => {
            setProduct(json)
            setFilterProduct(json)}
        )
    }, [])

    const searchData = (e)=>{
            console.log(e.target.value)
                const filteredData =product.filter(element => {
                  return element.title.toLowerCase().includes(e.target.value.toLowerCase());
    })
    setFilterProduct(filteredData)
}
   const addtoCart = (item) =>{

    dispatch(addToCart(item));
          history.push("/carts")
   } 

    return (
        <div>
             <div className="product">
                    <div className="container">
                        <div className="spec ">
                            <h3>Products</h3>
                            <div className="ser-t">
                                <b />
                                <span><i /></span>
                                <b className="line" />
                            </div>
                        </div>
                        <div>
                          <input type="text" placeholder="search" onChange={(e) => searchData(e)} />
                        </div>
                                </div>
                            </div>
                            {
                         filterProduct?.map((prod)=>{
                             return(
                     
                <Grid spacing={1} className="con-w3l agileinf">
                   <Grid item xs={12} sm={6} md={3} lg={3} className="pro-1">
                 
                                <div className="col-m">
                                    <Link to="#" data-toggle="modal" data-target="#myModal1" className="offer-img">
                                        <img src={prod.image} className="img-responsive" alt="" />
                                    </Link>
                                    <div className="mid-1">
                                        <div className="women">
                                            <h6><Link to="/">{prod.title}</Link></h6>
                                        </div>
                                        <div className="mid-2">
                                            <p><label>{prod.price}</label></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <div className="clearfix" />
                                        </div>
                                        <div className="add">
                                            <button className="btn btn-danger my-cart-btn my-cart-b" data-id={24} data-name="Wheat" data-summary="summary 24" data-price={6.00} data-quantity={1} data-image="images/of24.png" onClick={() => addtoCart(prod)} >Add to Cart</button>
                                        </div>
                                    </div>
                            </div>
                    </Grid>
                </Grid>
                )
            })
        }
            
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartProps: state.cartProduct
});

export default connect(mapStateToProps)(ProductList);
// export default ProductList
