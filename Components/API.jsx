fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 60,
    })
})
    .then(res => res.json())
    .then(console.log);





/*fetch('https://dummyjson.com/auth/me', {
    method: 'GET',
    headers: {
        'Authorization': 'Bearer ',
    },
})
    .then(res => res.json())
    .then(console.log);

*/


/*

fetch('https://dummyjson.com/auth/refresh', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        refreshToken: '',
        expiresInMins: 60,
    })
})
    .then(res => res.json())
    .then(console.log);
*/

