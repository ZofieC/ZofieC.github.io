document.addEventListener('DOMContentLoaded', () => {

    const board = document.createElement('div');
    board.className = 'board';
    app.appendChild(board);
    
    function generateCardValues() {
        const values = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        const gameValues = values.concat(values);
        return gameValues.sort(() => Math.random() - 0.5);
    }
});