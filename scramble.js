const msg=document.querySelector('.msg')
const guess=document.querySelector('input')
const btn=document.querySelector('.btn')
let play=false
let newWords=""
let randWords=""
let words=["Afghanistan", "Albania", "Algeria", "America", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia"]

const createNewWords=()=>{
    const randomNumber=Math.floor(Math.random()*words.length)
    const newTempWords=words[randomNumber]
    return newTempWords
}

const scrambleWords=(arr)=>{
    for(let i=arr.length-1;i>0;i--){
        let temp=arr[i]
        let j=Math.floor(Math.random()*(i+1))
        arr[i]=arr[j]
        arr[j]=temp
    }
    return arr
}

btn.addEventListener('click',()=>{
    if(!play){
        play=true
        btn.innerHTML="Guess"
        guess.classList.toggle('hidden')
        newWords=createNewWords()
        randWords=scrambleWords(newWords.split("")).join("")
        msg.innerHTML=`Guess the word ${randWords}`

    }
    else{
        let tempWord=guess.value
        if(tempWord===newWords){
            play=false
            msg.innerHTML=`Awesome It's correct.It is ${newWords}`
            btn.innerHTML="Star Again"
            guess.classList.toggle('hidden')
            guess.value=""
        }
        else{
            msg.innerHTML=`Sorry Sir.It's not correct.Plz Try Again ${randWords}`
        }
    }
})