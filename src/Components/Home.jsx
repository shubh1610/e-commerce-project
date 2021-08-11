import React,{useContext, useState} from "react";
import { data } from "../product_list";
import { ProductContext } from "./Context";
import Modal from 'react-modal';




function HomePage(props){
    

    const[product,setProduct]=useContext(ProductContext)

    function handleCart(item,index){
        let temp={id:index,name:item.name,price:item.price}

        setProduct((prev) => {
            return[...prev,temp]
        })

        //console.log(product)
    }

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const[value,setValue]=useState({});

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function showPreview(index){

    let temp=data[index]
    setValue(temp)
    
    openModal();


  }

    
    return (
    <>
    <div className="row">
    {data.map((item,index) => {
        return (
            <span>
        <div className="card col-2" key={index} style={{width: '18rem'}}>
        <img onClick={() => {showPreview(index)}} src={item.imageURL} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">Rs {item.price}</p>

          <button disabled={product.find(x=>x.id===index)!==undefined} 
          onClick={() => {handleCart(item,index)}} className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
      </span>);
    })}
    </div>
    <Modal
        isOpen={modalIsOpen}
        
        onRequestClose={closeModal}
        
      >
        <button onClick={closeModal}>close</button>
        
        <div className="card col-2" style={{width: '18rem'}}>
        <img  src={value.imageURL} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{value.name}</h5>
          <p className="card-text">Brand : {value.brandname}</p>
          <p className="card-text">Rating : {value.rating}</p>
          <p className="card-text">Discount : {value.discount}</p>
          <p className="card-text">Rs {value.price}</p>

          <button disabled={product.find(x=>x.name===value.name)!==undefined}
           onClick={() => {handleCart(value,data.indexOf(value))
           closeModal()}} className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
      </Modal>
    
  </>);

}

export default HomePage;