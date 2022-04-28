/**
 * @param {number[][]} circles
 * @return {number}
 * https://leetcode.com/contest/weekly-contest-290/problems/count-lattice-points-inside-a-circle/
 * Constraints:

1 <= circles.length <= 200
circles[i].length == 3
1 <= xi, yi <= 100
1 <= ri <= min(xi, yi)
 */
 var countLatticePoints = function(circles) {
     //////// 1 Algo
    // let stack = [];
    // let x, y;
    // let xSquare, ySquare;
    // for(let i = 0; i < circles.length; i++) {
    //     // Find a potential y
    //     // var ySquare = r * r - x * x;
    //     // var y = parseInt( Math.sqrt(ySquare));
    //     // console.log('r' + circles[i][2]);
    //     // console.log('x' + circles[i][0]);
    //     // console.log('y' + circles[i][1]);
    //     xSquare = circles[i][2] * circles[i][2] - circles[i][0] * circles[i][0];
    //     x = parseInt(Math.sqrt(Math.abs(xSquare)));
    //     // console.log(Math.sqrt(Math.abs(xSquare)));
    //     // console.log(xSquare + ' - ' + x);

    //     ySquare = circles[i][2] * circles[i][2] - circles[i][1] * circles[i][1];
    //     y = parseInt(Math.sqrt(Math.abs(ySquare)));
    //     // console.log(ySquare + ' - ' + y);

    //     if(((x < circles[i][0] && x > 0) || (x > circles[i][0] && x < 0)) && ((y < circles[i][1] && y > 0) || (y > circles[i][1] && y < 0))) {
    //         stack.push({
    //             x: x,
    //             y: y
    //         });
    //     }
    //     console.log(stack);
    // }

    // return stack.length;

    //////// 2 Algo
    // let stack = [];
    // let x, y;
    // for(let i = 0; i < circles.length; i++) {
    //     for(let j = 0; j < 360; j++) {//iterate over theta from 0 to 360 degrees
    //         x = Math.round(Math.sin(j) * circles[i][0]);//sin theta = x/y => x = r*sin theta
    //         y = Math.round(Math.cos(j) * circles[i][1]);//cos theta = y/r => y = r*cos theta
    //     }

    //     console.log(x + ' - ' + y);
    //     if(((x <= circles[i][0] && x >= 0) || (x >= circles[i][0] && x <= 0)) && ((y <= circles[i][1] && y >= 0) || (y >= circles[i][1] && y <= 0))) {
    //         stack.push({
    //             x: x,
    //             y: y
    //         });
    //     }
    //     console.log(stack);
    // }

    // return stack.length;

    //////// 3 Algo
    // let count = 0;
    // for(let i = 0; i < circles.length; i++) {
    //     for(let x = 0; x <= circles[i][2]; x++) {   
    //         for(let y = 0; y <= circles[i][2]; y++) {
    //             // if(R*R==i*i+j*j)
    //             if(circles[i][2] * circles[i][2] == x*x + y*y)
    //                 count++;
    //         }
    //     }
    // }

    // return count;

    //////// 4 Algo
    let s = 0;
    let stack = [];
    for(let i = 0; i < circles.length; i++) {
        for(let x = 1; x <= circles[i][2]; x++) {   
            s += parseInt(Math.sqrt(circles[i][2]*circles[i][2]-x*x));
            s *= 4;
            s += 1+4*circles[i][2];
        }

        stack.push(s);
        s = 0;
    }

    return stack.reduce((a, b) => a+b, 0);
};

console.log(countLatticePoints([[2,2,1]]));
console.log(countLatticePoints([[2,2,2],[3,4,1]]));