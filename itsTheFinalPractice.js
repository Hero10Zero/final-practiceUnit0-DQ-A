/*
Dream App Psudo
*/

//Values, data types, and operations & Building Arrays
let colonyOfPawns = [
    { name: "Earl Hubbert", age: 45, status: "Healthy" }
    , 
    { name: "Lily Thompson", age: 30, status: "Healthy" }
    , 
    { name: "Maxwell Reed", age: 50, status: "Unwell" }
]; // Array of objects representing pawns; (Characters are called pawns in this game)

//Stringing characters together & Using Arrays

let messageToUser = colonyOfPawns.map(pawn => {
    console.log(`${pawn.name} accidentally stepped on a landmine!`);
});

//Working with Loops & Control Structures and Logic
do {
    colonyOfPawns.forEach(pawn => {
        if (pawn.status === "Unwell") {
            console.log(`${pawn.name} needs medical attention!`);
            pawn.status = "Healthy"; // Healing the pawn
        } else {
            console.log(`${pawn.name} is ready for the next mission.`);
        }
    });
}while (colonyOfPawns.some(pawn => pawn.status === "Unwell")); //Realistically, I would have this run during a fight but whenever a pawn is unwell, they need to be healed before continuing
