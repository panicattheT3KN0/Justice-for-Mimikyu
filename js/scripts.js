let pokemonList = [{name: "Gengar", height: 4.11, type: ["ghost", "poison"]},
    {name: "Drifloon", height: 1.4, type: ["ghost", "flying"]},
    {name: "Mimikyu", height: 0.8, type: ["ghost", "fairy"]}
];

for (let i = 0; i < pokemonList.length; i++){
    document.write("<p>" + pokemonList[i].name + " " + "(" + "height: " + pokemonList[i].height + ")" + "</p>")
    if (pokemonList[i].height < 1)
        document.write("Wow, so tiny!");
  };
