function buttonEncrypt(){

    const encrypt = document.getElementById("textin").value;

    const encrypted = encrypt.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    document.getElementById("textout").value = encrypted;

    document.getElementById("imgdesappear").style.display = "none";

    document.getElementById("textin").value = "";

}

function buttonDecrypt(){

    const decrypt = document.getElementById("textin").value;

    const decrypted = decrypt.replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ai/gi, 'a').replace(/ober/gi, 'o').replace(/ufat/gi, 'u').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    document.getElementById("textout").value = decrypted;

    document.getElementById("textin").value = "";

}

/*function buttonCopy(){

    const copyTextOut = document.getElementById("texout");

    copyTextOut.select();

    document.ExecCommand("copy");

    document.getElementById("textout").value = " ";
    
}*/

function buttonCopy2() {

    const textout = document.getElementById("textout");

    const answer = document.getElementById("copyAnswer");

    const copy = document.getElementById("copyButton");

    copy.addEventListener("click", function(e) {
        textout.select();
        try {
            const successful = document.execCommand('copy');

            if(successful) answer.innerHTML = 'Copied';
            else answer.innerHTML = 'Not Copied';
        } catch (err) {

            answer.innerHTML = 'Browser not supported';
        }
    });

    
}
