
let root = document.documentElement;
if(screen.width>600){
    root.style.setProperty('--scale', "1");

}
else{
    root.style.setProperty('--scale', "2");

}

function res(){
    if(screen.width>600){
        root.style.setProperty('--scale', "1");

    }
    else{
        root.style.setProperty('--scale', "2");

    }
    alert(root.style.getPropertyValue('--scale'));

};
window.onresize =res();


function filterOn(){
    var checkBoxBlur = document.getElementById("blurOn");
    var checkBoxGray = document.getElementById("grayscaleOn");
    var checkIvert = document.getElementById("invertOn");
    var checkHueDegree = document.getElementById("hue-RotateOn");
    var blurObject = document.getElementById("blurObject");

    // If the checkbox is checked, display the output text

    var _filter="";
    if (checkBoxBlur.checked == true){
        _filter=_filter+ "blur(1px)";
    }
    if (checkBoxGray.checked == true){
        _filter=_filter+ "grayscale(100%)";
    }
    if (checkIvert.checked == true){
        _filter=_filter+ "invert(100%)";
    }
    if (checkHueDegree.checked == true){
        _filter=_filter+ "hue-rotate(90deg)";
    }
    blurObject.style.filter = _filter;
}
  