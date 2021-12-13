import "./Cards.css";
import { categories } from "../../helpers/Data";
import { useState } from "react"
// console.log(categories);

const Cards = () => {
  
  
  return (
    
    <div className="container">
      <h1>Languages</h1>
      <div className="card-container">
      {categories.map((card, index) => {
        return (
          <div className="cards" key={index}>
            <img src={card.img} alt=""/>
            <p>{card.name}</p>
           
             {
               isVisible && <div className="card-over">

               <p> {card.options}</p>
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
// <div key={name} className="card" onClick={() => setIsvisible(!isVisible)}>
//         {isVisible ? (
//           <Frontcard name={name} img={img} />
//         ) : (
//           <Info options={options} />
//         )}
//       </div>

// const [isVisible, setIsvisible] = useState(true);

// function Info({ options }) {
//   return (
//     <ul className="info">
//       {card.map((item, index) => (
//         <li key={index}>{item}</li>
//       ))}
//     </ul>
//   );
// }
// function Frontcard({ img, name }) {
//   return (
//     <div>
//       <img src={img} alt="" />
//       <h4>{name}</h4>
//     </div>
//   );
// }
