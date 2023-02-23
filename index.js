const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
 
//identify were i lowercased a word. 
//use console.log to break down line 21
// use +

const titleCased = () => {
  return tutorials.map(sentence => {
   const newarray = sentence.split(" ")
   const capitalizeNewArray = newarray.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  })
    const rejoinArray = capitalizeNewArray.join(" ");
      return rejoinArray
    
   
  })
  //const createEmptyArray = [];
  //createEmptyArray.push(capitalizeNewArray)
  
};



//map over tutorials
  //for each sentence, we want to split it to access each word
    //HINT: there is a method called split() that returns an array
  //Iterate each word in our new array, we need to get first letter and capitalize it
    //HINT: toUpperCase() and charAt(0)
  //now we need to rejoin our array of strings back into a sentence
    //HINT: google: how to rejoin an array of strings

  //const sentences ["hey whats up", 'how are you']
//  ['hey', 'whats', 'up']

//create a new empty array
//add our strings (rejoinedArray) to the new empty array
  //HINT: google how can i add to an array?
//return that array
