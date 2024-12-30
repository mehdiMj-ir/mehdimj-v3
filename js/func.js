// Random string generator

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function genString() {
    let result = '';
    const charsLength = chars.length;
    for (let i = 0; i < 16; i++) {
        result += chars.charAt(Math.floor(Math.random() * charsLength));
    }
    return result;
}
document.getElementById('genString').textContent = genString();


// Get local time
let IR_TIME = new Date().toLocaleString("fa-IR", { timeZone: "Asia/Tehran" });
document.getElementById('irTime').textContent = IR_TIME + ' Teh';


var text = document.getElementById("cf-footer-ip-reveal")
const a = await fetch("https://ip.mehdimj.ir/").then(res=> res.text())
text.innerHTML = a.slice(0, -1)
