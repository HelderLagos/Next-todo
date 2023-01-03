import { useState } from "react";

const Idade = () => {
    const [novaIdade, setNovaidade] = useState(20);
    
    const changeAge = () => {
        setNovaidade()
        console.log(setNovaidade)
    }

    // ========================================

    return (        
        <div>
            <p> Idade: {novaIdade} </p>
            <button onClick={changeAge}> Trocar idade </button>
        </div>
    )
};

export default Idade;