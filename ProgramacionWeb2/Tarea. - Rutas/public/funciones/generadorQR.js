function generarQR() {
   
    const nombre = document.getElementById("input1").value;
    const correo = document.getElementById("input2").value;
    const institucion = document.getElementById("input3").value;
    const dependencia = document.getElementById("input4").value;

  
    if (nombre && correo && institucion && dependencia) {
 
        const contenidoQR = `Nombre: ${nombre}\nCorreo: ${correo}\nInstitución: ${institucion}\nDependencia: ${dependencia}`;

       
        const qr = new QRious({
            element: document.createElement('canvas'), 
            value: contenidoQR, 
            size: 250
        });

        const qrCodeDiv = document.getElementById("qr-code");
        qrCodeDiv.innerHTML = ''; 
        qrCodeDiv.appendChild(qr.image); 
    } else {
        alert("Por favor, completa todos los campos."); 
    }
}
