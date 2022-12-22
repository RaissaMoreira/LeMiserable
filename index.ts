import { MiserableConsoleLog } from "./types";

/* SELETORES */

function get(selector: string) {
  return document.querySelector(selector);
}

function getValue(selector: string) {
  return (document.querySelector(selector) as HTMLInputElement).value;
}

/* ESTILIZAÇÃO */

function setStyle(){
	
}

/* UTILITÁRIOS */

function MLog(text: any, type?: MiserableConsoleLog) {
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
