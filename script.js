/*
        VARS
*/

const d = new Date();

//TOAST
var activeToast = null;
var toastErr = null;
var toastStack = 1;

//ALERTBOX
var currentAlert = null;
var alertErr = null;

//SETTINGS
var toastXTheme = "dark";
const toastXThemeLocation = "https://raw.githubusercontent.com/xellu/toast-x/main/";
/*
        UTILS
*/

function say(text) {
    console.log(`%c[TOAST-X] ${text}`, "color: #f1e3ff");
}

function _randomStr(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

/* 
        ACTIONBAR
*/

function actionBar(message, timeout=3) {
    let bar = document.createElement("div");

    //create alert box
    let alertId = _randomStr(5);
    currentAlert = alertId

    bar.id = "actionbar";
    bar.className = "ACTIONBAR ACTIONBAR-IN";
    bar.innerText = message;

    document.getElementsByTagName("BODY")[0].appendChild(bar);

    setTimeout(function () {
        bar.className = "ACTIONBAR ACTIONBAR-OUT";
        setTimeout(function () {
            bar.remove();
        }, 499)
    }, timeout*1000);
}

/*
        ALERTS
*/

function dismissAlert(id) {
    try {
        document.getElementById("alertbox-"+id).remove();
    } catch (e) { alertErr = e; }
}

function alertBox(title, message) {
    try {
        let prevAlert = document.getElementById("alertbox-"+currentAlert);
        if (prevAlert != null) {
            prevAlert.remove();
        }
    } catch (e) { alertErr = e; }

    //create alert box
    let alertId = _randomStr(5);
    currentAlert = alertId

    let box = document.createElement("div");
    box.id = "alertbox-"+alertId;
    box.className = "ALERTX";
    box.innerHTML = `<h1>${title} <a onclick="dismissAlert('${alertId}')">x</a></h1> <br> <pre>${message}</pre>`;
    document.getElementsByTagName("BODY")[0].appendChild(box);

    return alertId;
}

/*
        TOASTS
*/

function toastDismiss() {
    try {
        let prevToast = document.getElementById("toast-"+activeToast);
        if (prevToast != null) {
            toastStack = 1;
            prevToast.remove();
        }
    } catch (e) { toastErr = e; }
}

function toast(message, color="#a79fff", timeout = 5) {
    try {
        let prevToast = document.getElementById("toast-"+activeToast);
        if (prevToast != null) {
            if (prevToast.innerHTML == message || prevToast.innerHTML == message + ` ${toastStack}x`) {
                toastStack++;
                prevToast.innerHTML = message + ` ${toastStack}x`;
                return;
            }
            toastStack = 1;
            prevToast.remove();
        }
    } catch (e) { toastErr = e; }

    //register a toast msg
    let toastId = _randomStr(5)
    activeToast = toastId

    //create a toast box
    let box = document.createElement("div");
    box.innerHTML = message;
    box.className = `TOASTX TOASTX-IN`;
    box.style = `border-left: 5px solid  ${color}`
    box.id = `toast-${toastId}`

    //make it work
    document.getElementsByTagName("BODY")[0].appendChild(box);
    say("Toast message shown (ID: "+toastId+")");
    
    setTimeout(function () {
        //delete current toast if still exists
        try {
            let prevToast = document.getElementById("toast-"+toastId);
            if (prevToast != null) {
                prevToast.className = "TOASTX TOASTX-OUT"
                setTimeout(function () {
                    prevToast.remove();
                    toastStack = 1;
                }, 499)
            }
        } catch (e) { toastErr = e; }
    }, timeout*1000);
    return toastId;
}

/*
        LOADING
*/

function init() {
    say("Script is loading")
    let start = Math.round(d.getTime());
    
    var head = document.getElementsByTagName('HEAD')[0];
    var body = document.getElementsByTagName('BODY')[0];
    var link = document.createElement('link');

    //LOADING ANIMATE.CSS
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    head.appendChild(link);

    //IMPORTING THEME
    style = document.createElement('style');
    style.innerHTML = `@import url('toasts-${toastXTheme}.css');\n@import url('${toastXThemeLocation}toasts.css');`
    body.appendChild(style);

    let end = Math.round(d.getTime());
    say(`Script loaded in ${end-start}ms`);
}


init();