// Enter your code here

function phrasing(event){
    event.preventDefault();
    var text=document.getElementById("userinput").value;
    var str_arr=text.split(/[\\,!?.;|]/);
    str_arr = str_arr.filter(str => str.trim().length > 0);
    var parent_element=document.getElementById("results");
    deleteChild(parent_element);
    for(var i=0;i<str_arr.length;i++){      
        var div_str=document.createElement("div");      
        div_str.innerHTML=str_arr[i];
        parent_element.appendChild(div_str);
        var hr_element=document.createElement("hr");
        parent_element.appendChild(hr_element);
    }
}

function deleteChild(element) {
    var firstChild = element.firstElementChild;
    while (firstChild) {
        firstChild.remove();
        firstChild = element.firstElementChild;
    }
}