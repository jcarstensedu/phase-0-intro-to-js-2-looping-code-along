// FOR LOOP

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`)

//     }
//     return gifts;
// }


// wrapGifts(gifts);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// WHILE LOOP

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     let i = 0;
//     while (i < gifts.length) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         i++;

//     }
//     return gifts;
// }


// wrapGifts(gifts);

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// LAB START


const cards = ["name", "event"]


function writeCards(names, event) {
    const messages = []
    for (let i = 0; i < names.length; i++) {
        console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }

    return messages
}


function countDown(i) {

    while (i > -1) {
        console.log(i)
        i--
    }
    return i
}




