//●more（もっと見るボタン）
let item = document.querySelectorAll(".photo___img");
let n = 0;
let btn = document.querySelector(".view");
item[item.length-1].classList.add("remove");
btn.addEventListener("click",function(){
    if(n == 0){
        item[item.length-1].classList.remove("remove");
        n = 1;
        btn.innerText="閉じる";
    }else{
        item[item.length-1].classList.add("remove");
        n = 0;
        btn.innerText="もっと見る";
    }
});

//画像の切り替え
//①小さい画像たちに同じクラス名をつける（class=“A”）
//②一番大きな画像にクラス名をつける（class=“B”）
let aImg = document.querySelectorAll("".A)
let bImg = document.querySelector("".B);
for(let i=0;i<aImg.length;i++){
    aImg[i].addEventListener("",function(){
        let code = aImg[i].getAttribute("src");
        bImg.setAttribute("src",code)
    })
}

//●sold out
let a = document.querySelectorAll(“.ボタンのクラス名（CSSで先に見た目を作る）“)
for(let i=0;i<a.length;i++){
    let text = a[i].innerHTML;
    if(text ==“true”){
        a[i].innerHTML=“在庫有”
    }else{
        a[i].innerHTML=“在庫無”
    }
}
