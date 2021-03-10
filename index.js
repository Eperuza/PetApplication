//get the available pets from API status="available"
//  https://petstore.swagger.io/#/
// https://petstore.swagger.io/v2/pet/5
// text file that lists all the available pets from the petstore API
// another file that list the animals with a pending status // can't adopt
// use the aysnc methonds of fs to write the file
// availablePets = {};  ...status = available

const fs = require('fs');
const fetch = require('node-fetch');


// get request -- returns all pets with available status
//https://petstore.swagger.io/v2/pet/findByStatus?status=available
fetch('https://petstore.swagger.io/v2/pet/findByStatus?status=available')
    .then(response => response.json())
    .then(data => {
        fs.writeFile('availablepets.txt', JSON.stringify(data), 'utf8', function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log('We wrote a file with available pets.');
            }
        })
    })
fetch('https://petstore.swagger.io/v2/pet/findByStatus?status=pending')
    .then(response => response.json())
    .then(data => {
        fs.writeFile('pendingpets.txt', JSON.stringify(data), 'utf8', function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log('We wrote a file with pending pets.');
            }
        })
    })



//we want to add each element of the reutrned array to a string to write it to a file

//https://petstore.swagger.io/v2/pet/findByStatus?status=pending