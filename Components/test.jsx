const axios = require('axios');

/*const handleLogin = async () => {
    /!*try {
        const response = await axios.post('https://dummyjson.com/auth/login', {
            username: 'emilys', // Replace with actual username
            password: 'emilyspass'  // Replace with actual password
        });

        const userData = await axios.get('https://dummyjson.com/auth/me', {
            headers: {
                'Authorization': `Bearer ${response.data.token}`,
            },
            withCredentials: true,
        });

        console.log(userData.data.firstName, userData.data.lastName);
    } catch (error) {
        console.error('Error during login or fetching data:', error);
    }*!/
    /!*for (let i = 1; i <= 10; i++) {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${i}`)
            .then(response => {
                console.log(response.data.id);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }*!/

};

handleLogin();*/

const fetchPosts = async () => {
    const results = [];
    for (let i = 1; i <= 3; i++) {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${i}`);
            results.push(response.data); // Зберігаємо отримані дані у масив
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    return results; // Повертаємо масив з результатами
};

fetchPosts().then(posts => {
    console.log(posts);  // Виводимо результат після завершення всіх запитів
});




