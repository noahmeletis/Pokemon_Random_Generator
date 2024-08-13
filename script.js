//001-003
const bulbasaurMovesStr = 'Tackle Growl Vine-Whip Growth Leech-Seed Razor-Leaf Poison-Powder Sleep-Powder Seed-Bomb Take-Down Sweet-Scent Synthesis Worry-Seed Power-Whip Solar-Beam';
const bulbasaurMovesArr = bulbasaurMovesStr.split(' ');

const ivysaurMovesArr = bulbasaurMovesArr;

const venusaurMovesStr = 'Petal-Dance Tackle Growl Vine-Whip Growth Petal-Blizzard Leech-Seed Razor-Leaf Poison-Powder Sleep-Powder Seed-Bomb Take-Down Sweet-Scent synthesis Worry-Seed Power-Whip Solar-Beam';
const venusaurMovesArr = venusaurMovesStr.split(' ');

//004-006
const charmanderMovesStr = 'Scratch Growl Ember Smokescreen Dragon-Breath Fire-Fang Slash Flamethrower Scary-Face Fire-Spin Inferno Flare-Blitz';
const charmanderMovesArr = charmanderMovesStr.split(' ');

const charmeleonMovesStr = 'Scratch Growl Ember Smokescreen Drago-Breath Fire-Fang Slash Flamethrower Scary-Face Inferno Flare-Blitz';
const charmeleonMovesArr = charmeleonMovesStr.split(' ');

const charizardMovesStr = 'Dragon-Claw Heat-Wave Scratch Growl Ember Smokescreen Air-Slash Dragon-Breath Fire-Fang Slash Flamethrower Scary-Face Fire-Spin Inferno Flare-Blitz';
const charizardMovesArr = charizardMovesStr.split(' ');

//007-009

const squirtleMovesStr = 'Tackle Tail-Whip Water-Gun Withdraw Rapid-Spin Bite Water-Pulse Protect Rain-Dance Aqua-Tail Shell-Smash Iron-Defense Hydro-Pump Wave-Crash';
const squirtleMovesArr = squirtleMovesStr.split(' ');

const wartortleMovesArr = squirtleMovesArr;

const blastoiseMovesStr = 'Tackle Tail-Whip Water-Gun Withdraw Flash-Cannon Rapid-Spin Bite Water-Pulse Protect Rain-Dance Aqua-Tail Shell-Smash Iron-Defence Hydro-Pump Wave-Crash';
const blastoiseMovesArr = blastoiseMovesStr.split(' ');

//010-012

const caterpieMovesStr = 'Tackle String-Shot Bug-Bite Empty';
const caterpieMovesArr = caterpieMovesStr.split(' ');

const metapodMovesStr = 'Tackle String-Shot Bug-Bite Harden';
const metapodMovesArr = metapodMovesStr.split(' ');

const butterfreeMovesStr = 'Gust Harden Tackle String-Shot Bug-Bite Supersonic Confusion Poison-Powder Stun-Spore Psybeam Whirlwind Air-Slash Safeguard Bug-Buzz Tailwind Rage-Powder Quiver-Dance';
const butterfreeMovesArr = butterfreeMovesStr.split(' ');

//013-015

const weedleMovesStr = 'Poison-Sting String-Shot Empty Empty';
const weedleMovesArr = weedleMovesStr.split(' ');

const kakunaMovesStr = 'Poison-Sting String-Shot Harden Empty';
const kakunaMovesArr = kakunaMovesStr.split(' ');

const beedrillMovesStr = 'Poison-Sting String-Shot Harden Fury-Attack Focus-Energy Twineedle Rage Pin-Missle Agility';
const beedrillMovesArr = beedrillMovesStr.split(' ');

//016-018

const pidgeyMovesStr = 'Tackle Sand-Attack Gust Quick-Attack Whirlwind Twister Feather-Dance Agility Wing-Attack Roost Tailwind Aerial-Ace Air-Slash Hurricane';
const pidgeyMovesArr = pidgeyMovesStr.split(' ');

const pidgeottoMovesArr = pidgeyMovesArr;

const pidgeotMovesArr = pidgeottoMovesArr;

//019-020

const rattataMovesStr = 'Tackle Tail-Whip Quick-Attack Focus-Energy Bite Laser-Focus Take-Down Assurance Crunch Sucker-Punch Super-Fang Double-Edge Endeavor';
const rattataMovesArr = rattataMovesStr.split(' ');

const raticateMovesStr = 'Scary-Face Swords-Dance Tackle Tail-whip Quick-Attack Focus-Energy Bite Laser-Focus Take-Down Assurance Crunch Sucker-Punch Super-Fang Double-Edge Endeavor';
const raticateMovesArr = raticateMovesStr.split(' ');

//Pokemon Factory
const pokemonFactory = (index, name, type, movesArr) =>{
    return {
        index:index,
        name: name,
        pokemonType: type,
        possibleMoves: movesArr,
        randMoves() {
          let setMoves = [];
          let newPossibleMoves = this.possibleMoves;
          for (let i=0; i <4; i++ ){
            let moveIndex = Math.floor(Math.random()*newPossibleMoves.length)
            setMoves.push(newPossibleMoves[moveIndex]);
            newPossibleMoves.splice(moveIndex, 1 );
          }
          return `${setMoves[0]}, ${setMoves[1]}, ${setMoves[2]} and ${setMoves[3]}.`;
        }
    }
}

const bulbasaur = pokemonFactory(1, 'Bulbasaur', ['Grass', 'Poison'], bulbasaurMovesArr);
const ivysaur = pokemonFactory(2, 'Ivysaur',['Grass', 'Poison'], ivysaurMovesArr);
const venusaur = pokemonFactory(3, 'Venusaur', ['Grass', 'Poison'], venusaurMovesArr );

const charmander = pokemonFactory(4, 'Charmander', ['Fire'], charmanderMovesArr);
const charmeleon = pokemonFactory(5, 'Charmeleon', ['Fire'], charmeleonMovesArr);
const charizard = pokemonFactory(6, 'Charizard', ['Fire', 'Flying'], charizardMovesArr);

const squirtle = pokemonFactory(7, 'Squirtle', ['Water'], squirtleMovesArr);
const wartortle = pokemonFactory(8, 'Wartortle', ['Water'], wartortleMovesArr);
const blastoise = pokemonFactory(9, 'Blastoise', ['Water'], blastoiseMovesArr);

const caterpie = pokemonFactory(10, 'Caterpie', ['Bug'], caterpieMovesArr);
const metapod = pokemonFactory(11, 'Metapod', ['Bug'], metapodMovesArr);
const butterfree = pokemonFactory(12, 'Butterfree', ['Bug', 'Flying'], butterfreeMovesArr);

const weedle = pokemonFactory(13, 'Weedle', ['Bug', 'Poison'], weedleMovesArr);
const kakuna = pokemonFactory(14, 'Kakuna', ['Bug', 'Poison'], kakunaMovesArr);
const beedrill = pokemonFactory(15, 'Beedrill', ['Bug', 'Poison'], beedrillMovesArr);

const pidgey = pokemonFactory(16, 'Pidgey', ['Normal', 'Flying'], pidgeyMovesArr);
const pidgeotto = pokemonFactory(17, 'Pidgeotto', ['Normal', 'Flying'], pidgeottoMovesArr);
const pidgeot = pokemonFactory(18, 'Pidgeot', ['Normal', 'Flying'], pidgeotMovesArr);

const rattata = pokemonFactory(19, 'Rattata', ['Normal'], rattataMovesArr);
const raticate = pokemonFactory(20, 'Raticate', ['Normal'], raticateMovesArr);

const pokemonArr = [bulbasaur, ivysaur, venusaur, charmander, charmeleon, charizard, squirtle, wartortle, blastoise, caterpie, metapod, butterfree, weedle, kakuna, beedrill, pidgey, pidgeotto, pidgeot, rattata, raticate];

//Item array

const allItems = 'X-Attack X-Defense X-Sp.Attack X-Speed X-Accuracy Dire-Hit Guard-Spec. X-Sp.Def Full-Restore Hyper-Potion Max-Potion Potion Super-Potion Antidote Awakening Burn-Heal Full-Heal Ice-Heal Paralyze-Heal Max-Revive Revive Ether Max-Ether Elixir Max-Elixir';
const allItemsArr = allItems.split(' ');

const randomFunction = (pokeArr, itemList) =>{
  let chosenPokemon = [];
  let subtractivePokemonList = pokeArr;
  for (let i=0; i<6; i++){
    let chosenIndex = Math.floor(Math.random()*subtractivePokemonList.length);
    chosenPokemon.push(subtractivePokemonList[chosenIndex]);
    subtractivePokemonList.splice(chosenIndex, 1 );
  }

 let chosenItems = [];
 let subtractiveItemList = itemList;
 for (let i=0; i<6; i++){
  let chosenIndex = Math.floor(Math.random()*subtractiveItemList.length);
  chosenItems.push(subtractiveItemList[chosenIndex]);
  subtractiveItemList.splice(chosenIndex, 1);
 }
 
 console.log(`Here is your Comp-lineup!`);
 console.log(`Pokemon 1: ${chosenPokemon[0].name}`);
 console.log('Moves:');
 console.log(chosenPokemon[0].randMoves());
 console.log(' ');

 console.log(`Pokemon 2: ${chosenPokemon[1].name}`);
 console.log('Moves:');
 console.log(chosenPokemon[1].randMoves());
 console.log(' ');

 console.log(`Pokemon 3: ${chosenPokemon[2].name}`);
 console.log('Moves:');
 console.log(chosenPokemon[2].randMoves());
 console.log(' ');

 console.log(`Pokemon 4: ${chosenPokemon[3].name}`);
 console.log('Moves:');
 console.log(chosenPokemon[3].randMoves());
 console.log(' ');

 console.log(`Pokemon 5: ${chosenPokemon[4].name}`);
 console.log('Moves:');
 console.log(chosenPokemon[4].randMoves());
 console.log(' ');

 console.log(`Pokemon 6: ${chosenPokemon[5].name}`);
 console.log('Moves:');
 console.log(chosenPokemon[5].randMoves());
 console.log(' ');

 console.log(`Your Items are:`);
 console.log(chosenItems);
 console.log(' ');

 console.log('Good Luck!');
 
}


randomFunction(pokemonArr, allItemsArr);

