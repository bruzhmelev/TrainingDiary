(function () {
    'use strict';

    //import
    const tmpl = window.exerciseResultForm_tmpl;

    class ExerciseResultForm {
        constructor({
            el,
            data = {
                exercises: []
            }
        }) {
            this.el = el;
            this.data = data;

            //.options.selectedIndex

            this._initEvents();
        }

        _getSelectedExercise() {

            let selectOfExercises = this.el.getElementsByClassName('training-progress-form__exercise')[0] || {};
            let i = selectOfExercises.options.selectedIndex;
            return selectOfExercises.options[i].value;
        }

        //Кастомные события/триггеры
        //add-progress - event.newProgress
        //

        render() {
            this.el.innerHTML = tmpl(this.data);

            this.formEl = this.el.querySelector('form');
        }

        /** Регистрация обработчика события
         * @param  {string}   name - тип события
         * @param  {function} cb
         */
        on(name, cb) {
            this.el.addEventListener(name, cb);
        }

        /** Вызов обработчиков событий
         * @param  {string} name - тип события
         * @param  {*} data
         */
        trigger(name, data) {
            let event = new CustomEvent(name, {
                detail: data
            });

            this.el.dispatchEvent(event);
        }

        reset() {
            this.formEl.reset();
        }

        _initEvents() {
            this.on('submit', this._onSubmit.bind(this));
        }

        _onSubmit(event) {
            event.preventDefault();
            let formData = this._getFormData();

            this.trigger('add-train-set', formData);
        }

        _getInputs() {
            return this.el.querySelectorAll('input, textarea');
        }

        _getFormData() {
            let formData = {
                trainSet: {}
            };

            formData.trainSet.time = new Date();
            formData.trainSet.result = this.el.querySelector('.training-progress-form__result').value;
            formData.trainSet.variableParameterValue = this.el.querySelector('.training-progress-form__variable-parameter-value').value;
            formData.trainSet.exercise = JSON.parse(this._getSelectedExercise());

            return formData;
        }

    }


    //export 
    window.ExerciseResultForm = ExerciseResultForm;
})();