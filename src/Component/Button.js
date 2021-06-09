const  Button = ({handleClick, btnName, icon}) => {

  return (
    <>
      <button className="btn" onClick={handleClick}> { btnName } <i className={icon}></i> </button>
    </>

  )

}


export default Button