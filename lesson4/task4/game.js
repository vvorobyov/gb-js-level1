'use strict';

const game = {};

/**
 * Основной игровой цикл
 */
game.run = function() {
    const palayer_name = prompt("Представьтесь. Как вас зовут?");
    if (palayer_name){
        let start = confirm(`Готовы начать?`);
        game:
        // Бесконечный цикл
        while(start){
            const player = new Player(palayer_name, 5);
            for (let question = player.get_question(), i=1; question !=null; i++, question = player.get_question()) {
                let answers = '', answer_num = 1;
                for (const answer of question.answers) {
                    answers += `${answer_num}. ${answer}\n`;
                    answer_num++;
                }
                const player_answer = prompt(
                        `Вопрос № ${i}. "${question.question}"\n\n` + 
                        `Варианты ответов:\n ${answers}`),
                    answer_result = player.answer(player_answer);
                if (player_answer===null){ break game;}
                if (answer_result){
                    alert("Это правильный ответ!");
                }else{
                    alert("С такими ответами нужно было сидеть дома.");
                }
            }

            const game_result = player.get_result();

            alert(
                `Итоги викторины:\n\nВсего вопросов: ${game_result.answers_count}\n`+
                `Правильных ответов: ${game_result.correct_count}`
            );
            start = confirm('Хотите сыграть еще раз?');
        }
    }
    alert('Жаль что вы уходите.');
    console.log('Игра окончена!')
};


/** 
 * Метод инициализации игры
*/
game.init = function init() {
    console.log("Добро пожаловать в игру кто хочет стать Милиционером");
    console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
}

game.init();

