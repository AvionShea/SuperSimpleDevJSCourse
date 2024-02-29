// const array1 = [
//     30, 
//     40, 
//     50, 
//     70, 
//     60
// ];
// console.log(array1);

// console.log(array1[3]);
// array1[3] = 60;
// array1[4] = 70;
// array1[5] = 80;

// console.log(array1);

// const array2 = [
//     1,
//     "Hi!",
//     true,
//     {
//         name: 'Car'
//     },
//     [1,
//     3]
// ];
// console.log(typeof [1, 3]);
// Array.isArray([1, 23]);
// console.log(Array.isArray([1,3]));

// console.log(array1.length);

// //.push() adds a value to the end of an array
// array1.push(90);
// console.log(array1);

// //.splice() remove a value from an array - first value is the index we want to remove, second value is the # of values to remove
// array1.splice(0, 3);
// console.log(array1);

//todo
//.push() to add to list
//.pop() to delete?
//.length?

//practice one todo
//Algorithm
    //create an array
    const itemArray = [];
    //addEventListener(click) that gets document.querySelector.value
    function addItems(){
        let listItems = document.querySelector('#todo-items');
        let storedItems = listItems.value;
    //Store items in array
        itemArray.push(storedItems);
    //display in console
        console.log(itemArray);
    //clear input
        listItems.value = '';
    };


    //practice two todo

    //     const todoArray = [];

    // function addToList(){
    //     let itemsOnList = document.querySelector('#todo-items-two');
    //     let storedListItems = itemsOnList.value;

    //     todoArray.push(storedListItems);

    //     document.querySelector('#display-items').innerText = todoArray;

    //     itemsOnList.value = '';
    // };

    //while loop - use if the loop is non-standard
    // let i = 1;

    // while(i <= 10){
    //     console.log(i);
    //     i++;
    // }

    //non-standard example - doesn't have a loop variable that we increase every time nor does it include increment step
    // let randomNumber = 0;
    // while(randomNumber < 0.6){
    //     randomNumber = Math.random();
    //     console.log(randomNumber);
    // };
    
    //for loop - use if the loop is standard
    //Example One - Loop through an Array
    // const practiceArray = [
    //     "learn JavaScript",
    //     "practice technical interviews",
    //     "apply for jobs"
    // ];

    // for(let index = 0; index <= practiceArray.length - 1; index++){
    //     const value = practiceArray[index];
    //     console.log(value);
    // };

    // //shortcut
    // for(let i = 0; i < practiceArray.length; i++){
    //     const value = practiceArray[i];
    //     console.log(value);
    // }

    //Accumulator Pattern
    let numArray = [1, 1, 3];

    //1.create a variable to store result
    let addTotal = 0;

    //2. Loop through array and update result
    for(let i = 0; i < numArray.length; i++){
        let nums = numArray[i];
        addTotal += nums;
        
        document.getElementById('test-display').innerHTML = `Total: ${addTotal}`;
    };