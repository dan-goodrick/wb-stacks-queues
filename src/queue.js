// Example queue implementation using an array.
// This is a straightforward implementation, but it's not very efficient. For a more efficient
// queue implementation, you should build a queue using a linked list.

export class Queue {
  constructor() {
    this._data = {};
    this.tail = 0
    this.head = 0
  }

  enqueue(value) {
    this._data[this.tail] = value;
    this.tail++;
  }

  dequeue() {
    const item = this._data[this.head];
    delete this._data[this.head]
    this.head++
    return item
  }

  get length () {
    return this.tail-this.head
  }

  peek() {
    if (this.isEmpty()) return null
    return this._data[this.head];
  }

  isEmpty() {
    return this.tail === this.head;
  }
}

export class Deque extends Queue {
  pop() {
    const item = this._data[this.tail-1];
    delete this._data[this.tail-1]
    this.tail--
    return item
  }

  push(value) {
    this._data[this.head] = value;
    this.head++;
  }
}