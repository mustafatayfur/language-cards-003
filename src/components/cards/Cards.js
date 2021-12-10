import "./Cards.css";
import { categories } from "../../helpers/Data";
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
            <div className="card-over">
              <p>{card.options}</p>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};
export default Cards;