const fetch = require('node-fetch'); // For making HTTP requests

exports.handler = async (event, context) => {
    // KeyAuth 1.3 API URL
    const apiUrl = 'https://keyauth.cc/api/';  // Base API URL for 1.3
    const action = 'checkuser';  // Action for checking a user (Example)
    
    // Payload for the API request
    const requestBody = {
        key: 'your-user-key',  // Replace with the User Key you receive when a user registers
        action: action,        // Action you want to perform (e.g., checkuser, validate key)
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        // Parse the response
        const data = await response.json();
        
        // Respond with the data from the KeyAuth API
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'API request successful!',
                keyAuthData: data,  // Data returned from the API
            }),
        };
    } catch (error) {
        // Handle errors
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'Error interacting with KeyAuth API',
                error: error.message,
            }),
        };
    }
};