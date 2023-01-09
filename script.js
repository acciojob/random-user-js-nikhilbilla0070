//your code here
const apiUrl = 'https://randomuser.me/api/';

let fullName;
let image;
let age;
let email;
let phone;

async function getUser() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const user = data.results[0];

    // Extract relevant info from the user
    fullName = `${user.name.first} ${user.name.last}`;
    image = user.picture.large;
    age = user.dob.age;
    email = user.email;
    phone = user.phone;

    // Display full name and image
    const nameElem = document.getElementById('name');
    nameElem.textContent = fullName;
    const imageElem = document.getElementById('image');
    imageElem.src = image;
  } catch (error) {
    console.error(error);
  }
}

// Initial call to get a user
getUser();

// Add click event listeners to the buttons
document.getElementById('age').addEventListener('click', () => {
  const infoElem = document.getElementById('additional-info');
  infoElem.textContent = `Age: ${age}`;
});
document.getElementById('email').addEventListener('click', () => {
  const infoElem = document.getElementById('additional-info');
  infoElem.textContent = `Email: ${email}`;
});
document.getElementById('phone').addEventListener('click', () => {
  const infoElem = document.getElementById('additional-info');
  infoElem.textContent = `Phone: ${phone}`;
});

// Add a click event listener to the "getUser" button
document.getElementById('getUser').addEventListener('click', getUser);
