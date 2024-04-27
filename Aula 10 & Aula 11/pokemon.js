const axios = require('axios')

// Usando Then e Catch
const getPokemonNamesOne = () => {
    let url = 'https://pokeapi.co/api/v2/pokemon'

    axios.get(url)
    .then(res => {
        console.log(res.data.results.map(pokemon => pokemon.name))
    })
    .catch(err => {
        console.error(err);
    })
}

const getPokemonNamesTwo = async () => {
    let url = 'https://pokeapi.co/api/v2/pokemon'

    try {
        const res = await axios.get(url)
        console.log(res.data.results.map(pokemon => pokemon.name))
    } catch (err) {
        console.error(err);
    }
}

// getPokemonNamesOne()
getPokemonNamesTwo()