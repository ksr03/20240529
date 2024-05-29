import "./styles.css";

const color_palette = ["#86E3CE", "#D0E6A5", "#FFDD94", "#FA897B", "#CCABD8"];
let setDrawTimeout;

// ボタンの作成
function generate() {
  for (var num = 9; 0 < num; num--) {
    var elm = document.createElement("button");
    elm.innerHTML = num;
    elm.setAttribute("id", num);
    elm.setAttribute("class", "circle");
    var function_name = "remove(" + num + ")";
    elm.setAttribute("onclick", function_name);
    document.getElementById("main").appendChild(elm);
  }
  change();
}
generate();

// 位置と見た目を変更
function change() {
  for (var num = 9; next <= num; num--) {
    // 位置を変更
    var left = 10;
    var top = 100;
    left += Math.floor(Math.random() * 400);
    top += Math.floor(Math.random() * 400);
    document.getElementById(num).style.left = "" + left + "px";
    document.getElementById(num).style.top = "" + top + "px";

    // 見た目を変更
    var size = 60 + Math.floor(Math.random() * 50);
    document.getElementById(num).style.width = "" + size + "px";
    document.getElementById(num).style.height = "" + size + "px";
    document.getElementById(num).style.borderRadius = "" + size + "px";
    var color_no = Math.floor(Math.random() * 5);
    document.getElementById(num).style.backgroundColor =
      color_palette[color_no];
  }
}

// ボタン削除
var next = 1;
document.remove = function (id) {
  if (id == next) {
    const element = document.getElementById(id);
    element.classList.add("pop-out");

    element.addEventListener(
      "animationend",
      function () {
        document
          .getElementById("main")
          .removeChild(document.getElementById(id));
        next += 1;
        if (next < 10) {
          document.getElementById("next-view").textContent = "next: " + next;
        } else {
          const nextView = document.getElementById("next-view");
          nextView.textContent = "Congratulations!";
          nextView.classList.add("congratulations");
        }
        reset_timer();
      },
      { once: true }
    );
  }
};

// 位置・見た目の変更とタイマーリセット
function reset_timer() {
  if (setDrawTimeout) {
    clearTimeout(setDrawTimeout);
  }
  change();
  setDrawTimeout = setTimeout(reset_timer, 5000);
}

document.getElementById("next-view").textContent = "next: " + next;
setDrawTimeout = reset_timer();
