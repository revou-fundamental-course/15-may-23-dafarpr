
function Luas(){
    var s = document.getElementById("sisi-luas").value;
    var l = s * s;

    document.getElementById("hasil-luas").innerHTML = "L = S x S <br> L = " + s + " x " + s + "<br> L = " + l;
}

function Keliling(){
    var s = document.getElementById("sisi-keliling").value;
    var k = 4 * s;

    document.getElementById("hasil-keliling").innerHTML = "K = 4 x S <br> K = 4 x " + s + "<br> K = " + k;
}

function LuasPP(){
    var p = document.getElementById("panjang-luas").value;
    var l = document.getElementById("lebar-luas").value;

    var w = p * l;

    document.getElementById("hasil-luasPP").innerHTML = "L = P x L <br> L = " + p + " x " + l + "<br> L = " + w;
}

function KelilingPP(){
    var p = document.getElementById("panjang-keliling").value;
    var l = document.getElementById("lebar-keliling").value;

    var w = 2 * p + 2 * l;

    document.getElementById("hasil-kelilingPP").innerHTML = "K = 2 x (P + L) <br> K = 2 x (" + p + " + " + l + ") <br> K = " + w;
}

//reset
function resetLuas(){
    document.getElementById("sisi-luas").value = "";
    document.getElementById("hasil-luas").innerHTML = "";
}

function resetKeliling(){
    document.getElementById("sisi-keliling").value = "";
    document.getElementById("hasil-keliling").innerHTML = "";
}
function resetLuasPP(){
    document.getElementById("panjang-luas").value = "";
    document.getElementById("lebar-luas").value = "";

    document.getElementById("hasil-luasPP").innerHTML = "";
}

function resetKelilingPP(){
    document.getElementById("panjang-keliling").value = "";
    document.getElementById("lebar-keliling").value = "";

    document.getElementById("hasil-kelilingPP").innerHTML = "";
}
//cek input
function checkInput(){
    var s = document.getElementById("sisi-luas").value;

    if(s == ""){
        alert("Tidak Boleh Kosong");
        return false;
    }
}