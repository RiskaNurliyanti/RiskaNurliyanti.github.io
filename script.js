var container = document.querySelector('#container');

var panorama = new
PANOLENS.ImagePanorama('Assets/gambar1.jpg');

var panorama2 = new
PANOLENS.ImagePanorama('Assets/gambar2.jpg');

var panorama3 = new
PANOLENS.ImagePanorama('Assets/gambar3.jpg');


var viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama, panorama2, panorama3);



// var infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
// infospot.position.set(0, -2000, -5000);
// panorama.add(infospot);

// var infospot2 = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
// infospot2.position.set(0, -2000, -5000);
// panorama2.add(infospot2);

// var infospot3 = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
// infospot3.position.set(0, -2000, -5000);
// panorama3.add(infospot3);




// infospot.addEventListener('click', function () {
// //    viewer.setPanorama(panorama2);
//     onButtonClick(panorama2);
//     });

// infospot2.addEventListener('click', function () {
//     // viewer.setPanorama(panorama3);
//     onButtonClick(panorama3);
//     });   

// infospot3.addEventListener('click', function () {
//     // viewer.setPanorama(panorama);
//     onButtonClick(panorama);
//     });

    var bar = document.querySelector( '#bar' );
    
    function onProgressUpdate ( event ) {
        
var percentage = event.progress.loaded / event.progress.total * 100; bar.style.width = percentage + "%";
    if (percentage >= 100){
        bar.classList.add( 'hide' );
        setTimeout(function(){
        bar.style.width = 0;
            }, 1000);
        }
    }
    
function onButtonClick(targetPanorama) {
    bar.classList.remove('hide');
    viewer.setPanorama(targetPanorama);
    }
    
panorama.addEventListener('progress', onProgressUpdate);
panorama2.addEventListener('progress', onProgressUpdate);
panorama3.addEventListener('progress', onProgressUpdate);

var textureLoader = new THREE.TextureLoader();
var customInfospot = textureLoader.load('Assets/next.png', function () {
    var infospot = new PANOLENS.Infospot(500, 'Assets/next.png');
    infospot.position.set(0, -2000, -5000);
    infospot.addEventListener('click', function () {
    onButtonClick(panorama2);
    });
panorama.add(infospot);
});

var textureLoader2 = new THREE.TextureLoader();
var customInfospot2 = textureLoader2.load('Assets/next.png', function () {
    var infospot2 = new PANOLENS.Infospot(500, 'Assets/next.png');
    infospot2.position.set(0, -2000, -5000);
    infospot2.addEventListener('click', function () {
    onButtonClick(panorama3);
    });
panorama2.add(infospot2);
});

var textureLoader3 = new THREE.TextureLoader();
var customInfospot3 = textureLoader3.load('Assets/next.png', function () {
    var infospot3 = new PANOLENS.Infospot(500, 'Assets/next.png');
    infospot3.position.set(0, -2000, -5000);
    infospot3.addEventListener('click', function () {
    onButtonClick(panorama);
    });
panorama3.add(infospot3);
});