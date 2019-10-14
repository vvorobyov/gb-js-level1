const questions = [
    {
        question: 'Вопрос 1',
        answers: [
            'Не правильный ответ 1',
            'Не правильный ответ 2',
            'Не правильный ответ 3'
        ],
        correct_answer:'Правильный ответ'
    },
    {
        question: 'Вопрос 2',
        answers: [
            'Не правильный ответ 1',
            'Не правильный ответ 2',
            'Не правильный ответ 3'
        ],
        correct_answer:'Правильный ответ'
    },
    {
        question: 'Вопрос 3',
        answers: [
            'Не правильный ответ 1',
            'Не правильный ответ 2',
            'Не правильный ответ 3'
        ],
        correct_answer:'Правильный ответ'
    },
    {
        question: 'Вопрос 4',
        answers: [
            'Не правильный ответ 1',
            'Не правильный ответ 2',
            'Не правильный ответ 3'
        ],
        correct_answer:'Правильный ответ'
    },
    {
        question: 'Вопрос 5',
        answers: [
            'Не правильный ответ 1',
            'Не правильный ответ 2',
            'Не правильный ответ 3'
        ],
        correct_answer:'Правильный ответ'
    },
]

/**
 * Генерация случайного целого числа в диапозоне от min до max включительно
 * @param {Number} min - начало диапазана
 * @param {Number} max - конец диапазона
 * @returns {Number} - случайное целое число
 */
function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}



/**
 * Объект вопроса 
 * @property {String} question - Вопрос
 * @method get_answers - Возвращает список ответов
 * @method check_answer - Проверяет правильность ответа
 *
 * @constructor - Принимает объект вопроса
 */
function Question(question){
    let correct_answer = randomInteger(0, question.answers.length),
        tmp_answers = question.answers.slice(),
        answers = [];

    for (let i = 0; i < question.answers.length+1; i++){
        if (i !== correct_answer) {
            let pos = randomInteger(0, tmp_answers.length-1),
                answer = tmp_answers.splice(pos, 1);
            answers.push(answer[0]);
        } else{
            answers.push(question.correct_answer)
        }
    }
        
    this.question = question.question;
    this.get_answers = () => answers.slice();
    this.check_answer = (answer) => {return answer==(correct_answer+1)};    
}



/**
 * Фабрика генерации вопросов
 */
function QuestionsFactory() {};


/** 
 * Метод получения заданного количества вопросов
 * @param {Number} count - Количество вопросов которые необходимо вернуть
 * 
 * @returns {Array<Question>} - Массив вопросов
*/
QuestionsFactory.get_questions = function(count) {
    let question_list = questions.slice(),
        result = [];
    for (let i = 0; i < count && i < questions.length; i++) {
        const pos = randomInteger(0, question_list.length-1),
              question = question_list.splice(pos, 1);
        result.push(new Question(question[0]))     
    }
    return result;
}
