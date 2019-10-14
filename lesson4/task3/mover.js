let mover = {
    /**
     * Получает и отдает направление от пользователя.
     * @returns {int} Возвращаем направление, введенное пользователем.
     */
    getDirection() {
        // Доступные значения ввода.
        const availableDirections = [
            7, 8, 9,
            4,    6,
            1, 2, 3,
            ];

        while (true) {
            // Получаем от пользователя направление.
            let direction = parseInt(prompt('Введите число (1, 2, 3, 4, 6, 7, 8 или 9), куда вы хотите переместиться, "Отмена" для выхода.'));
            if (isNaN(direction)) {
                return null;
            }
            // Если направление не одно из доступных, то сообщаем что надо ввести корректные данные
            // и начинаем новую итерацию.
            if (!availableDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из чисел 1, 2, 3, 4, 6, 7, 8 или 9.');
                continue;
            }

            // Если пользователь ввел корректное значение - отдаем его.
            return direction;
        }
    },

    /**
     * Отдает следующую точку в которой будет находиться пользователь после движения.
     * @param {int} direction Направление движения игрока.
     * @returns {{x: int, y: int}} Следующая позиция игрока.
     */
    getNextPosition(direction) {
        // Следующая точка игрока, в самом начале в точке будут текущие координаты игрока.
        const nextPosition = {
            x: player.x,
            y: player.y,
        };
        // Определяем направление и обновляем местоположение игрока в зависимости от направления.
        // Изменение позиции по оси Y
        switch (direction) {
            case 1:
            case 2:
            case 3:
                nextPosition.y = (nextPosition.y < config.rowsCount - 1) ? nextPosition.y+1 : config.rowsCount - 1;
                break;
            case 7:
            case 8:
            case 9:
                nextPosition.y = (nextPosition.y > 0) ? nextPosition.y-1 : 0;
                break;

            }

        // Изменение позиции по оси X
        switch (direction) {
            case 3:
            case 6:
            case 9:
                nextPosition.x = (nextPosition.x < config.colsCount - 1) ? nextPosition.x+1 : config.colsCount - 1;
                break;
            case 1:
            case 4:
            case 7:
                nextPosition.x = (nextPosition.x > 0) ? nextPosition.x-1 : 0;
                break;
        }

        return nextPosition;
    },
};