document.addEventListener("DOMContentLoaded", () => {
  const v = document.querySelector(".player");
  if (!v) return;
  v.addEventListener("ended", () => {
    console.log("Video selesai diputar");
    // TODO: taruh event tracking/iklan di sini jika diperlukan
  });
});
