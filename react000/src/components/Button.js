
const Button = () => {
    const HandleClick = () =>{
        console.log()

}
return (
<div>
        <button onClick={HandleClick}>Evento de Click </button>
<hr/>
        <button onClick={()=> console.log("Clicou de novo!")}> Evento de doidera </button>
    
</div>
)
}

export default Button