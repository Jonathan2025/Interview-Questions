// starter code from codeacademy 
// Now we will interact with the Queue class that we have created from the previous exercise 
// Pretty much in this last exercise, we have planes taking off in a queue

const Queue = require('./Queue');

const load = flights => {
  const runway = new Queue(3)
  flights.forEach(flight => {
    try{
      runway.enqueue(flight)
    console.log(`${flight} taxi to runway.`);
    } catch(error){
      console.log('Runway full!');
    }
  });
  return runway
};

const clear = runway => {
  while(runway.isEmpty() === false) {
    const cleared = runway.dequeue()
    console.log('\nFlights wait...\n');
    console.log(`${cleared}, is cleared for takeoff!\n${cleared} in air.`);
  }

  console.log('\nAll planes took off, runway clear.');
};

module.exports = { load, clear };