function generateQR() {
    let qrText = document.getElementById("qrText").value;
    let qrCode = document.getElementById("qrCode");
    let downloadBtn = document.getElementById("downloadBtn");

    
    if (qrText.trim() === "") {
        alert("Please enter text or URL");
        return;
    }

    let qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrText)}`;
    qrCode.src = qrUrl;
    
    // Show download button
    downloadBtn.href = qrUrl;
    downloadBtn.style.display = "block";
}
