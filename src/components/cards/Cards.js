import "./Cards.css";
import { categories } from "../../helpers/Data";
import { useState } from "react"
import Card from "../card/Card";
// console.log(categories);


const Cards = ({toggleShow, setIsvisible, isVisible}) => {
  // const handleClick = (e)=>{
  //   console.log("Click with handleClick from Header");
  
  return (
    
    <div className="container">
      <h1>Languages</h1>
      <Card 
        toggleShow={toggleShow}
        isVisible = {isVisible}
        categories = {categories}
      />
       
    </div>
  );
};
export default Cards;

// onClick={()=>setIsvisible(!isVisible)}
