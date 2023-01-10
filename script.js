const endpoint = 'https://randomuser.me/api/';

// Fetch a random user from the API
async function getUser() {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    const user = data.results[0];
    return user;
  } catch (error) {
    console.error(error);
  }
}

// Update the page with the user's information
async function displayUser() {
  const user = await getUser();

  // Display the user's name and image
  const name = `${user.name.first} ${user.name.last}`;
  document.getElementById('name').innerHTML = name;
  document.getElementById('image').src = user.picture.large;

  // Add event listeners to the buttons
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const attribute = button.getAttribute('data-attr');
      let value;
      if (attribute === 'age') {
        // Calculate the age from the date of birth
        const dob = new Date(user.dob.date);
        const today = new Date();
        value = today.getFullYear() - dob.getFullYear();
      } else {
        value = user[attribute];
      }
      document.getElementById('additional-info').innerHTML = value;
    });
  });
}

// Add an event listener to the "Get User" button
document.getElementById('getUser').addEventListener('click', displayUser);

// Display the initial user
displayUser();
