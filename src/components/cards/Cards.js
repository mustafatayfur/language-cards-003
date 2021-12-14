import "./Cards.css";
import { categories } from "../../helpers/Data";
import { useState } from "react"
// console.log(categories);

const Cards = ({toggleShow, setIsvisible, isVisible}) => {
  // const handleClick = (e)=>{
  //   console.log("Click with handleClick from Header");
  
  return (
    
    <div className="container">
      <h1>Languages</h1>
      <div className="card-container" >
        {categories.map((card, index) => {
          return (
          <div className="cards" key={index} onClick={()=>setIsvisible(!isVisible)} >
   
                  {
                    isVisible 
                      ? 
                    <div>
                      <img src={card.img} alt=""/>
                      <p>{card.name}</p> 
                    </div>
                    :
                    <div >
                      <p>{card.options} </p>
                    </div>
                  }
          </div>
          );
        })}
      </div>
    </div>
  );
};
export default Cards;
