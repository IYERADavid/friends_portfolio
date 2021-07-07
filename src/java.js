const text_list = document.getElementsByClassName('word');
const slider_1 = document.getElementById('slider');
const slider_2 = document.getElementById('intro'); 
const big_text = document.getElementsByClassName('big-text');
const email_info = document.getElementsByClassName('email_info');

//console.log(text_list.setAttribute('style','transform: translateY(-100%);'))

for(let i=0; i <= 2; i++){
    setTimeout(()=>{
        text_list[i].setAttribute('style','transform: translateY(0%); transition-duration: 1s;')
    },i*250)
}
setTimeout(()=>{
    slider_1.setAttribute('style','transform: translateY(-100%); transition-duration: 1.5s;')
},2000)
setTimeout(()=>{
    slider_2.setAttribute('style','transform: translateY(-100%); transition-duration: 1s;')
},2500)
for(let i=0; i <= 2; i++){
    setTimeout(()=>{
        big_text[i].setAttribute('style','opacity: 1.5; transition-duration: 1s;')
    },3500+(i*500))
}

const valid_email = (email) =>{
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}

function send_email () {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "webmaker6official@gmail.com",
        Password : "aoyduqpenibftyej",
        To : "webmaker6official@gmail.com",
        From : email_info[0].value,
        Subject : email_info[2].value,
        Body : `Name: ${email_info[1].value} <br/> Message: ${email_info[3].value}`
    }).then( () =>{
        if(email_info[0].value != "" && valid_email(email_info[0].value) === true){
            alert('Message sent successful');
        }
    });
}
