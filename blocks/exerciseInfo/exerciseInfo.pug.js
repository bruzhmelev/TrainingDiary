function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function exerciseInfo_tmpl(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"blocks\u002FexerciseInfo\u002FexerciseInfo.pug":"div.panel-head\r\n    h3 Мои упражнения\r\ntable\r\n    tr\r\n        th Упражнение\r\n        th Описание\r\n        th Ссылка на видео инструкцию\r\n        th Изменяемый параметр тренировки\r\n    each exercise in exercises\r\n        tr.exercise-info__item-container\r\n            td.exercise-info__name=exercise.name\r\n            td.exercise-info__description=exercise.description\r\n            td.exercise-info__video-tutorial-link\r\n                a(href=exercise.videoTutorialLink)=exercise.videoTutorialLink\r\n            td.exercise-info__variable-parameter-name=exercise.variableParameterName"};
;var locals_for_with = (locals || {});(function (exercises) {;pug_debug_line = 1;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + "\u003Cdiv class=\"panel-head\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 2;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + "Мои упражнения\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 3;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + "\u003Ctable\u003E";
;pug_debug_line = 4;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + "\u003Ctr\u003E";
;pug_debug_line = 5;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 5;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + "Упражнение\u003C\u002Fth\u003E";
;pug_debug_line = 6;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 6;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + "Описание\u003C\u002Fth\u003E";
;pug_debug_line = 7;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 7;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + "Ссылка на видео инструкцию\u003C\u002Fth\u003E";
;pug_debug_line = 8;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + "\u003Cth\u003E";
;pug_debug_line = 8;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + "Изменяемый параметр тренировки\u003C\u002Fth\u003E\u003C\u002Ftr\u003E";
;pug_debug_line = 9;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
// iterate exercises
;(function(){
  var $$obj = exercises;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var exercise = $$obj[pug_index0];
;pug_debug_line = 10;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + "\u003Ctr class=\"exercise-info__item-container\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + "\u003Ctd class=\"exercise-info__name\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = exercise.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 12;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + "\u003Ctd class=\"exercise-info__description\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = exercise.description) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 13;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + "\u003Ctd class=\"exercise-info__video-tutorial-link\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", exercise.videoTutorialLink, true, false)) + "\u003E";
;pug_debug_line = 14;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = exercise.videoTutorialLink) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Ftd\u003E";
;pug_debug_line = 15;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + "\u003Ctd class=\"exercise-info__variable-parameter-name\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = exercise.variableParameterName) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var exercise = $$obj[pug_index0];
;pug_debug_line = 10;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + "\u003Ctr class=\"exercise-info__item-container\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + "\u003Ctd class=\"exercise-info__name\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = exercise.name) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 12;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + "\u003Ctd class=\"exercise-info__description\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = exercise.description) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E";
;pug_debug_line = 13;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + "\u003Ctd class=\"exercise-info__video-tutorial-link\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", exercise.videoTutorialLink, true, false)) + "\u003E";
;pug_debug_line = 14;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = exercise.videoTutorialLink) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Ftd\u003E";
;pug_debug_line = 15;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + "\u003Ctd class=\"exercise-info__variable-parameter-name\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "blocks\u002FexerciseInfo\u002FexerciseInfo.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = exercise.variableParameterName) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ftable\u003E";}.call(this,"exercises" in locals_for_with?locals_for_with.exercises:typeof exercises!=="undefined"?exercises:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}