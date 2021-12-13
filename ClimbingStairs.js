const ClimbingStairs = (cost) => {
    for (let x = cost.length - 3; x > -1; x--) {
        cost[x] += Math.min(cost[x + 1], cost[x + 2]);
    }
    var result = Math.min(cost[0], cost[1]);
    return result;
}

console.log(ClimbingStairs(([0, 2, 2, 1])));
console.log(ClimbingStairs([0, 2, 3, 2]));
console.log(ClimbingStairs([10, 15, 20]));
console.log(ClimbingStairs([0, 0, 0, 0, 0, 0]));