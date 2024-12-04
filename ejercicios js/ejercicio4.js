// paso1
const avengers = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log(avengers[0])
//paso 2
const avengers1 = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
avengers1[0] = 'IRONMAN'
//paso 3
const avengers3 = ['HULK', 'SPIDERMAN', 'BLACK PANTHER']
console.log(avengers3.length)
//paso 4
const rickAndMortyCharacters = ['Rick', 'Beth', 'Jerry']
rickAndMortyCharacters.push('Morty', 'Summer')
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1])

//paso 5
const rickAndMortyCharacters1 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharacters1.pop()
console.log(rickAndMortyCharacters1[0])
console.log(rickAndMortyCharacters1[rickAndMortyCharacters1.length - 1])
// paso 6
const rickAndMortyCharacters3 = [
  'Rick',
  'Beth',
  'Jerry',
  'Morty',
  'Summer',
  'Lapiz Lopez'
]
rickAndMortyCharacters3.splice(1, 1)
console.log(rickAndMortyCharacters3)
