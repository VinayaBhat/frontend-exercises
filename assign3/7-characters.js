// Enter your code here

const url = 'https://swapi.dev/api/people/';

async function starWarsCharacter() {
    var result_arr = [];
    var fetch_url = url;
    do {
        const response = await fetch(fetch_url);
        const data = await response.json();
        fetch_url = data.next;
        let r_arr = data.results;
        result_arr.push(...r_arr);
    } while (fetch_url)

    return result_arr;
}

async function displayData() {
    var result = await starWarsCharacter();
    var parent_element = document.getElementById("results");
    for (var i = 0; i < result.length; i++) {
        var li = document.createElement("li");
        li.innerHTML = result[i].name + " - " + result[i].birth_year;
        parent_element.appendChild(li);
    }
}

document.body.addEventListener('onload',displayData());
