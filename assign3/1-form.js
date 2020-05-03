// Enter your code here

function form_submission(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    if (name != "" && email != "") {
        var reg_Status = document.getElementById("reg_status").value;
        var class_Section;
        if (document.getElementById("410").checked) {
            class_Section = document.getElementById("410").value;
        } else if (document.getElementById("510").checked) {
            class_Section = document.getElementById("510").value;
        } else {
            class_Section = "";
        }
        var courses = "";
        var checkboxes = document.getElementsByName("courses");
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                if (courses.length > 0) {
                    courses = courses.concat(", ")
                    courses = courses.concat(checkboxes[i].value)
                } else {
                    courses = courses.concat(checkboxes[i].value)
                }
            }

        }

        var notes = document.getElementById("extranotes").value;
        console.log("name: "+name);
        console.log("email: "+email);
        console.log("registration status: "+reg_Status);
        console.log("class section: "+class_Section);
        console.log("courses: "+courses);
        console.log("class goals: "+notes);
    }


};