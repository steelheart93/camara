$(function () {
    // La función recibe 3 parametros, primero un JSON.
    var json = { audio: false, video: true };
    
    // Aquí comienzo la promesa para que todo este mas ordenado.
    var p = navigator.mediaDevices.getUserMedia(json);

    // Segundo una función en caso de que nada falle, SUCCESS.
    p.then(function (mediaStream) {
        var video = document.querySelector('video');
        video.srcObject = mediaStream;
        video.onloadedmetadata = function (e) {
            // Do something with the video here.
        };
    });

    // Tercero una función en caso de falla, ERROR.
    p.catch(function (err) {
        console.log(err);
    });
});