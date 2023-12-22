// Questions : Promt the user to enter their full name. Generate a username for them based on the input. Start user with '@' , Followed by their full name and ending with full length.

let username = prompt("Enter your Full name");
username = username.replace(' ', '');
console.log(`@${username.toLowerCase()}${username.length}`)