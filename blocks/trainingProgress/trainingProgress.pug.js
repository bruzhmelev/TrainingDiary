function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function trainingProgress_tmpl(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"blocks\u002FtrainingProgress\u002FtrainingProgress.pug":"table\r\n    tr\r\n        th Время выполнения\r\n        th Упражнение\r\n        th Результат выполнения\r\n        th Переменный параметр\r\n        each trainSet in trainSets\r\n            tr.training-progress__item-container\r\n                td.training-progress__train-set-time=trainSet.time.toLocaleString(\"ru\", options)\r\n                td.training-progress__train-set-name=trainSet.exercise.name\r\n                td.training-progress__train-set-result=trainSet.result\r\n                td.training-progress__train-set-variable-parameter-value=trainSet.exercise.variableParametrName + \": \" \r\n                    if trainSet.variableParametrValueResult\r\n                        span=trainSet.variableParametrValueResult\r\n                    else\r\n                        span нет"};
;var locals_for_with = (locals || {});(function (options, trainSets) {;pug_debug_line = 1;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + "\u003Ctable\u003E";
;pug_debug_line = 2;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 3;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 3;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + "Время выполнения\u003C\u002Fth\u003E";
;pug_debug_line = 4;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 4;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + "Упражнение\u003C\u002Fth\u003E";
;pug_debug_line = 5;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 5;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + "Результат выполнения\u003C\u002Fth\u003E";
;pug_debug_line = 6;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 6;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + "Переменный параметр\u003C\u002Fth\u003E";
;pug_debug_line = 7;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
// iterate trainSets
;(function(){
  var $$obj = trainSets;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var trainSet = $$obj[pug_index0];
;pug_debug_line = 8;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + "\u003Ctr class=\"training-progress__item-container\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + "\u003Ctd class=\"training-progress__train-set-time\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = trainSet.time.toLocaleString("ru", options)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 10;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + "\u003Ctd class=\"training-progress__train-set-name\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = trainSet.exercise.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 11;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + "\u003Ctd class=\"training-progress__train-set-result\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = trainSet.result) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 12;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + "\u003Ctd class=\"training-progress__train-set-variable-parameter-value\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = trainSet.exercise.variableParametrName + ": ") ? "" : pug_interp));
;pug_debug_line = 13;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
if (trainSet.variableParametrValueResult) {
;pug_debug_line = 14;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 14;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = trainSet.variableParametrValueResult) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
else {
;pug_debug_line = 16;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 16;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + "нет\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var trainSet = $$obj[pug_index0];
;pug_debug_line = 8;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + "\u003Ctr class=\"training-progress__item-container\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + "\u003Ctd class=\"training-progress__train-set-time\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = trainSet.time.toLocaleString("ru", options)) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 10;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + "\u003Ctd class=\"training-progress__train-set-name\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = trainSet.exercise.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 11;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + "\u003Ctd class=\"training-progress__train-set-result\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = trainSet.result) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 12;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + "\u003Ctd class=\"training-progress__train-set-variable-parameter-value\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = trainSet.exercise.variableParametrName + ": ") ? "" : pug_interp));
;pug_debug_line = 13;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
if (trainSet.variableParametrValueResult) {
;pug_debug_line = 14;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 14;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = trainSet.variableParametrValueResult) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
}
else {
;pug_debug_line = 16;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + "\u003Cspan\u003E";
;pug_debug_line = 16;pug_debug_filename = "blocks\u002FtrainingProgress\u002FtrainingProgress.pug";
pug_html = pug_html + "нет\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftr\u003E\u003C\u002Ftable\u003E";}.call(this,"options" in locals_for_with?locals_for_with.options:typeof options!=="undefined"?options:undefined,"trainSets" in locals_for_with?locals_for_with.trainSets:typeof trainSets!=="undefined"?trainSets:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}