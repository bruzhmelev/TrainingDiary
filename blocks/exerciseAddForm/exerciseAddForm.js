;(function(){
    'use strict';

    class ExerciseAddForm {
        constructor(options){
            this.el = options.el;

            this.name = this.el.querySelector('.exercise-add-form__name');
            this.description = this.el.querySelector('.exercise-add-form__description');
            this.videoTutorialLink = this.el.querySelector('.exercise-add-form__video-tutorial-link');
            this.variableParamentrName = this.el.querySelector('.exercise-add-form__variable-parameter-name');
            this.addButton = this.el.querySelector('.exercise-add-form__add-button');

            this.addButton.onclick = (event) => {
                alert('exercise-add-form__add-button -> addButton.onclick');
            };
        }

        //Кастомные события/триггеры
        //add-exercise - event.newExercise
        //


    }


    //export 
    window.ExerciseAddForm = ExerciseAddForm;
})();