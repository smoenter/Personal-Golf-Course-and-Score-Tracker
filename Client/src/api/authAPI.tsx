import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // make a POST request to the login route
  try {
    // Send a POST request to '/auth/login' with user login information in JSON format
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    });

    // Parse the response body as JSON
    const data = await response.json();
    // Throw error if response status is not OK (200-299)
    if (!response.ok) {
      const data = await response.json(); // Parse error response as JSON
      throw new Error(`Error: ${data.message}`); // Throw a detailed error message
    }
    return data;  // Return the data received from the server
  } catch (err) {
    console.error('Error from user login: ', err);  // Log any errors that occur during fetch
    return Promise.reject('Could not fetch user info');  // Return a rejected promise with an error message
  }
}

// Function to handle sign-up

const signUp = async (userInfo: UserLogin) => {
  // make a POST request to the sign-up route
  try {
    // Send a POST request to '/auth/login' with user login information in JSON format
    const response = await fetch('/auth/signUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    });

    // Parse the response body as JSON
    const data = await response.json();

    // Throw error if response status is not OK (200-299)
    if (!response.ok) {
      const errorData = data || {}; 
      throw new Error(`Error: ${errorData.message || 'Unknown error occurred'}`); // Throw a detailed error message
    }

    return data;  // Return the data received from the server
  } catch (err) {
    console.error('Error signing up: ', err);  // Log any errors that occur during fetch
    return Promise.reject(err);  // Return a rejected promise with an error message
  }
}
export { login, signUp };
