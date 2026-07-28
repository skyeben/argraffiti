const input = document.getElementById("text");
const button = document.getElementById("button");

const canvas = document.getElementById("canvas");
const canvasText = canvas.getContext("2d");

button.addEventListener("click", function () {
  const image = document.querySelector("a-image");
  const mesh = image.getObject3D("mesh");

  let fontSize = 600;

  canvasText.clearRect(0,0,2048,1024);
  canvasText.beginPath();
 
  document.fonts.load(`${fontSize}px 'montserratBold'`).then(function () {

    canvasText.font = `${fontSize}px 'montserratBold'`;
    canvasText.textAlign = "center";
    canvasText.textBaseline = "middle";

    while (canvasText.measureText(input.value).width > canvas.width || canvasText.measureText(input.value).height > canvas.height) {
      fontSize -= 20;
      canvasText.font = `${fontSize}px 'montserratBold'`;
    }

    canvasText.fillText(input.value, canvas.width/2, canvas.height/2);

    if (mesh && mesh.material && mesh.material.map) {
    mesh.material.map.needsUpdate = true;
    };
  });
});
