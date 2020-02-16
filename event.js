function events() {
    var a = document.getElementById("type").nodeValue;
    var b = document.getElementById("title").nodeValue;
    var c = document.getElementById("dateFrom").nodeValue;
    var d = document.getElementById("dateTo").nodeValue;
    var e = document.getElementById("postingDate").nodeValue;

    if (a == ""){
        alert("Choose an Event Type...");
        return false;
    }
    else if (b == ""){
        alert ("Choose an Event Title...");
        return false;
    }
    else if (c == ""){
        alert ("Enter a Start Date...");
        return false;
    }
    else if (d == ""){
        alert ("Enter an End Date...");
        return false;
    }
    else if (e == ""){
        alert ("Enter a Posting Date...");
        return false;
    }
    else
        submit();
}
function submit(){
    alert("Event has been created...")
    document.getElementsByClassName("form").submit();
}