// Selecting elemnents that exist in the linked html
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// Creating variables and constants needed for story
let name = 'Bob'
const names = ["Willy the Goblin", "Big Daddy", "Father Christmas"]
const places = ["the soup kitchen", "Disneyland", "the White House"]
const action = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

randomize.addEventListener('click', result);

// Function that creates story
function result() {

    // Randomizes story choices
    let insertx = randomValueFromArray(names)
    let inserty = randomValueFromArray(places)
    let insertz = randomValueFromArray(action)


    // Sets the variable name to the user choice if given
  if(customName.value !== '') {
    name = customName.value;

  }

  
  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

  }
  
  story.textContent = `It was ${temperature} fahrenheit outside, so ${insertx} went for a walk. When they got to ${insertx} ${inserty}, they stared in horror for a few moments, then ${insertz}. ${name} saw the whole thing, but was not surprised — ${insertx} weighs ${weight} pounds, and it was a hot day`;
  story.style.visibility = 'visible';
}
