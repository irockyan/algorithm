/**
 * 1. A,B,C三个栈结构容器
 * 1. A中自栈底到栈顶从大到小排列5个数
 * 2. B,C栈为空
 * 3. 将A中数据移到C的过程打印出来
 * 解决思路：
 * 如果B，C中的栈顶小于A的话那么移动
 */


let A = [5, 4, 3, 2, 1]
let B = []
let C = []



function hanoi(n, a, b, c) {
    if (n > 0) {
        hanoi(n - 1, a, c, b);
        //将a柱子的最上面的盘子移到c柱子
        c.push(a.pop());
        hanoi(n - 1, b, a, c);
    }
}


hanoi(A.length, A, B, C)

console.log(A)
console.log(B)
console.log(C)







