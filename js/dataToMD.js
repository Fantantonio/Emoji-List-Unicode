function initialIsCapital(word) {
    return word[0] !== word[0].toLowerCase();
}


var listone = [];
for (let item of $("tbody").children) {
    if (item.firstChild.innerHTML !== '<a target="text" href="../format.html#col-num">№</a>') {
        listone.push(item);
    }
}

var listtwo = [];
for (let item of listone) {
    listtwo.push(item.cells);
}

var listthree = [];
for (let item of listtwo) {
    let ginger = [];
    for (let elem of item) {
        if (elem.innerText !== "" && elem.innerText !== "—") {
            ginger.push(elem.innerText);
        }
    }
    listthree.push(ginger);
}

var result = JSON.stringify(listthree);
var result = JSON.parse(result);

var bigMD = "";
var flag = false;
var index = "";
for (let arr of result) {
    // is a title
    if (arr.length === 1) {
        // is a subtitle
        if (!initialIsCapital(arr[0])) {
            arr[0] = arr[0].replace(" & ", "-and-");
            bigMD += "\n#### " + arr[0] + "\n";
            index += "  * [" + arr[0] + "](#" + arr[0] + ")\n";
        }
        else {
            arr[0] = arr[0].replace(" & ", "-and-");
            bigMD += "\n## " + arr[0];
            index += "* [" + arr[0] + "](#" + arr[0] + ")\n";
        }
        flag = true;
    }
    // is an element
    else {
        // first element of a table
        if (flag) {
            flag = false;
            bigMD += "\n\n| Number | Code | Emoji | CLDR Short Name |\n" + "|:---|:---:|:---:|---:|\n";
        }
        // is a new element
        if (arr.length === 5) {
            arr.splice(3, 1);
        }
        bigMD += "| ";
        for (var i = 0; i < arr.length; i += 1) {
            if (i === 3) {
                arr[i] = arr[i].replace("⊛ ", "");
                bigMD += "`:" + arr[i] + ":` |\n";
            }
            else {
                bigMD += arr[i] + " | ";
            }
        }
    }
}


bigMD = index + "<br><br><br>" + bigMD;
// print .md code in console
console.log(bigMD);