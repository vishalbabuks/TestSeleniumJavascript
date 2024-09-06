// URL of the API endpoint
const apiUrl = 'https://jsonplaceholder.typicode.com/posts'

// JavaScript object to be sent as JSON in the request body
const postData = {
    title: 'testing',
    body: 'bar',
    userId: 50,
}

// Example of using fetch to make a POST request with JSON.stringify()
fetch(apiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData), // Convert the JS object to a JSON string
})
    .then((response) => {
        // Check if the response is ok (status code in the range 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        // Parse the JSON response to a JavaScript object
        return response.json()
    })
    .then((data) => {
        // Handle the parsed JSON data here
        console.log('Response data:', data)
    })
    .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error('Fetch error:', error)
    })
