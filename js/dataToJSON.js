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
        if (elem.innerText !== "" && elem.innerText !== "—" && elem.innerText !== "…  …") {
            let buffer = elem.innerText.replace("⊛ ", "");
            ginger.push(buffer);
        }
    }
    listthree.push(ginger);
}

console.log(JSON.stringify(listthree));