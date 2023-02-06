function NavBar({doggos, setSelected}) {
  function handleClick(event) {
    const name = event.target.textContent
    setSelected(doggos.find(doggo => doggo.name === name))
  }
  return (
    <>
      {doggos.map(doggo => {
        return <span key={doggo.id} onClick={handleClick}>{doggo.name}</span>
      })}
    </>
  )
}

export default NavBar;