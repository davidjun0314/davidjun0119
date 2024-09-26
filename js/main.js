(function(){
  const spanEl = document.querySelector('main h2 span')
  const txt = ['jyc', 'Educator','Linguist', 
'webpage developer']
let index = 0;
let currentTxt =txt[index].split('')

function writeTxt(){
    spanEl.textContent +=currentTxt.shift()
    // 배열요소를 앞에서 부터 하나씩 출력
    //shit(). 배열 맨 앞요소를 추출하고 추출한 요소를 원본 배열에서 삭제

    if (currentTxt.length!==0){
        setTimeout (writeTxt, Math.floor (Math.random() * 100))

    }else{
        currentTxt = spanEl.textContent.split('')
        setTimeout(deleteTxt, 3000)
    }

    }

writeTxt()

function deleteTxt(){
    currentTxt.pop()
    // pop():배열요소를 끝에서부터 삭제
    
    spanEl.textContent = currentTxt.join('')

    if(currentTxt.length !==0){
        setTimeout(deleteTxt,Math.floor(Math.random() * 100))
    }else{
        // 다음문장으로 넘어가기
        index =(index+1)% txt.length
        currentTxt = txt[index].split('')
        writeTxt()
    }

}
})()

(function(){
    
})
function sc(){
    let bs = window.scrollY
    
    if(bs>0){
        headerEL.classList.add('on')

    }else{
        headerEL.classList.remove('on')
    }
}

