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
    const todoArray = [];

    function addToList(){
        let itemsOnList = document.querySelector('#todo-items-two');
        let storedListItems = itemsOnList.value;

        todoArray.push(storedListItems);

        document.querySelector('#display-items').innerText = todoArray;

        itemsOnList.value = '';
    }