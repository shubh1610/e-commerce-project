import React, { useContext, useEffect, useState } from "react";

import {ProductContext} from "./Context"
import Modal from 'react-modal';

function Cart(){

    

const [modalIsOpen, setIsOpen] = React.useState(false);
const[sum,setSum]=useState(0);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
   const[product,setProduct]=useContext(ProductContext);

   useEffect(() => {
       let temp=0;
       for(let i=0;i<product.length;i++){
           temp+=parseInt(product[i].price)

           }

        setSum(temp)
   },[product])

    console.log(product)

    return(
        <>
        {sum==0 && <h1>Cart is Empty!!</h1>}
        <table><tbody>{product.map((item,index) => {
            return(<tr><td><h3>{item.name}: </h3></td>
                <td><h2> Rs. {item.price}</h2></td>
                <td><button onClick={() => {
                    setProduct((prev) => {
                        
                        return(prev.filter(x => x.id!=item.id))
                    })
                }}>X</button></td></tr>)
        })}
        {sum>0 &&<tr><td>Total</td><td><h2>Rs. {sum}</h2></td></tr>}
        {sum>0 &&<tr><td><button onClick={openModal}>Proceed</button></td></tr>}
        </tbody></table>
        <Modal
        isOpen={modalIsOpen}
        
        onRequestClose={closeModal}
        
      >
        <h2>Place Order</h2>
        <button onClick={closeModal}>close</button>
        
        <form>
        <div className="row mb-3">
          <div className="col-sm-10">
            <input type="text" placeholder="Phone" name="phoneNumber" className="form-control" id="inputEmail3"/>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10">
            <input  type="text" placeholder="First Name" name="firstName" className="form-control" id="inputPassword3"/>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10 ">
           <input  type="text" placeholder="Second Name" name="lastName" className="form-control" type="text" id="gridCheck1"/>
            <div className="row mb-3">
          <div className="col-sm-10">
            <input type="text" placeholder="Address" name="address"  className="form-control" id="inputPassword3"/>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-10">
            <input type="text" placeholder="Email" name="email"  className="form-control" id="inputPassword3"/>
          </div>
        </div>
          </div>
        </div>
        <button onClick={() => {closeModal()}} type="submit"  className="btn btn-primary">Buy Now</button>
      </form>
      </Modal>
    
    
    </>);
}

export default Cart;