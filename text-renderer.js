const input = document.getElementById("text");
const button = document.getElementById("button");
const file = document.getElementById("file");
const canvas = document.getElementById("canvas");
const text = canvas.getContext("2d");

let newFont;
let confirmUpload;

file.addEventListener("change", function () {
  const uploadedFile = document.getElementById("file").files[0];

  const reader = new FileReader();

  reader.onload = function () {
    newFont = new FontFace("uploadedFile", reader.result);

    newFont.load().then(function (loadedFont) {
      document.fonts.add(loadedFont);
    });
  };

  reader.readAsArrayBuffer(uploadedFile);

  confirmUpload = true;
});


button.addEventListener("click", function () {
  if (confirmUpload) {
    const image = document.querySelector("a-image");
    const mesh = image.getObject3D("mesh");

    let fontSize = 600;

    text.clearRect(0,0,2048,1024);
    text.beginPath();
  
    document.fonts.load(`${fontSize}px 'uploadedFile'`).then(function () {

      text.font = `${fontSize}px 'uploadedFile`;
      text.textAlign = "center";
      text.textBaseline = "middle";

      while (text.measureText(input.value).width > canvas.width || text.measureText(input.value).height > canvas.height) {
        fontSize -= 20;
        text.font = `${fontSize}px 'uploadedFile'`;
      };

      text.fillText(input.value, canvas.width/2, canvas.height/2);

      if (mesh && mesh.material && mesh.material.map) {
      mesh.material.map.needsUpdate = true;
      };
    });
  };
});