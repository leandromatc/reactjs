import { useEffect, useState } from "react"

const PokeApi = () => {

    const [pokemon, setPokemon] = useState(null)
    const [id, setId] = useState(1)

    const handleSiguiente = () => {
        setId(id + 1)
    }
    const handleAnterior = () => {
        id > 1 && setId(id - 1)
    }


    useEffect(() => {

        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setPokemon(data)
            })


    }, [id])
    
    return (
        <div>

            <h2>Poke API</h2>
            <hr/>

            <input type="text" />

            <hr/>
            <button onClick={handleAnterior}>ANTERIOR</button>            
            <button onClick={handleSiguiente}>SIGUIENTE</button>            
                <>
                    <h3>{pokemon?.name}</h3>
                    <img src={pokemon?.sprites.front_default} alt={pokemon?.name}/>
                </>
            
        </div>
    )
}

export default PokeApi