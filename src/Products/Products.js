import React from "react";
import {connect} from "react-redux"
const images = importAll(require.context('../Resources/images/Products', false, /\.(png|jpg|svg)$/));

class Products extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }

    componentDidMount=()=>{
		const {props:{reduxDispatch, reduxState}} = this;
        if(reduxState.products.length === 0){
			reduxDispatch({type:'FETCH_DATA'});
		}
    }

    addToCart=(cartItem)=>{
        const {props:{reduxDispatch}} = this;
        reduxDispatch({type:'ADD_ITEM_TO_CART', payload:cartItem});
    }

    renderProducts=()=>{
		const {props:{reduxState}} = this;

        return(<div style={{columnCount:4}}>
            {reduxState.products.length>0 &&  reduxState.products.map((item, index)=>{
                return(
                    <div key={index} className="product-cls">
                        <img width={250} height={150} style={{marginBottom:'20px'}} alt="" src={images[index]}></img>
                        <div style={{marginBottom:'20px', lineHeight:'20px'}}>{item.name}</div>
                        <div style={{color:'#F57224', marginBottom:'20px', fontWeight:'bold'}}>{`SGD ${item.cost}`}</div>
                        <button className='addto-cart-btn-cls' onClick={this.addToCart.bind(this, item)}>AddToCart</button>
                    </div>
                )
            })
        }</div>);
    }

    render(){
        const products = this.renderProducts();
         return(
            <div style={{ padding: '15px 20px', background:'#c2c5c7'}}>
                {products}
            </div>
        )
    }
}

function importAll(context) {
    return context.keys().map(context);
}

const mapStateToProps=(state)=>{
    return {reduxState : state};
}

const mapDispathToProps=(dispatch)=>{
    return {reduxDispatch: dispatch};
}


export default connect(mapStateToProps, mapDispathToProps)(Products);

