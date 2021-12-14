import React from 'react'

const Card = ({toggleShow, isVisible, categories}) => {
    return (
        <div className="card-container" >
        {categories.map((card, index) => {
          return (
          <div className="cards" key={index} onClick={toggleShow}>
                {
                    isVisible 
                      ? 
                    <div>
                        <img src={categories.img} alt=""/>
                        <p>{categories.name}</p> 
                    </div>
                        :
                    <div >
                        <p>{categories.options} </p>
                    </div>
                }
    
                  
          </div>
          );
        })}
      </div>
    )
}

export default Card;

// <div onClick={toggleShow}>
//         {
//             isVisible 
//               ? 
//             <div>
//               <img src={categories.img} alt=""/>
//               <p>{categories.name}</p> 
//             </div>
//             :
//             <div >
//               <p>{categories.options} </p>
//             </div>
//           }
//         </div>
