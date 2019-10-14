'use strict';


/**
 * Класса Player представляет собой отдельную игровую сессию
 * @property {String} name - Имя игрока
 * @method get_question - Возвращает текущий вопрос в виде литерального объекта Null если все вопросы разыграны
 * @method answer - Принимает ответ на текущий вопрос и возвращает 
 * 
 * @constructor - подготавливает список вопросов
 * @param {String} name - Имя игрока
 * @param {Number} questions_count - Количество вопросов необходимых для викторины
 */
function Player(name, questions_count) {
    let correct_answers = 0,
        current_question = 0,
        questions_list = QuestionsFactory.get_questions(questions_count);

        this.name = name;
    
    /**
     * Метод получения текущего вопроса
     *
     * @returns {Object|null} - Текущий вопрос в формета:
     *                      { question {String}, - Вопрос
     *                        answers {Array<String>} - Варианты ответов
     *                      }
     *                      null - Вопросы закончились
     */
    this.get_question = () => {
        if (current_question >= questions_list.length) {return null;}
        return {
            question: questions_list[current_question].question,
            answers: questions_list[current_question].get_answers()
        };
    };
    /** 
     * Метод проверки ответа. Проверяет ответ и меняет текущий вопрос, а также ведет статистику
     * @param {Number} - Номер ответа игрока
     * 
     * @returns {Boolean|null} - Результат проверки:
     *                           true - Ответ правильный
     *                           false - Ответ не правильный
     *                           null - Вопросы закончились
    */
    this.answer = (answer) => {
        if (current_question >= questions_list.length) {return null;}
        const result = questions_list[current_question].check_answer(answer);
        current_question++;
        if (result) {correct_answers++;}
        return result;
    }
    

    /** 
     * Метод возвращает текущие результаты викторины
     * 
     * @returns {Object} - Результата викторины в формате:
     *                      {
     *                         {Number} answers_count - Общее количество ответов
     *                         {Number} correct_count - Количество правильных ответов
     *                      }
    */
    this.get_result = ()=> {
        return {
            answers_count: current_question,
            correct_count: correct_answers
        }
    }
}