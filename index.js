// add solution here

function theBeatlesPlay(musician, instrument){
  var results = [];
  for(var i=0; i<musician.length; i++){
    results[i] = (`${musician[i]} plays ${instrument[i]}`)
  }
  return results;
}

function johnLennonFacts(facts){
  let i = 0;
  while(i < facts.length){
    facts[i]=`${facts[i]}!!!`
    i++
  }
  return facts;
}

function iLoveTheBeatles(num){
var results = [];
do{
  var i = 0
  results[i]= 'I love the Beatles!'
  i++
}while(num<15)

return results;
  
}