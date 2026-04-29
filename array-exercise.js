let bunnies = ["Fluffy", "Bugs-Bunny", "Lucy", "Thunder", "Snowball", "Bella"];

bunnies.push("Mario");        // Add to end
bunnies.splice(2, 1);         // Remove Lucy (at index 2)
bunnies.unshift("Luigi");     // Add to beginning

console.log(bunnies);
