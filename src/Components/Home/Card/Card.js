
const Card = ({pokemon}) => {
    
    return (
        <div className="flex flex-wrap justify-center">
        <div className="flex flex-col justify-center bg-white rounded-lg shadow-md lg:w-3/12  m-6 px-5 overflow-hidden sm:w-full">
            <h2 className="text-center py-5 text-2xl font-bold">{pokemon.name}</h2>
            <div className="flex justify-center">
                {
                    pokemon.img ? <img src={pokemon.img} alt="" className="h-48 w-full object-cover md:h-full md:w-48" style={{ backgroundColor: 'pink', borderRadius: '25px' }} /> : <div style={{ display: "grid", justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <h2>Please Search Pokemon API</h2>
                        <img style={{ width: '100%', height: 'auto' }} src="https://raw.githubusercontent.com/ProgrammerShahJalal/fockmon-api-search/main/src/images/search.png" alt="" /></div>
                }
            </div>
            <div className="text-center pb-10">
                {pokemon.name && <><h4>Species Name: {pokemon.species}</h4>
                    <h4>Stats Name: {pokemon.hp}</h4>
                    <h4>Ability: {pokemon.ability}</h4>
                    <h4>Weight: {pokemon.weight}</h4>
                    <h4>Base-Experience: {pokemon.base_experience}</h4>
                    <h4>Version Name: {pokemon.game}</h4></>}
            </div>


        </div>

    </div>
        <div className="flex flex-wrap justify-center">
           <div className="flex flex-col justify-center bg-black text-white rounded-lg shadow-md lg:w-3/12  m-6 px-5 overflow-hidden sm:w-full">
                <h2 className="pl-10 pt-5  text-xl font-bold">{pokemon.name}</h2>
                 <div className="flex justify-center">
                    <img src={pokemon.img} alt="" className="w-6/12 " />
                </div>
                 <div className="pl-10 pb-10">
                     <h4>Species Name: {pokemon.species}</h4>
                     <h4>Stats Name: {pokemon.hp}</h4>
                     <h4>Ability: {pokemon.ability}</h4>
                     <h4>WEight: {pokemon.weight}</h4>
                     <h4>Base-Experience: {pokemon.base_experience}</h4>
                     <h4>Version Name: {pokemon.game}</h4>
                 </div>


             </div>

         </div>
    );
};

export default Card;
