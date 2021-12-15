function Frontcard({ img, name }) {
    return (
      <div>
        <img src={img} alt='' />
        <h4>{name}</h4>
      </div>
    );
  }
  export default Frontcard;