Webcam.set({
 width: 320,
 height: 240,
 image_format: 'jpeg',
 jpeg_quality: 90
});

<!-- Code to handle taking the snapshot and displaying it locally -->
function take_snapshot() {

// take snapshot and get image data
Webcam.snap( function(data_uri) {
 // display results in page
 document.getElementById('results').innerHTML =
 '<img id="image" src="'+data_uri+'"/>';
 } );
}
