# Abstract Priority Queue

This simple library provides an abstract Priority Queue class that can be inherited from
to work with any data type. It can function as a min-heap, max-heap, BST, any way you define the priority function.

## Inheriting
When inheriting from this class you only need to define a method called 'isHigherPriority'
which provides the logic for comparing two items from the queue.

For example:

``` ts
class Dog {
  constructor(
    public name:string,
    public weight:number
  ) {}
}

class DogPile extends PriorityQueue<Dog> {
  protected isHigherPriority(a: Dog, b: Dog): boolean {
    if (a.weight < b.weight) return false;
    return true;
  }
}
```

Under the hood, the Priority Queue implements a heap structure, using the abstract `isHigherPriority` method to
determine how to sift the heap contents. In this way, classes that inherit from the PriorityQueue can behave like a MinHeap, MaxHeap, or anything else that sorts items
based on any amount of complex priority logic!

## Using the Queue

The queue provides the following method to interact with the data:

| Method | Description |
|-|-|
| `insert(item:T)` | Add an item to the queue |
| `pop() => T` | Returns the highest priority item and removes it from the queue  |
| `peek() => T` | Returns the highest priority item but leaves it in the queue  |
| `toArray() => T[]` | Returns the internal array of the queue - does NOT guarantee sorted order. |
| `toSortedArray() => T[]` | Returns an array of all queue elements sorted by priority. |

Example usage (continuing from above):

``` ts
let dogPile = new DogPile();

let ernie = new Dog("Ernie",7);
let humph = new Dog("Humphrey",9);
let tums = new Dog("Mr. Tums",2);

dogPile.insert(humph);
dogPile.insert(ernie);

dogPile.peek()
// { name: "Ernie", age: 7 }

dogPile.insert(tums);
dogPile.toSortedArray();
/*
[
  { name: "Mr. Tums", age: 2 },
  { name: "Ernie", age: 7 },
  { name: "Humphrey", age: 9 },
]
*/

dogPile.pop();
// { name: "Mr. Tums", age: 2 }

dogPile.toSortedArray()
/*
[
  { name: "Ernie", age: 7 },
  { name: "Humphrey", age: 9 },
]
*/
```
