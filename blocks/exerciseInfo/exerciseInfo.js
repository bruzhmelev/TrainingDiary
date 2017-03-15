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
            this.el = el;
            this.data = data;

            data.exercises.push(
                {
                    name: "Test name",
                    description: "Test description",
                    videoTutorialLink: "Test videoTutorialLink",
                    variableParamentrName: "Test variableParamentrName",
                }
            );

            // this.name = this.el.querySelector('.exercise-info__name');
            // this.description = this.el.querySelector('.exercise-info__description');
            // this.videoTutorialLink = this.el.querySelector('.exercise-info__video-tutorial-link');
            // this.variableParamentrName = this.el.querySelector('.exercise-info__variable-parameter-name');


            this.render();
        }

        render () {
			this.el.innerHTML = tmpl(this.data);
		}

        addExercise (newExercise) {
            this.data.exercises.push(newExercise);
        }

        //Кастомные события/триггеры
        //клик на любом из элементов - вызывает показ прогресса выполнения данного упражнения - изменение параметра за всё время заполнения
        //Простой вариант вывод alert - Упражнение:"Жим лежа, максимум за подход"  Первый замер - 10-09-2016: 10 подходов 50кг. Последний замер - 07-03-2017: 7 подходов 80кг.
        //Улучшение - Раскрытие таблицы со всеми вводимыми параметрами.
        //Улучшение - Построение графика изменения во времени.


        //Код для выноса
        /** Регистрация обработчика события
		 * @param  {string}   name - тип события
		 * @param  {function} cb
		 */
		on (name, cb) {
			this.el.addEventListener(name, cb);
		}

		/** Вызов обработчиков событий
		 * @param  {string} name - тип события
		 * @param  {*} data
		 */
		trigger (name, data) {
			let event = new CustomEvent(name, {detail: data});

			this.el.dispatchEvent(event);
		}
    }


    //export 
    window.ExerciseInfo = ExerciseInfo;
})();