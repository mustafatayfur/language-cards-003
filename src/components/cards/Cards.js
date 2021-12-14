import "./Cards.css";
import { categories } from "../../helpers/Data";
import { useState } from "react"
// console.log(categories);

const Cards = () => {
  // const handleClick = (e)=>{
  //   e.preventDefault();
  const [isVisible, setIsvisible] = useState(false);
  
  return (
    
    <div className="container">
      <h1>Languages</h1>
      <div className="card-container">
      {categories.map((card, index) => {
        return (
          <div className="cards" key={index} onClick={()=>setIsvisible(!isVisible)}>
            
             {
               isVisible 
               ? 
               <div>
                  <img src={card.img} alt=""/>
                  <p>{card.name}</p> 
               </div>
                :
               <div className="card-over">
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


