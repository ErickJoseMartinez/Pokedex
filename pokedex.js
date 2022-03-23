//console.log("Primera interacción");
const fetchEveryPokemon = () =>{
    const url = `https://pokeapi.co/api/v2/pokemon/?limit=1000`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            //console.log(res);
            var e = new Error('No disponible por el momento');
            alert(e);
        }
        else {
            return res.json();
        }
    }).then((data) =>{
        let countPokemon = data.results;
        listaPokemon(countPokemon.length,countPokemon);
    })
}
const fetchPokemon = () =>{
    const pokeName = document.getElementById("pokeName");
    if((pokeName.value === null) || (pokeName.value === "")){
        var e = new Error('No has solicitado nada');
        alert(e);
    }else{
        let pokeInfo = pokeName.value.toLowerCase();
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeInfo}`;
        //console.log(url);
        fetch(url).then((res) => {
            if (res.status != "200") {
                //console.log(res);
                pokedexInfo("./assets/img/pikachu_triste.jpg","No Disponible","No Disponible");
                cleanFields();
                var e = new Error('No existe ese pokemon');
                alert(e);
            }
            else {
                return res.json();
            }
        }).then((data) =>{
            if (typeof(data) !== 'undefined') {
                let pokeImg = data.sprites.front_default;
                let idPokemon = data.id;
                let namePokemon = data.forms[0].name;
                let countAbilities = data.moves;
                let countTypes = data.types;
                let countStats = data.stats;
                pokedexInfo(pokeImg,namePokemon,idPokemon);
                listaTypes(countTypes.length,countTypes);
                listaHabilidades(countAbilities.length,countAbilities);
                listaStatus(countStats.length,countStats);
                const newPokeName = document.getElementById("pokeName");
                newPokeName.value = null;
            }else{
                cleanFields();
            }
        })
    }
}

const pokedexInfo = (url,namePokemon, idPokemon) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
    if(namePokemon != idPokemon){
        const namePoke = document.getElementById("namePokemon");
        namePoke.innerHTML = idPokemon + "- " +namePokemon.toUpperCase();
    }else{
        const namePoke = document.getElementById("namePokemon");
        namePoke.innerHTML = namePokemon.toUpperCase();
    }
    
}

const listaHabilidades =(size,abilities) => {
    if(size !=0){
        let killParrafo = document.getElementById("Ability");
        if(killParrafo != null){
            killParrafo.remove();
        }
        var body = document.getElementById("pokepoke");
        var lista = document.createElement("select");
        lista.setAttribute("class","select-css");
        lista.setAttribute("id", "Ability"); 
        abilities.forEach((element, index, fullArray) => {
            var parrafo   = document.createElement("option");
            parrafo.innerText =abilities[index].move.name;
            lista.appendChild(parrafo);
        })
        body.appendChild(lista);
    }
}

const listaTypes =(size,types) => {
    if(size !=0){
        let killParrafo = document.getElementById("Types");
        if(killParrafo != null){
            killParrafo.remove();
        }
        var body = document.getElementById("pokepokeType");
        //console.log(types);
        var lista = document.createElement("select");
        lista.setAttribute("id", "Types");
        lista.setAttribute("class","select-css");
        types.forEach((element, index, fullArray) => {
            var parrafo   = document.createElement("option");
            parrafo.innerText =types[index].type.name;
            lista.appendChild(parrafo);
        })
        body.appendChild(lista);
    }
}

const listaPokemon =(size,pokemon) => {
    if(size !=0){
        
        let killParrafo = document.getElementById("PokemonList");
        if(killParrafo != null){
            killParrafo.remove();
        }
        var body = document.getElementById("pokemonFull");
        //console.log(types);
        var lista = document.createElement("select");
        lista.setAttribute("id", "PokemonList");
        lista.setAttribute("class","select-css");
        pokemon.forEach((element, index, fullArray) => {
            //console.log(pokemon);
            var parrafo   = document.createElement("option");
            parrafo.innerText =pokemon[index].name;
            lista.appendChild(parrafo);
        })
        //console.log(lista);
        body.appendChild(lista);
    }
}

const listaStatus =(size,stats) => {
    if(size !=0){
        var generic_name_0 = "basePokemon";
        var generic_message_0 = "Base";
        var generic_id_0 = "basePokemonItm";
        var generic_name_1 = "attackPokemon";
        var generic_message_1 = "Ataque";
        var generic_id_1 = "attackPokemonItm";
        var generic_name_2 = "defensePokemon";
        var generic_message_2 = "Defensa";
        var generic_id_2 = "defensePokemonItm";
        var generic_name_3 = "attackSpecialPokemon";
        var generic_message_3 = "Ataque Esp.";
        var generic_id_3 = "attackSpecialPokemonItm";
        var generic_name_4 = "defenseSpecialPokemon";
        var generic_message_4 = "Defensa Esp.";
        var generic_id_4 = "defenseSpecialPokemonItm";
        var generic_name_5 = "speedPokemon";
        var generic_message_5 = "Velocidad";
        var generic_id_5 = "speedPokemonItm";

        let killParrafo = document.getElementById("basePokemonItm");
        //console.log(killParrafo);
        if(killParrafo != null){
            killParrafo.remove();
        }

        killParrafo = document.getElementById("attackPokemonItm");
        //console.log(killParrafo);
        if(killParrafo != null){
            killParrafo.remove();
        }

        killParrafo = document.getElementById("defensePokemonItm");
        //console.log(killParrafo);
        if(killParrafo != null){
            killParrafo.remove();
        }

        killParrafo = document.getElementById("attackSpecialPokemonItm");
        //console.log(killParrafo);
        if(killParrafo != null){
            killParrafo.remove();
        }

        killParrafo = document.getElementById("defenseSpecialPokemonItm");
        //console.log(killParrafo);
        if(killParrafo != null){
            killParrafo.remove();
        }

        killParrafo = document.getElementById("speedPokemonItm");
        //console.log(killParrafo);
        if(killParrafo != null){
            killParrafo.remove();
        }

        stats.forEach((element, index, fullArray) => {
            let name = "";
            let id = "";
            let mensaje = "";
            if(index==0){
                name = generic_name_0;
                id = generic_id_0;
                mensaje = generic_message_0;
            }else if(index==1){
                name = generic_name_1;
                id = generic_id_1;
                mensaje = generic_message_1;
            }else if(index==2){
                name = generic_name_2;
                id = generic_id_2;
                mensaje = generic_message_2;
            }else if(index==3){
                name = generic_name_3;
                id = generic_id_3;
                mensaje = generic_message_3;
            }else if(index==4){
                name = generic_name_4;
                id = generic_id_4;
                mensaje = generic_message_4;
            }else if(index==5){
                name = generic_name_5;
                id = generic_id_5;
                mensaje = generic_message_5;
            }
            var body = document.getElementById(name);
            var parrafo   = document.createElement("p");
            parrafo.innerText = mensaje + ": " + stats[index].base_stat;
            parrafo.setAttribute("id",id);
            body.appendChild(parrafo);
        })
    }
}

const getPokemonId = () =>{
    var combo = document.getElementById("PokemonList");
    var selected = combo.options[combo.selectedIndex].text;
    const newPokeName = document.getElementById("pokeName");
    newPokeName.value = selected;
    fetchPokemon();
}

const cleanFields =() =>{
    let killParrafo = document.getElementById("basePokemonItm");
    //console.log(killParrafo);
    if(killParrafo != null){
        killParrafo.remove();
    }

    killParrafo = document.getElementById("attackPokemonItm");
    //console.log(killParrafo);
    if(killParrafo != null){
        killParrafo.remove();
    }

    killParrafo = document.getElementById("defensePokemonItm");
    //console.log(killParrafo);
    if(killParrafo != null){
        killParrafo.remove();
    }

    killParrafo = document.getElementById("attackSpecialPokemonItm");
    //console.log(killParrafo);
    if(killParrafo != null){
        killParrafo.remove();
    }

    killParrafo = document.getElementById("defenseSpecialPokemonItm");
    //console.log(killParrafo);
    if(killParrafo != null){
        killParrafo.remove();
    }

    killParrafo = document.getElementById("speedPokemonItm");
    //console.log(killParrafo);
    if(killParrafo != null){
        killParrafo.remove();
    }

    killParrafo = document.getElementById("PokemonList");
    if(killParrafo != null){
        killParrafo.remove();
    }

    killParrafo = document.getElementById("Types");
    if(killParrafo != null){
        killParrafo.remove();
    }

    const newPokeName = document.getElementById("pokeName");
    newPokeName.value = null;

    fetchEveryPokemon();
}