function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function exerciseResultForm_tmpl(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"blocks\u002FexerciseResultForm\u002FexerciseResultForm.pug":"div.panel-head\r\n    h3 Ввод результатов текущей тренировки\r\nform\r\n    label Упражнение\r\n        select(required).training-progress-form__exercise\r\n            option(disabled selected) Выберите упражнение\r\n            each exercise in exercises\r\n                option(value=exercise)= exercise.name\r\n    label Результат выполнения\r\n        input(type=\"text\" required).training-progress-form__result\r\n    label C переменным параметром\r\n        input(type=\"text\").training-progress-form__variable-parameter-value\r\n    button.training-progress-form__add-button Добавить"};
;var locals_for_with = (locals || {});(function (exercises) {;pug_debug_line = 1;pug_debug_filename = "blocks\u002FexerciseResultForm\u002FexerciseResultForm.pug";
pug_html = pug_html + "\u003Cdiv class=\"panel-head\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "blocks\u002FexerciseResultForm\u002FexerciseResultForm.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 2;pug_debug_filename = "blocks\u002FexerciseResultForm\u002FexerciseResultForm.pug";
pug_html = pug_html + "Ввод результатов текущей тренировки\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 3;pug_debug_filename = "blocks\u002FexerciseResultForm\u002FexerciseResultForm.pug";
pug_html = pug_html + "\u003Cform\u003E";
;pug_debug_line = 4;pug_debug_filename = "blocks\u002FexerciseResultForm\u002FexerciseResultForm.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 4;pug_debug_filename = "blocks\u002FexerciseResultForm\u002FexerciseResultForm.pug";
pug_html = pug_html + "Упражнение";
;pug_debug_line = 5;pug_debug_filename = "blocks\u002FexerciseResultForm\u002FexerciseResultForm.pug";
pug_html = pug_html + "\u003Cselect class=\"training-progress-form__exercise\" required=\"required\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "blocks\u002FexerciseResultForm\u002FexerciseResultForm.pug";
pug_html = pug_html + "\u003Coption disabled=\"disabled\" selected=\"selected\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "blocks\u002FexerciseResultForm\u002FexerciseResultForm.pug";
pug_html = pug_html + "Выберите упражнение\u003C\u002Foption\u003E";
;pug_debug_line = 7;pug_debug_filename = "blocks\u002FexerciseResultForm\u002FexerciseResultForm.pug";
// iterate exercises
;(function(){
  var $$obj = exercises;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var exercise = $$obj[pug_index0];
;pug_debug_line = 8;pug_debug_filename = "blocks\u002FexerciseResultForm\u002FexerciseResultForm.pug";
pug_html = pug_html + "\u003Coption" + (pug_attr("value", exercise, true, false)) + "\u003E";
;pug_debug_line = 8;pug_debug_filename = "blocks\u002FexerciseResultForm\u002FexerciseResultForm.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = exercise.name) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var exercise = $$obj[pug_index0];
;pug_debug_line = 8;pug_debug_filename = "blocks\u002FexerciseResultForm\u002FexerciseResultForm.pug";
pug_html = pug_html + "\u003Coption" + (pug_attr("value", exercise, true, false)) + "\u003E";
;pug_debug_line = 8;pug_debug_filename = "blocks\u002FexerciseResultForm\u002FexerciseResultForm.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = exercise.name) ? "" : pug_interp)) + "\u003C\u002Foption\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fselect\u003E\u003C\u002Flabel\u003E";
;pug_debug_line = 9;pug_debug_filename = "blocks\u002FexerciseResultForm\u002FexerciseResultForm.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 9;pug_debug_filename = "blocks\u002FexerciseResultForm\u002FexerciseResultForm.pug";
pug_html = pug_html + "Результат выполнения";
;pug_debug_line = 10;pug_debug_filename = "blocks\u002FexerciseResultForm\u002FexerciseResultForm.pug";
pug_html = pug_html + "\u003Cinput class=\"training-progress-form__result\" type=\"text\" required=\"required\"\u002F\u003E\u003C\u002Flabel\u003E";
;pug_debug_line = 11;pug_debug_filename = "blocks\u002FexerciseResultForm\u002FexerciseResultForm.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 11;pug_debug_filename = "blocks\u002FexerciseResultForm\u002FexerciseResultForm.pug";
pug_html = pug_html + "C переменным параметром";
;pug_debug_line = 12;pug_debug_filename = "blocks\u002FexerciseResultForm\u002FexerciseResultForm.pug";
pug_html = pug_html + "\u003Cinput class=\"training-progress-form__variable-parameter-value\" type=\"text\"\u002F\u003E\u003C\u002Flabel\u003E";
;pug_debug_line = 13;pug_debug_filename = "blocks\u002FexerciseResultForm\u002FexerciseResultForm.pug";
pug_html = pug_html + "\u003Cbutton class=\"training-progress-form__add-button\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "blocks\u002FexerciseResultForm\u002FexerciseResultForm.pug";
pug_html = pug_html + "Добавить\u003C\u002Fbutton\u003E\u003C\u002Fform\u003E";}.call(this,"exercises" in locals_for_with?locals_for_with.exercises:typeof exercises!=="undefined"?exercises:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}