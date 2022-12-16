/*
 * This file is part of the XXX distribution (https://github.com/xxxx or http://xxx.github.io).
 * Copyright (c) 2015 Liviu Ionescu.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
/*
      dBBBBBBb  dBP.dBBBBP   dBBBP dBBBBBb dBBBBBb    dBBBBb   dBP    dBBBP
       '   dB'     BP                  dBP      BB       dBP
    dB'dB'dB' dBP  `BBBBb  dBBP    dBBBBK   dBP BB   dBBBK'  dBP    dBBP
   dB'dB'dB' dBP      dBP dBP     dBP  BB  dBP  BB  dB' db  dBP    dBP
  dB'dB'dB' dBP  dBBBBP' dBBBBP  dBP  dB' dBBBBBBB dBBBBP' dBBBBP dBBBBP
*/
var fs = require("fs");
var mode = process.argv[2];
var arg = process.argv[3];
var miserableFile;
var miserableSource = [];
var miserableSyntaxTree = [];
var MiserableTokens = {};
var MiserableRules = {
    printFunction: /MLog\(.*\);/
};
function parseMiserable() {
    for (var line = 0; line < miserableSource.length; line++) {
        if (miserableSource[line].match(MiserableRules.printFunction)) {
            var tokens = miserableSource[line].replace(");", "").split("(");
            if (tokens[0] == "MLog") {
                miserableSyntaxTree.push({
                    kind: "function",
                    identifier: "MLog",
                    args: tokens[1]
                });
            }
        }
    }
    for (var i = 0; i < miserableSyntaxTree.length; i++) {
        if (miserableSyntaxTree[i].kind == "function") {
            if (miserableSyntaxTree[i].identifier == "MLog")
                console.log(miserableSyntaxTree[i].args);
        }
    }
}
function openMiserableFile() {
    var code = fs.readFileSync(miserableFile, "utf8").split("\n");
    for (var line = 0; line < code.length; line++)
        miserableSource.push(code[line]);
    parseMiserable();
}
function transformToJS() {
    openMiserableFile();
}
if (mode == "-w") {
    if (arg) {
        miserableFile = arg;
        transformToJS();
    }
}
