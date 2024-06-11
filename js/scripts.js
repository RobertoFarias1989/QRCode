
//variáveis
const container = document.querySelector(".container");

const qrCodeBtn = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input");

const qrCodeImg = document.querySelector("#qr-code img")


//Eventos

//Gerar Qr Code
function generateQrCode() {    
    const qrCodeInputValue = qrCodeInput.value;

    if(!qrCodeInputValue) return;


    qrCodeBtn.innerHTML = "Gerando código...";


    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    //gero a imagem somente após fazer o load
    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active");
        qrCodeBtn.innerHTML = "Código criado!";
    });

    
}

//adiciono um evento ao clicar no button e chamo minha função
qrCodeBtn.addEventListener("click", () =>{
    generateQrCode();
});

//Adiciono um evento ao clicar na tecla Enter
qrCodeInput.addEventListener("keypress", (e) =>{
    if(e.code === "Enter") {
        generateQrCode();
    }
});


//Limpar área do QR Code
qrCodeInput.addEventListener("keyup", () => {
    if (!qrCodeInput.value) {
      container.classList.remove("active");
      qrCodeBtn.innerText = "Gerar QR Code";
    }
  });
