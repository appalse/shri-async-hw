# Домашняя работа "Асинхронность" Вариант 3

Решение в файле [example.html](example.html) и на [github pages](https://appalse.github.io/shri-async-hw/example.html).

Пример вызова:
```
const vec1 = new AsyncArray([1, 2, 3]);
const vec2 = new AsyncArray([1, 2, 3]);
summarizeVectors(vec1, vec2, (result) => {
    result.print();
});
```

## Задание

Нужно написать функцию, которая реализует [сложение векторов](http://www.math24.ru/сложение-и-вычитание-векторов.html) (размерность векторов может быть больше 2). Массивами, математическими операциями и операциями сравнения пользоваться нельзя. Код нужно разместить на отдельной страничке и выложить её на GitHub Pages.


### Вариант 3

Реализовать [сложение векторов](http://www.math24.ru/сложение-и-вычитание-векторов.html) (размерность векторов может быть больше 2).

```ts
function(v1: AsyncArray, v2: AsyncArray, cb: (result: AsyncArray) => void) {

}
```
