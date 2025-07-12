export const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fetch('https://jsonplaceholder.typicode.com/users/3'));
        }, 5000)
    })
};