$(document).ready(function () {
    var str = "";
    $(".button").on({
      click: function () {
        str = str + $(this).val();
        $("input").val(str);
      },
    });
    $(".equal").click(function () {
      var a = $("input").val();
      var last_char = a.slice(-1);
      if (
        last_char == "-" ||
        last_char == "+" ||
        last_char == "/" ||
        last_char == "%" ||
        last_char == "*"
      ) {
        alert("Check input!");
      }
      // Check for parentheses errors
      if (
        (a.indexOf("(") === -1 && a.indexOf(")") !== -1) ||
        (a.indexOf("(") !== -1 && a.indexOf(")") === -1)
      ) {
        alert("Parentheses error!");
      }

      var res = eval(a);
      $("input").val(res);
      str = res;
    });
    $(".clear").click(function () {
      str = "";
      $("input").val("");
    });
    $(".erase").click(function () {
      str=$(input).val();
      str = str.substring(0, str.length - 1);
      $("input").val(str);
    });
  });