fetch("https://ci-swapi.herokuapp.com/api/")
    .then(response => response.text())
    .then(data => displayData(data))
    .catch((error) => {
        console.error("Error: ", error);
    });

function displayData(data) {
    document.getElementById('content').innerText = data;
}