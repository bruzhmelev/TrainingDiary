;(function(){
    'use strict';

    //import
	const tmpl = window.exerciseAddForm_tmpl;

    class DataService {
        constructor(){

        }


		static makeRequest(cb) {
			let xhr = new XMLHttpRequest();
			xhr.open('GET', 'data/appData.json', true);

			xhr.onload = () => {
				console.log('onload DATA:', JSON.parse(xhr.responseText));
				cb(JSON.parse(xhr.responseText));
			}

			xhr.send();
			console.log('after send DATA:', xhr.responseText);
		}
    }


    //export 
    window.DataService = DataService;
})();