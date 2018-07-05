let notes = ['do', 're', 'mi', 'fa', 'so', 'la', 'ti', 'do']
//let notes = ['do', 're', 'mi']

//slice

// let notes1=notes.slice(4,6)
// console.log(notes1)
// console.log(notes)

//splice
// let omit = notes.splice(4, 2)
// console.log(omit)
// console.log(notes)

// splice - part 2
notes.splice(0,3, 'sa', 're', 'ppa')
console.log(notes)

//concat
console.log(notes.concat(['sa', 're', 'ga']))
console.log(notes)