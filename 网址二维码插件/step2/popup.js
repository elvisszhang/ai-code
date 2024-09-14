document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let url = tabs[0].url;
    let qrcode = new QRCode(document.getElementById("qrcode"), {
      text: url,
      width: 128,
      height: 128
    });
  });
});
