//Objective is to find the shortest path in a binary matrix, given 0's
//are empty spaces and 1's are obstacles. You are allowed to move in all 8
//cardinal directions.

let grid = 
[[0,0,0],
 [1,1,0],
 [1,1,0]]


//O(n) solution where n is the number of elements in the matrix
//We use BFS to find the shortest path, updating the shortest path at each
//tile with Dynamic Programming

if (grid[0][0] == 1) {
    return -1
}

if (grid.length == 1 && grid[0].length == 1) {
    return 1
}

let directions = [[-1,0],[1,0],[0,1],[0,-1], [1,1], [1,-1], [-1,1], [-1,-1]]
let queue = [[0,0,0]]

let distance = new Array(grid.length)
for (let i = 0; i < grid.length; i++) {
    distance[i] = new Array(grid[i].length).fill(Infinity)
}

while (queue.length > 0) {
    let [x,y,currDis] = queue.shift() 

    for (let [dx,dy] of directions) {
        let i = x + dx
        let j = y + dy
        let tempDis = currDis + 1

        if (i >= 0 && i < grid.length && j >= 0 && j < grid[0].length && grid[i][j] != 1) {
            if (distance[i][j] > tempDis) {
                distance[i][j] = tempDis
                queue.push([i, j, tempDis])
            }    
        }
    }
}

return distance[grid.length - 1][grid[0].length - 1] == Infinity ? -1 : distance[grid.length - 1][grid[0].length - 1] + 1