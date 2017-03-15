;(function(){
    'use strict';

    //import
	const tmpl = window.trainingProgress_tmpl;

    class TrainingProgress {
        constructor({el, data = {trainSets:[]}}){
            this.el = el;
            this.data = data;
			
			//test
			let testSet = {
				time: new Date(), 
				name: "Отжимания", 
				result: 40,
				variableParametrValueResult: null,
				exercise: {
					name: "Отжимания",
					variableParametrName: "Утяжеление",
				}
			}

			this.data.trainSets.push(testSet);

            this._initEvents();
        }

        //Кастомные события/триггеры
        //add-progress - event.newProgress
		render () {
			this.el.innerHTML = tmpl(this.data);//trainSets
		}

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

	
		_initEvents () {
			//this.on('submit', this._onSubmit.bind(this));
			//on 'click' - для разворачивания дополнительной информации
		}

		// _onSubmit (event) {
		// 	event.preventDefault();
		// 	let formData = this._getFormData();

		// 	this.trigger('add-exercise', formData);
		// }

    }


    //export 
    window.TrainingProgress = TrainingProgress;
})();