// Enter your code here

// Input:
// http://www.example.com?name=r2d2&email=r2d2%40me.com&human=no

// Output
// http://www.example.com
// name: r2d2
// email: r2d2@me.com
// human: no


var output = document.getElementById("result");
output.style.display = "none";

function url_submitted(event) {
    event.preventDefault();
    var str = document.getElementById("comments").value;
    //to avoid empty string on submit
    if (ValidURL(str)) {
        var decodedurl = decodeURIComponent(str);

        if (decodedurl.includes('?')) {
            console.log("yo")
            var url = decodedurl.split('?')[0];
            var url_element = document.getElementById("url");
            url_element.innerHTML = url;
            var parameter = document.getElementById("params");
            delete_parameters(parameter);               
            let params = decodedurl.split('?')[1].split('&');
            if (params && params.length) {
                params.map(keyValue => {
                    let keyValuePair = keyValue.split('=')
                    let key = keyValuePair[0];
                    let value = keyValuePair[1];
                    var p_element = document.createElement("p");
                    p_element.className = "mt-2 mb-2";
                    p_element.innerHTML = key + ": " + value;
                    parameter.appendChild(p_element);
                })
            }

        } else {
            var url_element = document.getElementById("url");
            url_element.innerHTML = decodedurl;
            var parameter = document.getElementById("params");
            delete_parameters(parameter);              
        }
        output.style.display = "block";
    }else{
        output.style.display = "none"; 
    }

}

function ValidURL(string) {
    var url = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (url !== null)
};

function delete_parameters(parameter){
    
    var firstChild = parameter.firstElementChild;
    while (firstChild) {
        firstChild.remove();
        firstChild = parameter.firstElementChild;
    }
}
