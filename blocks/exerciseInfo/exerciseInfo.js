;(function(){
    'use strict';

    //import
	const tmpl = window.exerciseInfo_tmpl;

	/**
	 * @typedef {Object} Exercise
	 *
 	 * @property {string} name - Название упражнения.
 	 * @property {string} description - Описание упражнения.
 	 * @property {string} videoTutorialLink - Ссылка на видео инструкцию по упражнению.
 	 * @property {string} variableParamentrName - Название изменяемого параметра в упражнении(вес, время выполнения).
	 */


    class ExerciseInfo {
        constructor({el, data = {exercises: []}}){
            this.el = options.el;

            this.name = this.el.querySelector('.exercise-info__name');
            this.description = this.el.querySelector('.exercise-info__description');
            this.videoTutorialLink = this.el.querySelector('.exercise-info__video-tutorial-link');
            this.variableParamentrName = this.el.querySelector('.exercise-info__variable-parameter-name');

            this.el.onclick = (event) => {
                alert('exercise-info.onclick -> Выводить информацию по прогрессу в упражнении и историю записей.');
            };
        }

        //Кастомные события/триггеры
        //клик на любом из элементов - вызывает показ прогресса выполнения данного упражнения - изменение параметра за всё время заполнения
        //Простой вариант вывод alert - Упражнение:"Жим лежа, максимум за подход"  Первый замер - 10-09-2016: 10 подходов 50кг. Последний замер - 07-03-2017: 7 подходов 80кг.
        //Улучшение - Раскрытие таблицы со всеми вводимыми параметрами.
        //Улучшение - Построение графика изменения во времени.
    }


    //export 
    window.ExerciseAddForm = ExerciseAddForm;
})();