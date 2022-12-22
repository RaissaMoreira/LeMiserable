"use strict";
exports.__esModule = true;
/* SELETORES */
function get(selector) {
    return document.querySelector(selector);
}
function getValue(selector) {
    return document.querySelector(selector).value;
}
/* ESTILIZAÇÃO */
function setStyle() {
}
/* UTILITÁRIOS */
function MLog(text, type) {
    if (type)
        switch (type) {
            case "log":
                console.log(text);
                return;
            case "warn":
                console.warn(text);
                return;
        }
    console.log(text);
}
MLog("Hello");
