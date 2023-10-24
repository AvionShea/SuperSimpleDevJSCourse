// Lesson 3 Exercises - Strings
//3a. Create the text 'My name is:' as a string.
    'My name is: '

//3b. Create your name as a string
    'Avion'

//3c. Using concatenation, add the 2 strings from 3a and 3b together to create the text: 'My name is:_'
    'My name is:' + ' ' + 'Avion'

//3d. At a restaurant, you order 1 coffee($5) and 1 bagel ($3). Using math, calculate the total cost, and using concatenation, create the text: 'Total cost:$_'
    'Total cost: $' + (5 + 3)

//3e. Do the same thing as 3d using template string and interpolation
    `Total cost: $${5+3}`

//3f. Display the text from 3e in a popup using alert()
    alert(`Total cost: $${5+3}`)

//3g. You order 1 coffee ($5.99) and 1 bagel ($2.95). Using math, calculate the total cost, and using concatenation, create the text: 'Total cost: $'
    'Total cost: $' + (599 + 295)/100

//3h Do the same thing as 3g, but use a template string and interpolation
    `Total cost: $${(599 + 295)/100}`

//3h. Display the text from 3h in a popup
    alert(`Total cost: $${(599 + 295)/100}`)

//3j. Using a multi-line string, create the text from 3h and add a line of text underneath: Thank you, come again!. Display both lines in a popup.
alert(`Total cost: $${(599 + 295)/100}
Thank you, come again!`)

//Challenge Exercises
    //Setup: 2 basketballs (20.95 each) with $4.99 shipping, and 2 t-shirts($7.99 each) with $4.99 shipping

//3k.Using interpolation, create the first line of text
    `Items (${2+2}): $${(2095 * 2 + 799 * 2)/100}`

//3l. Create second line of text: 'Shipping & handling: $9.98
    `Shipping & handling: $${(499 + 499)/100}`

//3m. Create third line: 'Total before tax: $67.86'
    `Total before tax: $${(2095 * 2 + 799 * 2 + 499 + 499)/100}`

//3n. Create fourth line of text: 'Estimated tax(10%): $6.79 and Math.round() to calculate the exact number'
    `Estimated tax(10%): $${Math.round((2095 * 2 + 799 * 2 + 499 + 499) * 0.1)/100}`