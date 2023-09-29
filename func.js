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

// cloudflare real IP
(function () {
    function d() {
        var b = a.getElementById("cf-footer-item-ip"),
            c = a.getElementById("cf-footer-ip-reveal");
        b && "classList" in b && (b.classList.remove("hidden"), c.addEventListener("click", function () {
            c.classList.add("hidden");
            a.getElementById("cf-footer-ip").classList.remove("hidden")
        }))
    }
    var a = document;
    document.addEventListener && a.addEventListener("DOMContentLoaded", d)
})();