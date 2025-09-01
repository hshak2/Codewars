class Queue {
    constructor() {
        // implement your Queue constructor here
      this.items = []
    }

    enqueue(item) {
        // add item to the queue
      this.items.push(item)
    }

    dequeue() {
      // remove item from the front of the queue and return its value
      return this.size===0 ? "I'm number one!" : this.items.shift()
    }

    size() {
      // return number of items in queue so far
      return this.items.length
    }
}