// 配列 / ビンゴの参加者リスト
var nameList = ["小菅","佐藤","田中","小林","中村","本田"];

// timer, num グローバル変数を宣言
var timer, num;

// ルーレットスタート
var rouletteStart = function(){
// setInterval:一定間隔で繰り返し同じプログラムを実行 末尾の100(0.1秒)で間隔を指定
// timerはグローバル変数
  timer = setInterval(function(){

// numはグローバル変数
  num = Math.floor(Math.random()*nameList.length) // nameList.lengthで6
// nameList内の最初のElementを返す。一致するものが見つからない場合は null を返す。
// innerText　HTMLElementのプロパティ　ノードとその子孫の「レンダリングされている」テキスト内容を示す
  document.querySelector("#number").innerText = nameList[num];
  },100);

  changeDisable();
};

// ルーレットストップ
var rouletteStop = function(){
  // clearInterval(timer) → setIntervalを止める　// timerはグローバル変数
  clearInterval(timer);
  // nameListから参加者を1つ削除(数字を2にすると2つ削除)　// numはグローバル変数
  nameList.splice(num,1);
  // classList操作
  // createElement("li")でliタグを生成 → 変数listに入れる
  var list = document.createElement("li");
  // classList操作
  // listに、classList.addでresult-itemクラスを加える → <li class="result-item"></li>を生成
  list.classList.add("result-item");

  // innerTextで、<li class="result-item"></li>の内側に、確定した名前(中村など)を組み込む
  list.innerText = document.querySelector("#number").innerText;
  // ul class="result-list"に、appendChildで子要素を加える
  // list変数の中身result-item(<li class="result-item"></li>)を最後に加える
  document.querySelector(".result-list").appendChild(list);

  changeDisable();
};

// 抽選ボタン、ストップボタン、それぞれ同じボタンを押せなくする
var changeDisable = function(){
  // classList操作
  // classList.toggle / disableというclassがついていなければ追加、ついていれば削除
  document.querySelector("#btn-start").classList.toggle("disable");
  //最初はhtml側でストップボタンをdisableに設定してある
  document.querySelector("#btn-stop").classList.toggle("disable");
};

// htmlで、それぞれボタンを押されたときに、それぞれ関数が実行される
document.querySelector("#btn-start").addEventListener("click",rouletteStart);
document.querySelector("#btn-stop").addEventListener("click", rouletteStop);








