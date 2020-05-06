// Enter your code here

// Input:
// http://www.example.com?name=r2d2&email=r2d2%40me.com&human=no

// Output
// http://www.example.com
// name: r2d2
// email: r2d2@me.com
// human: no


var result_div = document.createElement("div");
result_div.className = "bg-light border rounded w-50 mx-auto mt-5 p-3";

var result_heading = document.createElement("h2");
result_heading.className = "mt-2 mb-4";
result_heading.innerHTML = "Results";

var url_heading = document.createElement("h4");
url_heading.innerHTML = "URL";

var url_content = document.createElement("p");
url_content.className = "mt-2 mb-4";

var param_heading = document.createElement("h4");
param_heading.innerHTML = "Query Parameters";

var param_div = document.createElement("div");

function url_submitted(event) {
    event.preventDefault();
    deleteElement(param_div);
    deleteElement(result_div);
    var str = document.getElementById("comments").value;
    if (ValidURL(str)) {
        var decodedurl = decodeURIComponent(str);
        if(decodedurl.includes('?')){
        var url = decodedurl.split('?')[0];
        url_content.innerHTML = url;
        result_div.appendChild(url_heading);
        result_div.appendChild(url_content);

        let params = decodedurl.split('?')[1].split('&');

        if (params && params.length) {
            params.map(keyValue => {
                let keyValuePair = keyValue.split('=')
                let key = keyValuePair[0];
                let value = keyValuePair[1];
                var p_element = document.createElement("p");
                p_element.className = "mt-2 mb-2";
                p_element.innerHTML = key + ": " + value;
                param_div.appendChild(p_element);
            })
        }
        result_div.appendChild(param_heading);
        result_div.appendChild(param_div);
        result_div.style.display = "block";
    }else{
        result_div.appendChild(url_heading);
        url_content.innerHTML = decodedurl;
        result_div.appendChild(url_content);
        result_div.style.display = "block";
    }
    } else {
        result_div.style.display = "none";
    }

    document.body.appendChild(result_div);
}

function ValidURL(string) {
    var url = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (url !== null);
}

function deleteElement(element) {
    var firstChild = element.firstElementChild;
    while (firstChild) {
        firstChild.remove();
        firstChild = element.firstElementChild;
    }
}