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
