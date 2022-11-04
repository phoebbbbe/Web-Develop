function ChangeFont() {
    document.getElementById('title').style.cssText = "color: blue;font-size:25px;";
}

function OperateVariable() {
    var num = 5;
    var num2 = 3;
    document.write(num);
    document.write(num2);
}

function PrintTable() {
    document.write("<table>")
        for (i = 2; i < 10; i++) {
            document.write("<tr>")
            for (j = 0; j < 10; j++) {
                document.write("<td style=width:80px;>" + i + "*" + j + "=" + (i * j) + "</td>")
            }
            document.write("</td>")
        }
        document.write("</table>")
}

function ChangeWidth(size) {
    let _width = `${size}px`;
    document.getElementById("gradetable").style.width = _width;
}

function ChangeBorderAndSpace(size){
    let _space = `${size}px`;
    document.getElementById("gradetable").style.borderSpacing = _space;
}

function ChangeColor(r, g, b) {
    let _color = `rgb(${r},${g},${b})`;
    document.getElementById("gradetable").style.backgroundColor = _color;
}

function InitTable() {
    document.getElementById("gradetable").style.cssText = " width: 300px; border:2px solid rgb(0, 0, 0); background-color: rgb(236, 222, 188); text-align: center;"
}