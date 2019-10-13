'use strict';

function Player(name, questions_count) {
    let correct_answers = 0,
        current_question = 0,
        questions_list = QuestionsFactory.get_questions(questions_count);
    this.name = name;

    this.get_question = () => {
        if (current_question >= questions_list.length) {return null;}
        return {
            question: questions_list[current_question].question,
            answers: questions_list[current_question].get_answers()
        };
    };
    this.answer = (answer) => {
        if (current_question >= questions_list.length) {return null;}
        const result = questions_list[current_question].check_answer(answer);
        current_question++;
        if (result) {correct_answers++;}
        return result;
    }
    
    this.get_result = ()=> {
        return {
            answers_count: current_question,
            correct_count: correct_answers
        }
    }
}