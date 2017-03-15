;(function(){
    'use strict';

    //import
	const tmpl = window.exerciseResultForm_tmpl;

    class ExerciseResultForm {
        constructor({el, data}){
            this.el = el;
            this.data = data;


            this._initEvents();
        }

        //Кастомные события/триггеры
        //add-progress - event.newProgress
        //

		render () {
			this.el.innerHTML = tmpl();

			this.formEl = this.el.querySelector('form');
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

		reset () {
			this.formEl.reset();
		}
	
		_initEvents () {
			this.on('submit', this._onSubmit.bind(this));
		}

		_onSubmit (event) {
			event.preventDefault();
			let formData = this._getFormData();

			this.trigger('add-train-set', formData);
		}

		_getInputs () {
			return this.el.querySelectorAll('input, textarea');
		}

		_getFormData () {
			let formData = {
				trainSet:{}
			};

            formData.trainSet.time = new Date();
            formData.trainSet.result = this.el.querySelector('.training-progress-form__result').value;
            formData.trainSet.variableParametrValue = this.el.querySelector('.training-progress-form__variable-parameter-value').value;
            formData.trainSet.exercise = this.el.querySelector('.training-progress-form__exercise').value;

			return formData;
		}

    }


    //export 
    window.ExerciseResultForm = ExerciseResultForm;
})();