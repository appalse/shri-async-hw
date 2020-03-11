# Домашняя работа "Асинхронность"

Решение в файле [example.html](example.html) .


## Задание

Нужно написать функцию, которая реализует [сложение векторов](http://www.math24.ru/сложение-и-вычитание-векторов.html) (размерность векторов может быть больше 2). Массивами, математическими операциями и операциями сравнения пользоваться нельзя. Код нужно разместить на отдельной страничке и выложить её на GitHub Pages.


### Вариант 3

Реализовать [сложение векторов](http://www.math24.ru/сложение-и-вычитание-векторов.html) (размерность векторов может быть больше 2).

```ts
function(v1: AsyncArray, v2: AsyncArray, cb: (result: AsyncArray) => void) {

}
```


## Бонусное задание

Реализовать в отдельном файле собственную версию методов:

- [Promise.any](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)
- [Promise.allSettled](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)
- [Promise.prototype.finally](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)

```js
Promise._any = // реализация
Promise._allSettled = // реализация
Promise.prototype._finally = // реализация
```
