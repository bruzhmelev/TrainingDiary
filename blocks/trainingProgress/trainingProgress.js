(function(){
    'use strict';
    //var foo = bar;
    //import
    const tmpl = window.trainingProgress_tmpl;

    class TrainingProgress {
        constructor({el, data = {trainSets:[]}}){
            this.el = el;
            this.data = data;
            

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
        //     event.preventDefault();
        //     let formData = this._getFormData();

        //     this.trigger('add-exercise', formData);
        // }

        addTrainSet (newTrainSet) {
            this.data.trainSets.push(newTrainSet);
        }
    }


    //export 
    window.TrainingProgress = TrainingProgress;
})();