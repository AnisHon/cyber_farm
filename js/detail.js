let minus = document.getElementById("minus");
let add = document.getElementById("add");
let count = document.getElementById("count")
let total = document.getElementById("price");
let single = Number(document.getElementById("single_price").innerHTML);



add.onclick = function() {
    if (Number(count.value) < 10) {
        count.value = Number(count.value) + 1;
        change_price(Number(count.value));
    }
}

minus.onclick = function() {
    if (Number(count.value) > 1) {
        count.value = Number(count.value) - 1;
        change_price(Number(count.value));
    }
    
}

count.onkeydown = function(e) {
    const keyCode = e.key;
    let validate = isNumber(keyCode);
    if (validate) {
        change_price(Number(count.value + keyCode));
    }
    return validate || keyCode === "Backspace" || keyCode === "del";
    
}
function isNumber(keyCode) {
    // 数字
    if (keyCode >= 0 && keyCode <= 10) {
        if (Number(keyCode) === 0 && count.value === "") {
            return false
        }
        return Number(count.value + keyCode) <= 10;
        
    }
    // Backspace, del, 左右方向键
    return true;

}


const DETAIL = 1;
const PRODUCER = 2;
const COMMENT = 3;

let cols = document.getElementsByClassName("col");
let list = document.getElementsByClassName("col_list");
for (let i = 0; i < cols.length; i++) {
    cols[i].hidden = true;
}
cols[0].hidden = false;
function changePage(num) {

    for (let i = 0; i < cols.length; i++) {
        cols[i].hidden = true;
        list[i].classList.remove("active_item");
    }
    let element = cols[num - 1];
    element.hidden = false;
    list[num - 1].classList.add("active_item");
}

function change_price(num) {
    total.innerHTML = String(single * num);
}