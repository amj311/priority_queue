let PriorityQueue = require("./dist/PriorityQueue").default

class MyQueue extends PriorityQueue {
    isHigherPriority(a,b) {
        return a<b
    }
}

let queue = new MyQueue();
queue.insert(5)
queue.insert(5)
queue.insert(2)
queue.insert(5)
console.log(queue.toArray())