function Info({ options }) {
    return (
      <ul className='info'>
        {options.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  }

 export default Info; 