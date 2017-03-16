function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function exerciseAddForm_tmpl(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"blocks\u002FexerciseAddForm\u002FexerciseAddForm.pug":"if active\r\n    form\r\n        label Название упражнения или развиваемого параметра. Пример \"Жим лежа, максимум за подход\", \"Бег, км за пробежку\"\r\n            input(type=\"text\" required).exercise-add-form__name\r\n        label Описание\r\n            textarea(rows=\"6\" cols=\"50\" required).exercise-add-form__description\r\n        label Ссылка на видео-пример по упражнению(если есть)\r\n            input(type=\"text\").exercise-add-form__video-tutorial-link\r\n        label Название переменного параметра в тренировке (вес, ...). Пример \"Штанга, кг\", \"Утяжелители для бега, кг\"\r\n            input(type=\"text\").exercise-add-form__variable-parameter-name\r\n        button.exercise-add-form__add-button Добавить\r\nelse\r\n    button.exercise-add-form__toggle Добавить новое упражнение"};
;var locals_for_with = (locals || {});(function (active) {;pug_debug_line = 1;pug_debug_filename = "blocks\u002FexerciseAddForm\u002FexerciseAddForm.pug";
if (active) {
;pug_debug_line = 2;pug_debug_filename = "blocks\u002FexerciseAddForm\u002FexerciseAddForm.pug";
pug_html = pug_html + "\u003Cform\u003E";
;pug_debug_line = 3;pug_debug_filename = "blocks\u002FexerciseAddForm\u002FexerciseAddForm.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 3;pug_debug_filename = "blocks\u002FexerciseAddForm\u002FexerciseAddForm.pug";
pug_html = pug_html + "Название упражнения или развиваемого параметра. Пример \"Жим лежа, максимум за подход\", \"Бег, км за пробежку\"";
;pug_debug_line = 4;pug_debug_filename = "blocks\u002FexerciseAddForm\u002FexerciseAddForm.pug";
pug_html = pug_html + "\u003Cinput class=\"exercise-add-form__name\" type=\"text\" required=\"required\"\u002F\u003E\u003C\u002Flabel\u003E";
;pug_debug_line = 5;pug_debug_filename = "blocks\u002FexerciseAddForm\u002FexerciseAddForm.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 5;pug_debug_filename = "blocks\u002FexerciseAddForm\u002FexerciseAddForm.pug";
pug_html = pug_html + "Описание";
;pug_debug_line = 6;pug_debug_filename = "blocks\u002FexerciseAddForm\u002FexerciseAddForm.pug";
pug_html = pug_html + "\u003Ctextarea class=\"exercise-add-form__description\" rows=\"6\" cols=\"50\" required=\"required\"\u003E\u003C\u002Ftextarea\u003E\u003C\u002Flabel\u003E";
;pug_debug_line = 7;pug_debug_filename = "blocks\u002FexerciseAddForm\u002FexerciseAddForm.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 7;pug_debug_filename = "blocks\u002FexerciseAddForm\u002FexerciseAddForm.pug";
pug_html = pug_html + "Ссылка на видео-пример по упражнению(если есть)";
;pug_debug_line = 8;pug_debug_filename = "blocks\u002FexerciseAddForm\u002FexerciseAddForm.pug";
pug_html = pug_html + "\u003Cinput class=\"exercise-add-form__video-tutorial-link\" type=\"text\"\u002F\u003E\u003C\u002Flabel\u003E";
;pug_debug_line = 9;pug_debug_filename = "blocks\u002FexerciseAddForm\u002FexerciseAddForm.pug";
pug_html = pug_html + "\u003Clabel\u003E";
;pug_debug_line = 9;pug_debug_filename = "blocks\u002FexerciseAddForm\u002FexerciseAddForm.pug";
pug_html = pug_html + "Название переменного параметра в тренировке (вес, ...). Пример \"Штанга, кг\", \"Утяжелители для бега, кг\"";
;pug_debug_line = 10;pug_debug_filename = "blocks\u002FexerciseAddForm\u002FexerciseAddForm.pug";
pug_html = pug_html + "\u003Cinput class=\"exercise-add-form__variable-parameter-name\" type=\"text\"\u002F\u003E\u003C\u002Flabel\u003E";
;pug_debug_line = 11;pug_debug_filename = "blocks\u002FexerciseAddForm\u002FexerciseAddForm.pug";
pug_html = pug_html + "\u003Cbutton class=\"exercise-add-form__add-button\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "blocks\u002FexerciseAddForm\u002FexerciseAddForm.pug";
pug_html = pug_html + "Добавить\u003C\u002Fbutton\u003E\u003C\u002Fform\u003E";
}
else {
;pug_debug_line = 13;pug_debug_filename = "blocks\u002FexerciseAddForm\u002FexerciseAddForm.pug";
pug_html = pug_html + "\u003Cbutton class=\"exercise-add-form__toggle\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "blocks\u002FexerciseAddForm\u002FexerciseAddForm.pug";
pug_html = pug_html + "Добавить новое упражнение\u003C\u002Fbutton\u003E";
}}.call(this,"active" in locals_for_with?locals_for_with.active:typeof active!=="undefined"?active:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}