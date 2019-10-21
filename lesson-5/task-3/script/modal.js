'use strict';

class ModalDialog {
    /**
     * Конструктор создает дерево элементов и 
     * привязывает события закрытия на клик по кнопке закрытия и 
     * по фону
     */
    constructor() {
        
        this.closeBtnEl = document.createElement('i');
        this.closeBtnEl.classList.add('b-modal__closeBtn', 
            'fas', 
            'fa-times-circle');
        this.closeBtnEl.addEventListener('click', this.getCloseDialogHandler())

        this.contentEl = document.createElement('div');
        this.contentEl.classList.add('b-modal__content');

        this.titleEl = document.createElement('h3');
        this.titleEl.classList.add('b-modal__title');

        this.windowEl = document.createElement('div')
        this.windowEl.classList.add('b-modal__window');
        this.windowEl.appendChild(this.titleEl);
        this.windowEl.appendChild(this.contentEl);
        this.windowEl.appendChild(this.closeBtnEl);
        this.windowEl.addEventListener('click', (event) =>{
            event.stopPropagation();
        })

        this.dialogEl = document.createElement('div');
        this.dialogEl.classList.add('b-modal', 
            'b-modal_show');
        this.dialogEl.setAttribute('id', 'modal');
        this.dialogEl.appendChild(this.windowEl);
        this.dialogEl.addEventListener('click', this.getCloseDialogHandler())

    }

    /**
     * Устанавливает текст заголовка
     * 
     * @param {String} value - присваиваемое значение
     * 
     * @memberof ModalDialog
     */
    set title(value) {
        this.titleEl.innerText = value;
    }

    /**
     * Устанавливает содержимое модального окна
     * 
     * @param {HtmlString} value - присваиваемое значение
     * 
     * @memberof ModalDialog
     */
    set content(value) {
        this.contentEl.innerHTML = value
    }

    /**
     * Устанавливает ширину диалогового окна
     * @param {String} value - Ширина окна в любой единице измерения css
     *
     * @memberof ModalDialog
     */
    set width(value){
        this.windowEl.style.width=value;
    }
    
    /**
     * Осуществляет показ диалогового окна
     *
     * @memberof ModalDialog
     */
    showDialog() {
        document.body.appendChild(this.dialogEl);
        this.windowEl.classList.add( 'puffIn');
        setTimeout(()=>{
            this.windowEl.classList.remove('puffIn');
        }, 1000);
    }

    /**
     * Возвращает callback функцию для показ модального окна 
     * с заданными параметрами
     *
     * @param {Object} params
     * @param {String} params.title - Заголовок окна
     * @param {String} params.content - Содержимое окна
     * @param {String} params.width - Ширина окна
     * 
     * @returns {Function} - CallBack функция для показа окна
     * @memberof ModalDialog
     */
    getShowDialogHandler(params){
        return () => {
            this.title = params.title;
            this.content = params.content;
            if (params.width){
                this.width = params.width
            }
            this.showDialog();
        }
    }

    /**
     * Осуществляет скрытие модального окна
     *
     * @param {Object} params
     * @param {String} params.title - Заголовок окна
     * @param {String} params.content - Содержимое окна
     * @param {String} params.width - Ширина окна
     * 
     * @returns {Function} - CallBack функция для показа окна
     * @memberof ModalDialog
     */
    closeDialog() {
        this.windowEl.classList.add('vanishOut');
        setTimeout(()=>{
            document.body.removeChild(this.dialogEl);
            this.windowEl.classList.remove('vanishOut');
        }, 500);
    }

    /**
     * Возвращает callback функцию для скрытия модального окна 
     * с заданными параметрами
     *

     * @returns {Function} - CallBack функция для скрытия окна
     * @memberof ModalDialog
     */
    getCloseDialogHandler() {
        return () => this.closeDialog();
    }    
}


