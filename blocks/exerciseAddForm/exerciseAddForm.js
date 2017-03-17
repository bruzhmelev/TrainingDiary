;(function(){
    'use strict';

    //import
    const tmpl = window.exerciseAddForm_tmpl;

    class ExerciseAddForm {
        constructor({
            el,
            data = {
                active: false
            }
        }){
            this.el = el;
            this.data = data;

            
            this.render();
            this._initEvents();
        }

        //Кастомные события/триггеры
        //add-exercise - event.newExercise
        //

        render () {
            this.el.innerHTML = tmpl(this.data);
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

        _toggle() {
            this.data.active = !this.data.active;
        }
    
        _initEvents () {
            this.on('submit', this._onSubmit.bind(this));
            
            //HACK
            let toggleButton = this.el.querySelector('.exercise-add-form__toggle');
            //this.toggleButton.onclick = this._toggle.bind(this);
            //this.toggleButton.addEventListener('click', this._toggle.bind(this));
            toggleButton.onclick = function(){alert(1)};

            //Вот такое в консоли работает а здесь нет - Почему???
            let el = document.querySelector('.exercise-add-form__toggle');
            el.onclick = function(){alert(1)};
        }

        _onSubmit (event) {
            event.preventDefault();
            let formData = this._getFormData();

            this.trigger('add-exercise', formData);
        }

        _getInputs () {
            return this.el.querySelectorAll('input, textarea');
        }

        _getFormData () {
            let formData = {
                exercise:{}
            };

            formData.exercise.name = this.el.querySelector('.exercise-add-form__name').value;
            formData.exercise.description = this.el.querySelector('.exercise-add-form__description').value;
            formData.exercise.videoTutorialLink = this.el.querySelector('.exercise-add-form__video-tutorial-link').value;
            formData.exercise.variableParamentrName = this.el.querySelector('.exercise-add-form__variable-parameter-name').value;

            return formData;
        }

    }


    //export 
    window.ExerciseAddForm = ExerciseAddForm;
})();