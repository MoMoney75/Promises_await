let h1 = document.querySelector('h1')
let container = document.getElementById('container')
let list = document.querySelector('ul')
let base_url="http://numbersapi.com/"
let lucky_num = Math.floor(Math.random() * 100)


async function getMultipleFacts(){
    for(let i=1;i <=4; i++){
        let response = await axios.get(`${base_url}${lucky_num}?json`)
        let li = document.createElement('li')
            for(let x=1; x<=4; x++){
            li.innerText = response.data.text
            list.append(li)}
}}


getMultipleFacts()


