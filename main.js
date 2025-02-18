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
let resultText = document.querySelector(".result-text")
let chanceArea = document.querySelector(".chance-area")
let resetBtn = document.getElementById("reset-btn")
let resultImg = document.querySelector(".result-img")
let chances = 3
let userValueList = []

goBtn.addEventListener("click",numberGame)
resetBtn.addEventListener("click",reset)   
inputBox.addEventListener("focus",focusInput)


function randomNum(){
   answer =  Math.floor(Math.random()*100) + 1
   console.log("정답:",answer)
   chanceArea.innerHTML = `남은 기회: ${chances} (정답: ${answer}) (입력:${userValueList})`
   return answer
}

function numberGame(){
    let inputNum = Number(inputBox.value)
    if(inputNum < 1 || inputNum > 100 ){
        resultText.textContent = "1부터 100사이의 숫자를 입력해요요" 
        return    
    }
    if(userValueList.includes(inputNum) ){
        resultText.textContent = "이미 입력된 값이에요" 
        return    
    }
    userValueList.push(inputNum)

    console.log(inputNum)
    if(inputNum === answer){
        resultText.textContent = "정답!"
        goBtn.disabled = true;
        resultImg.src ="https://media.giphy.com/media/3zMJLjPO5nVCj9n0gc/giphy.gif?cid=790b7611ss6tlyy8teo5ng4jrd78yyg7eyc9ux9uwj557qka&ep=v1_gifs_search&rid=giphy.gif&ct=g"
    } else if (inputNum > answer){
        resultText.textContent = "Down!"
        resultImg.src = "https://media.giphy.com/media/Js7cqIkpxFy0bILFFA/giphy.gif?cid=790b7611ngoa950uzizdzug1qd3ubkwzc4t2sz17ciywjg0a&ep=v1_gifs_search&rid=giphy.gif&ct=g"
    } else if (inputNum < answer){
        resultImg.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmlqamdiam81dmdrZHZ3aGs3MmtoMmVrcHpqenV3eDliczhyb29qbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7TKHVU0xsgGDCyPu/giphy.gif"
        resultText.textContent = "up!"
    }

    if(chances === 1){
        resultText.textContent = "다시한번 시도하세요!"
        goBtn.disabled = true;
        resultImg.src ="https://media.giphy.com/media/eCUKKmVrVN5FSvNIW7/giphy.gif?cid=ecf05e47yvy4mfptp9xr41c3z22c3lp1dexho0t2quw5psm8&ep=v1_gifs_related&rid=giphy.gif&ct=g"
    }

    chances -= 1
    chanceArea.innerHTML = `남은 기회: ${chances} (정답: ${answer}) (입력:${userValueList})`

}

function focusInput(){
    inputBox.value = ""
}


function reset(){
    resultText.textContent = "죽기 싫다면 맞춰라"
    chances = 3;
    randomNum()
    focusInput()
    userValueList = []
    goBtn.disabled = false;
    resultImg.src ="https://media.giphy.com/media/25LbA5gcDNM5N7sHHy/giphy.gif?cid=ecf05e47dlkoan2ggiyw3gy869et9rj4es5lwxtzahslch00&ep=v1_gifs_related&rid=giphy.gif&ct=g"
    chanceArea.innerHTML = `남은 기회: ${chances} (정답: ${answer}) (입력:${userValueList})`
}

randomNum()