// Enter your code here
function highlight_text(event) {
    event.preventDefault();
    var word = document.getElementById("input").value;
    var text_element = document.getElementById("intro");  
    //Removing Highlight on old result
    var old_searchResult = text_element.innerHTML.replace(/(<span style="background-color:yellow">|<\/span>)/igm, "");
    text_element.innerHTML = old_searchResult;
    //Hightlighting new word
    var replace_word = new RegExp('\\b' + word + '\\b', "g")
    var new_SearchResult= text_element.innerHTML.replace(replace_word,'<span style="background-color:yellow">'+word+'</span>');
    text_element.innerHTML=new_SearchResult;
}
