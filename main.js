// 랜덤 숫자 기능
// input 숫자 입력
// go를 누르면 함수 가동
//      함수   
//      input 숫자가 랜덤숫자가 크다면 down!
//      input 숫자가 랜덤숫자보다 작다면 up!
//      input 숫자가 랜덤숫자랑 같다면 정답!
//    기타기능 기회는 3회 - 3회 넘기면 Go 비 활성화
//      리셋 버튼을 누르면 랜덤숫자와 기회 초기화
let answer =  ""
let inputBox = document.getElementById("input-box")
let goBtn = document.getElementById("go-btn")

goBtn.addEventListener("click",numberGame)


function randomNum(){
   answer =  Math.floor(Math.random()*100)
   console.log(answer)
   return answer
}

randomNum()

function numberGame(){
    let inputNum = Number(inputBox.value)
    
    console.log(inputNum)
    if(inputNum === answer){
        console.log("정답!")
    } else if (inputNum > answer){
        console.log("Down!")  
    } else if (inputNum < answer){
        console.log("up!")
    }
}