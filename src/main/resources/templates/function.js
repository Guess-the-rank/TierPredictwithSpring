//파일 업로드 및 재생
const inputFile = document.getElementById("file");
const video = document.getElementById("video");

inputFile.addEventListener("change", function(){
    const file = inputFile.files[0];
    const videourl = URL.createObjectURL(file);
    video.setAttribute("src", videourl);
    video.play();
})
