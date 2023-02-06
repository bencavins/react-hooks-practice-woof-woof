function Doggo({name, isGoodDog, image}) {
  return (
    <>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <button>Good Dog!</button>
    </>
  )
}

export default Doggo;