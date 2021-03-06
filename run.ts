﻿import util = require("util");
import fs = require("fs");
import emitter = require("./translator/emitter");
import vm = require("vm");
import proc = require("child_process");

var pref = 'try{\r\n';
var postf = '\r\n} catch(e){ __LastXpCall(e) }\r\n';
var fn = process.argv[2];
var flua = fn.replace(".js", ".lua");
if (fn == flua) throw new Error("cannot overwrite files!");
var luaRT = fs.readFileSync("runtime/runtime.lua").toString();
var source = fs.readFileSync(fn).toString();
var polyfills = fs.readFileSync("runtime/polyfills.js").toString();
var luasrc = emitter.convertFile(polyfills + pref + source + postf, fn, false);
fs.writeFileSync(flua, luaRT + luasrc);
var profile = false;
//(profile ? "-jp=a " : "") + flua
var rc = proc.spawn("cmd", ["/c \\bin\\luajit\\luajit " + (profile ? "-jp=a " : "") + flua], { stdio: 'inherit' });
