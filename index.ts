// EXAMPLE FOR SWITCH CASE
console.log('>>>EXAMPLE FOR SWITCH CASE\n');

// What happend when i don't use break keyword?

let weekendDays:string[] = ['Saturday','Sunday'];
let weekDays:string[] = ['Monday','Tuesday','Wednessday','Thursday','Friday'];

let dayName = 'Saturday';

switch (true) {
    case weekendDays.includes(dayName):
        console.log('holiday');

        if (dayName == 'Sunday') {
            break;
        }

    case dayName == 'Saturday':
        console.log('Today is your extra class');
    break;
    case weekDays.includes(dayName):
        console.log('You should attend Today`s class');
    break;
    default:
        console.log('default');
}


// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


// EXAMPLE FOR ITERATION (LOOP) with continue & break keyword
console.log('\n\n>>>EXAMPLE FOR ITERATION\n')

// You should run the and observe the output, what iteration was printing
// Then you should un-comment the 2 lines of code that relate with continue statement, 
    // Then run, observe & identify the diff of the output with previous one

// Now you should un-comment the 2 lines of code that relate with break statement,
    // Then run, observe ....

// Identify the usage of continue & break keyword

let nonPrintableIteration:number[] = [3,6,8];
let breakTheLoop:number = 7;

for (let i = 1; i <= 10; i++) {
    // if(nonPrintableIteration.includes(i))
    //     continue;

    // if(i >= breakTheLoop)
    //     break;

    console.log(`iteration no: ${i}`);
}