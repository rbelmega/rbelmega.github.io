I'm always asking myself: should I be an engineer to write a code (a good/an efficient code)? If I have to answer in one word - than yes. But I want to give a bit wider answer.
In our daily work we sometimes have to deal with resolving routine tasks: 

- sort some array;
- find min/max from a given array;
- or find some item in an array (we call it 'perk')

Well, we all are familiar with that kind of tasks and they seem boring to us

- array sorting:
```
var a = ["banana", "pear", "apple"];
a.sort();
```
```
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
 a.sort(function (a,b) {
     return a - b;
 })
```

- finding min/max from a given array;
```
var a = [1, 22, 3, 6, 5, 6, 17, 8, 9, 10, 11];
var max = a[0];
for (var i = 1; i < a.length; i++) {
    if (a[i] > max) {
        max = a[i];
    }
}
```
or if you are a JavaScript ninja:
```
var a = [1, 22, 3, 6, 5, 6, 17, 8, 9, 10, 11];
var max = Math.prototype.max.apply(null, a)
```

- finding some item in an array (we call that item *perk*)
```
var a = [1, 22, 3, 6, 5, 6, 17, 8, 9, 10, 11];
var foundItem;
for (var i = 1; i < a.length - 1; i++) {
    if (a[i-1] > a[i] && a[i] > a[i+1]) {
        foundItem = a[i];
        break;
    }
}
```



If you are OK with that and you don't want to waste your time for other ways to resolve that tasks - you can skip next part of this article. But I want to show how we can write more efficient code to solve that routine tasks.

## Lets take a look at a first task: sorting:

The first thing, that we should know is algorithm complexity (how fast or slow particular algorithm performs). The time complexity of algorithms is most commonly expressed using the **big O notation**. There are many sorting algorithms, but we will focus on a few of them

## Array Sorting Algorithms

|  Algorithm     | Best         |  Average     |  Worst       |
|----------------|--------------|--------------|--------------|
| Quicksort      |  O(n log(n)) | O(n log(n))  |  O(n^2)      |
| Mergesort	     |  O(n log(n)) | O(n log(n))  |  O(n log(n)) |
| Bubble Sort    |  O(n)        | O(n^2)       |  O(n^2)      |
| Insertion Sort |  O(n)        | O(n^2)       |  O(n^2)      |
| Selection Sort |  O(n^2)      | O(n^2)       |  O(n^2)      |

Usually we use ***Array.prototype.sort*** to solve that kind of task. Its implementation depends on browser. For example:

**WebKit** implementation uses min **sort/selection** sort. Time complexity for it:

- Best - **O(n^2)**
- Average - **O(n^2)**
- Worst - **O(n^2)**

**SpiderMonkey** uses **MergeSort**. Time complexity for it: 

- Best - **O(n log(n))**
- Average - **O(n log(n))**
- Worst - **O(n log(n))**

So. the question is next: **can we speed up this process**?
**Yes, we can.** We can write more efficient algorithm for sorting a given array, but it always depends on other stuff (size of array, sorting types, supported browsers, etc). And you should decide if the game is worth the candle. (e.g if you should sort a small array - you don't need to worry about some other way).
I've spent a lot of time measuring the time that needed for sorting and want to share with u my results. The task was to sort an array with a number. I've started from a small number: 10 000 items in the array and used next algorithms:

- native sorting;
- quickSort;
- insertSort;
- selectSort;
- mergeSort;

and browsers:

- Chrome (v49);
- Firefox (v44);
- Safari (v9);

Sorry, I'm using Mac, so I have to skip IE (whew)
The average results:

|  Algorithm     | Chrome       |  Safari      |  Firefox     |
|----------------|--------------|--------------|--------------|
| Native         | 10.31 ms.    | 5.46 ms.     |  1.28 ms.    |
| Quicksort      | 1.22 ms.     | 5.90 ms.     |  1.38 ms.    |
| Mergesort	     | 22.78 ms.    | 19.49 ms.    |  50.31 ms.   |
| Selection Sort | 65.01 ms.    | 229.47 ms.   |  40.52 ms.   |
| Insertion Sort | 2216.05 ms.  | 109.50 ms.   |  684.96 ms.  |

The same for 100 000 items:

|  Algorithm     | Chrome       |  Safari      |  Firefox     |
|----------------|--------------|--------------|--------------|
| Native         | 74.20 ms.    | 50.33 ms.    |  18.64 ms.   |
| Quicksort      | 12.61 ms.    | 46.22 ms.    |  10.92 ms.   |
| Mergesort	     | 255.95 ms.   | 232.53 ms.   |  5122.30 ms. |
| Selection Sort | 6713.54 ms.  | 23995.65 ms. |  4302.59 ms. |
| Insertion Sort | 239362.14 ms.| 11070.45 ms. |  30293.03 ms.|


Lets do the same, but for now we will sort array with strings
10 000 items:

|  Algorithm     | Chrome       |  Safari      |  Firefox     |
|----------------|--------------|--------------|--------------|
| Native         | 6.87 ms.     | 4.46 ms.     |  2.38 ms.    |
| Quicksort      | 3.11 ms.     | 8.67 ms.     |  5.26 ms.    |
| Mergesort	     | 24.95 ms.    | 24.78 ms.    |  59.59 ms.   |
| Selection Sort | 422.77 ms.   | 1083.81 ms.  |  1120.24 ms. |
| Insertion Sort | 339.91 ms.   | 554.98 ms.   |  1216.12 ms. |

100 000 items:

|  Algorithm     | Chrome       |  Safari      |  Firefox      |
|----------------|--------------|--------------|---------------|
| Native         | 104.92 ms.   | 66.17 ms     |  41.73 ms.    |
| Quicksort      | 39.95 ms.    | 120.00 ms.   |  135.39 ms.   |
| Mergesort	     | 297.62 ms.   | 311.78 ms.   |  45494.27 ms. |
| Selection Sort | 53346.07 ms. | 184812.93 ms.|  133978.07 ms.|
| Insertion Sort | 47538.18 ms. | 126750.69 ms.|  209825.14 ms.|


So now you see how you can speed up your sorting task. Surely it depends on sorting types and browsers
## Sorting and AngularJS
I feel like I would be remiss if I didn't use this opportunity to write about sorting in AngularJS. I've been using this framework more than year. The first thing that I've mentioned was "wow, how fast u can write a simple application". If u want to render a list of items in a given array - u can use ng-repeat for this. If u need to sort this list - u can use built-in filter. And looks like AngularJS can solve all your tasks. 

controller
``` 
listCtrl.list = data;
```

view
```
<ul>
    <li ng-repeat="item in list track by item.id | orderBy: 'name'">{{::item.name}}</li>
</ul>
```


But than we've got a task to render a large number of items. Browser crashed when we tried to render it for the first time. We've tries a different ways to solve this task:

- limitTo
- lazy rendering
- pagination
- 3d-party modules

And looks like angular-vs-repeat suited our needs. But it was only for rendering. We still had a task to sort it. And we used a simple AngularJS filter to sort that list.
But from that u have learned from this post now we can solve this task in more efficient way

controller
```
var sortField = "name";
listCtrl.list = QuickSort(data, sortField);
```

view
```
<ul vs-repeat>
    <li ng-repeat="item in list">{{::item.name}}</li>
</ul>
```

http://jsperf.com/alg