import { izip, zip } from '~/array/zip'
import { curry } from '~/function/curry'

test('sudoku', () => {
    type Cell = number | undefined
    type Board = Cell[][]
    function* generateSolutions(board: Board) {
        // copy board as it is modified inside this function
        var board = JSON.parse(JSON.stringify(board))

        for (const suggestion of generateBoards(board)) {
            board[suggestion.row][suggestion.column] = suggestion.value

            if (isPartialSolutionCorrect(board)) {
                yield board
                yield* generateSolutions(board)
            }
        }
    }

    function* generateBoards(board: Board) {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === 0) {
                    for (let k = 1; k <= 9; k++) {
                        yield { row: i, column: j, value: k }
                    }
                }
            }
        }
    }

    function isPartialSolutionCorrect(board: Board) {
        return checkRows(board) && checkRows(zip(board)) && checkGroups(board)
    }

    function isCompleteSolution(board: Board) {
        return board.every(function (row) {
            return row.every(isTruthy)
        })
    }

    function checkRows(row: Cell[][]) {
        return row.every(noDuplicates)
    }

    function checkGroups(board: Board) {
        function checkGroup(group: Cell[][][]) {
            return group.flat().every(noDuplicates)
        }
        const partitionByThree = curry(partition, 3) // partition.bind(null, 3)
        return zip(board.map(partitionByThree)).map(partitionByThree)
        ///.map(checkGroup).every(isTruthy)
    }

    function noDuplicates(array: Cell[]): boolean {
        const filtered = array.filter(isTruthy)
        return new Set([...filtered]).size === filtered.length
    }

    function partition(chunk: number, array: Cell[]) {
        return array
            .map((element, index) => {
                if (index % chunk) {
                    return []
                } else {
                    return [array.slice(index, index + chunk)]
                }
            })
            .flat()
    }

    function isTruthy(value: Cell): boolean {
        return value !== undefined
    }
})
