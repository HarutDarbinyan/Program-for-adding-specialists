
function C3() {
    var a = $("#inp").val();
    var b = $("#inp1").val();
    var c = $("#inp2").val();
    $("#C3").append("<tr>" + "<td>" + a + "</td>" + "<td>" + b + "</td>" + "<td>" + c + "</td>" + "</tr>");

}
function web() {
    var a = $("#inp").val();
    var b = $("#inp1").val();
    var c = $("#inp2").val();
    $("#web").append("<tr>" + "<td>" + a + "</td>" + "<td>" + b + "</td>" + "<td>" + c + "</td>" + "</tr>");

}
function java() {
    var a = $("#inp").val();
    var b = $("#inp1").val();
    var c = $("#inp2").val();
    $("#java").append("<tr>" + "<td>" + a + "</td>" + "<td>" + b + "</td>" + "<td>" + c + "</td>" + "</tr>");

}
$('#butt').click(function () {
    $('#buttonn').show();
});
$('#but').click(function () {
    $('#buttonn').hide(4000);
});


