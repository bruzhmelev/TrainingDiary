(function () {
	'use strict';

	//import
	const ExerciseAddForm = window.ExerciseAddForm;
	const ExerciseInfo = window.ExerciseInfo;

	class App {
		constructor(options) {
			this.el = options.el;

			this._createComponents();
			this._initMediate();

			this.render();
		}

		render () {
			this.exerciseInfo.render();
			this.exerciseAddForm.render();
			this.exerciseResultForm.render();
			this.trainingProgress.render();
		}

		_createComponents () {
			this.exerciseAddForm = new ExerciseAddForm({
				el: document.querySelector('.exercise-add-form')
			});

			this.exerciseInfo = new ExerciseInfo({
				el: document.querySelector('.exercise-info')
			});

            this.exerciseResultForm = new ExerciseResultForm({
				el: document.querySelector('.exercise-result-form')
			});

			this.trainingProgress = new TrainingProgress({
				el: document.querySelector('.training-progress')
			});
		}

		_initMediate () {
            
			this.exerciseAddForm.on('add-exercise', (event) => {

				let data = event.detail;

				this.exerciseInfo.addExercise(data.exercise);
				this.exerciseInfo.render();
				this.exerciseAddForm.reset();
			});

			this.exerciseResultForm.on('add-train-set', (event) => {

				let data = event.detail;

				this.trainingProgress.addTrainSet(data.trainSet);
				this.trainingProgress.render();
				this.exerciseResultForm.reset();
			});
		}
	
		// methods
	}

	//export
	window.App = App;
})();