var xmlhttp = new XMLHttpRequest();
var url = "http://demo2469824.mockable.io/best-restaurants";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var bests = JSON.parse(this.responseText);
        bestResturants(bests);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function bestResturants(bests) {
    var arr = bests["restaurants"];
    for (var i = 0; i < 3; i++) {
        var element = document.getElementById("bestspic" + (i + 1));
        var img = document.createElement("img");
        img.src = arr[i]["imgUrl"];
        element.append(img);

        element = document.getElementById("bestsname" + (i + 1));
        element.innerText = arr[i]["name"];

        element = document.getElementById("bestsnumrate" + (i + 1));
        element.innerText = arr[i]["numOfRates"];

        element = document.getElementById("bestsrate" + (i + 1));
        element.innerText = arr[i]["rate"];

        element = document.getElementById("bestsaddress" + (i + 1));
        element.innerText = arr[i]["address"];

        element = document.getElementById("bestsfood" + (i + 1));
        for (var j = 0; j < arr[i]["foods"].length; j++) {
            var el = document.createElement("li");
            if (arr[i]["foods"][j] === "pizza")
                el.innerText = "پیتزا";
            else if (arr[i]["foods"][j] === "fastfood")
                el.innerText = "فست فود";
            else if (arr[i]["foods"][j] === "sandwich")
                el.innerText = "ساندویچ";
            else if (arr[i]["foods"][j] === "burger")
                el.innerText = "برگر";

            element.append(el)
        }
    }

    for (i = 3; i < arr.length; i++) {
        img =  document.createElement("img");
        img.src = arr[i]["imgUrl"];
        document.getElementById("goodres").getElementsByTagName("a")[i-3].
        append(img);

        var p = document.createElement("p");
        p.innerText = arr[i]["name"];
        document.getElementById("goodres").getElementsByTagName("a")[i-3].
        append(p);
    }

}


var xmlhttp2 = new XMLHttpRequest();
var url2 = "http://demo2469824.mockable.io/foods";

xmlhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // var bests = XML.parse(this.responseText);
        foods(this.responseText);
    }
};
xmlhttp2.open("GET", url2, true);
xmlhttp2.send();


function foods(xml) {
    var parser = new DOMParser();
    var foods = parser.parseFromString(xml, "text/xml");

    var whatNeedFood = document.getElementById("whatneedfood");

    for(var i = 0; i < 4; i++) {
        var p = document.createElement("p");
        if (foods.getElementsByTagName("foods")[0].
        getElementsByTagName("food")[i].getElementsByTagName("name")[0].innerHTML === "sandwich")
            p.innerHTML = "ساندویچ";
        else if (foods.getElementsByTagName("foods")[0].
        getElementsByTagName("food")[i].getElementsByTagName("name")[0].innerHTML === "burger")
            p.innerHTML = "برگر";
        else if (foods.getElementsByTagName("foods")[0].
        getElementsByTagName("food")[i].getElementsByTagName("name")[0].innerHTML === "pizza")
            p.innerHTML = "پیتزا";
        else if (foods.getElementsByTagName("foods")[0].
        getElementsByTagName("food")[i].getElementsByTagName("name")[0].innerHTML === "kebab")
            p.innerHTML = "کباب";
        else if (foods.getElementsByTagName("foods")[0].
        getElementsByTagName("food")[i].getElementsByTagName("name")[0].innerHTML === "salad")
            p.innerHTML = "سالاد";

        p.innerHTML += "<br/>";

        var num = toPersianNum(foods.getElementsByTagName("count")[i].innerHTML);
        p.innerHTML += num + " رستوران فعال";
        whatNeedFood.getElementsByClassName("_what-need-back")[3-i].appendChild(p);
    }


    for (i = 4; i < foods.getElementsByTagName("foods")[0].getElementsByTagName("food").length; i++) {
        var el = document.getElementById("morefoods");
        var a = document.createElement("a");
        a.href = "#";
        if (foods.getElementsByTagName("foods")[0].
        getElementsByTagName("food")[i].getElementsByTagName("name")[0].innerHTML === "salad")
            a.innerHTML = "سالاد";
        else if (foods.getElementsByTagName("foods")[0].
        getElementsByTagName("food")[i].getElementsByTagName("name")[0].innerHTML === "iranian")
            a.innerHTML = "غذای ایرانی";
        else if (foods.getElementsByTagName("foods")[0].
        getElementsByTagName("food")[i].getElementsByTagName("name")[0].innerHTML === "pasta")
            a.innerHTML = "پاستا";
        else if (foods.getElementsByTagName("foods")[0].
        getElementsByTagName("food")[i].getElementsByTagName("name")[0].innerHTML === "fish")
            a.innerHTML = "ماهی";
        else if (foods.getElementsByTagName("foods")[0].
        getElementsByTagName("food")[i].getElementsByTagName("name")[0].innerHTML === "breakfast")
            a.innerHTML = "صبحانه";
        else if (foods.getElementsByTagName("foods")[0].
        getElementsByTagName("food")[i].getElementsByTagName("name")[0].innerHTML === "juice")
            a.innerHTML = "نوشیدنی";
        else if (foods.getElementsByTagName("foods")[0].
        getElementsByTagName("food")[i].getElementsByTagName("name")[0].innerHTML === "steak")
            a.innerHTML = "استیک";
        else if (foods.getElementsByTagName("foods")[0].
        getElementsByTagName("food")[i].getElementsByTagName("name")[0].innerHTML === "soup")
            a.innerHTML = "سوپ";

        el.appendChild(a);
    }
}

function toPersianNum( num, dontTrim ) {

    var i = 0,

    dontTrim = dontTrim || false,

    num = dontTrim ? num.toString() : num.toString().trim(),
    len = num.length,

    res = '',
    pos,

    persianNumbers = typeof persianNumber == 'undefined' ?
        ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'] :
        persianNumbers;

    for (; i < len; i++)
        if (( pos = persianNumbers[num.charAt(i)] ))
            res += pos;
        else
            res += num.charAt(i);

    return res;
}


