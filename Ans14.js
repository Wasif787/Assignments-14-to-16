var devices = ["Keyboard","Mouse","LCD","Speaker"];
document.write("Devices: {"+devices+"}<br>");
for (let i = devices.length-1; i >= 0; i--) {
    document.write("Output: "+devices[i]+"<br>");
}