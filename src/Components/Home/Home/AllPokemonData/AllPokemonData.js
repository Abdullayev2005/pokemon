import axios from 'axios';
import { useState } from "react";
import Error from '../../../Error/Error';
import Card from '../../Card/Card';

const AllPokemonData = () => {
  const [seLoading, setseLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [pokemon, setpokemon] = useState({
    name: "",
    species: '',
    img: '',
    hp: '',
    ability: '',
    type: '',
    weight: '',
    base_experience: '',
    game: '',
  });

  //   // search for the rPokemon name
  const searchpokemon = async () => {
    setseLoading(true);
    // setError(false);
    // try{
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`);
    console.log(res);
    setpokemon({
      name: search, weight: res.data.weight, base_experience: res.data.base_experience, species: res.data.species.name, img: res.data.sprites.front_default, hp: res.data.stats[0].base_stat, ability: res.data.abilities[0].ability.name, game: res.data.game_indices[0].version.name,
      type: res.data.types[0].type.name
    });
    setseLoading(false);
    }
    catch(error){
    console.log(error);
    setseLoading(false);


    }

  };


  const handleChange = (e) => {
    setSearch(e.target.value)

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    searchpokemon();
    setSearch('')
  }


  return (

    <>
      <form oneSubmit={handleSubmit}>
        <div className=" lg:w-full sm:w-36 text-center mt-20 mb-16 md:w-fit">
          <div className="rounded-full">
            <input style={{ fontSize: '16px', outline: 'none' }} className="p-5 w-40 md:w-96 mr-3 bg-white" placeholder='Search Pokemon Name' value={search} disabled={seLoading} onChange={handleChange} required />

            <input
              disabled={seLoading || !search}
              type="submit"
              className='px-5 py-3 bg-black cursor-pointer  md:text-lg sm:text-xm text-white rounded-md hover:bg-red-400 transition-all duration-500'
              value="Search"
            />

          </div>
        </div>

      </form>
      <div className="">


        {!seLoading && pokemon ? (

          <Card pokemon={pokemon}> </Card>) : <Error />}

      </div>
    </>
  )

};

export default AllPokemonData;
