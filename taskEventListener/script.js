document.getElementById("bgColor").addEventListener("change", changeBackgroundColor);

function changeBackgroundColor(){
    const BGC = document.getElementById("bgColor").value;
    document.getElementById("leftBox").style.backgroundColor = BGC;
    if(BGC==="#000000"){
    document.getElementById("heading").style.color ="#ffff";
    document.getElementById("paragraph").style.color ="#ffff";

    }
}

document.getElementById("headingColor").addEventListener("change", changeHeadingColor);

function changeHeadingColor(){
    const headingClr = document.getElementById("headingColor").value;
    document.getElementById("heading").style.color = headingClr;
}


document.getElementById("paragraphColor").addEventListener("change", changeParagraphColor);

function changeParagraphColor(){
    const paragraphClr = document.getElementById("paragraphColor").value;
    document.getElementById("paragraph").style.color = paragraphClr;
}

function reset(){
    window.location.reload();
}