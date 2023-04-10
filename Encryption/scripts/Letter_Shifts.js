

//ROT13
document.getElementById("EncryptBtn").onclick=Encrypt()



document.getElementById("Decrypt").onclick=Decrypt()


function  Encrypt() {
    let password=document.getElementById("inputpass")[0].value()
    window.alert(password)
    let Encrypted="";
    for(let i=0; i<=password.length; i++)
    {
        Encrypted=Encrypted+(i+13)
    }
    document.getElementById("output").innerText = Encrypted;
return null;
}

function Decrypt() {

}