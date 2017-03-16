(function () {
	'use strict';

	//import
	const ExerciseAddForm = window.ExerciseAddForm;
	const ExerciseInfo = window.ExerciseInfo;

	//external data
	// let appData = {
	// 	exercises: [
	// 		{
	// 			name: "Жим лежа, повторения",
	// 			description: "Жим лежа описание...",
	// 			videoTutorialLink: "https://www.youtube.com/...",
	// 			variableParametrName: "Штанга, кг",
	// 		},
	// 		{
	// 			name: "Присед, повторения",
	// 			description: "Присед описание...",
	// 			videoTutorialLink: "https://www.youtube.com/...",
	// 			variableParametrName: "Штанга, кг",
	// 		},
	// 		{
	// 			name: "Становая тяга, повторения",
	// 			description: "Становая тяга описание...",
	// 			videoTutorialLink: "https://www.youtube.com/...",
	// 			variableParametrName: "Штанга, кг",
	// 		}

	// 	],
	// 	trainSets: JSON.parse('[{"time":"2017-03-15T21:59:27.944Z","result":40,"variableParametrValue":null,"exercise":{"name":"Отжимания","variableParametrName":"Утяжеление"}},{"time":"2017-03-15T21:59:46.269Z","result":"123123","variableParametrValue":"123123","exercise":""},{"time":"2017-03-15T22:00:54.957Z","result":"123","variableParametrValue":"123","exercise":""}]')
	// };

	function makeRequest(cb) {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', '/data/appData.json', true);

		xhr.onload = () => {
			console.log('onload DATA:', JSON.parse(xhr.responseText));
			cb(JSON.parse(xhr.responseText));
		}

		xhr.send();
		console.log('after send DATA:', xhr.responseText);
	}


	class App {
		constructor(options) {
			this.el = options.el;


			makeRequest(appDataResponse => {
				this.appData = appDataResponse;

				this._createComponents();
				this._initMediate();
				this._bindData()
				this.render();
			});
		}

		render() {
			this.exerciseInfo.render();
			this.exerciseAddForm.render();
			this.exerciseResultForm.render();
			this.trainingProgress.render();
		}

		_createComponents() {
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

		_bindData() {
			//dataBinding
			this.exerciseInfo.data.exercises = this.appData.exercises;
			this.exerciseResultForm.data.exercises = this.appData.exercises; //для выпадающего списка
			this.trainingProgress.data.trainSets = this.appData.trainSets;
		}

		_initMediate() {

			this.exerciseAddForm.on('add-exercise', (event) => {

				let data = event.detail;

				this.exerciseInfo.addExercise(data.exercise);
				this.exerciseInfo.render();
				this.exerciseResultForm.render(); //Для обновления списка упражнений
				this.exerciseAddForm.reset();
			});

			this.exerciseResultForm.on('add-train-set', (event) => {

				let data = event.detail;

				this.trainingProgress.addTrainSet(data.trainSet);
				this.trainingProgress.render();
				this.exerciseResultForm.reset();
				//Проверка, что данные появляются в глобальных данных.
				//alert(JSON.stringify(this.appData, null, 3));
			});

			this.exerciseInfo.on('click', (event) => {

				let data = event.detail;

				alert('Показать подробную информацию по данному упражнению в блоке - exercise-detailed-info, - exerciseDetailedInfo.showDetails(currentTarget.exercise)');
				// this.trainingProgress.addTrainSet(data.trainSet);
				// this.trainingProgress.render();
				// this.exerciseResultForm.reset();
			});
		}

		// methods
	}

	//export
	window.App = App;
})();