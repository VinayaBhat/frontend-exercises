// Enter your code here
function palindrome(number) {
    var remainder, reverse_Num = 0;
    var num_Copy = number;
    while (number > 0) {
        remainder = number % 10;
        number = Math.floor(number / 10);
        reverse_Num = reverse_Num * 10 + remainder;
    }
    if (reverse_Num == num_Copy) {
        return true;
    }
    return false;
}

function checkPositive(number) {
    if (number > 0) {
        return true;
    } else {
        return false;
    }
}



function checkforPalindrome(event) {
    var number = document.getElementById("number").value;
    var result = document.getElementById("result");
    if (checkPositive(number)) {
        if (palindrome(number)) {
            result.innerHTML = "Yes";
        } else {
            result.innerHTML = "No";
        }
    } else {
        result.innerHTML = "No";
    }
}

