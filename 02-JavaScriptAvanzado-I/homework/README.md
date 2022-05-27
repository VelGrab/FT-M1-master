
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x);   // Imprime 10
  console.log(a);   // Imprime 8
  var f = function(a, b, c) {
    b = a;
    console.log(b); // Imprime 8
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b); // Imprime 9
}
c(8,9,10);
console.log(b); // Imprime 10
console.log(x); // Imprime 1
```

```javascript
console.log(bar); // Imprime Undefined
console.log(baz); // Imprime Error
foo(); // Imprime Hola
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // Imprime Franco
```

```javascript
var instructor = "Tony";
console.log(instructor); // Imprime Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // Imprime Franco
   }
})();
console.log(instructor); // Imprime Tony

```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // Imprime The Flash 
    console.log(pm); // Imprime Reverse Flash
}
console.log(instructor); // Imprime The Flash 
console.log(pm); // Imprime Franco 
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // Imprime 2
"2" * "3" // Imprime 6
4 + 5 + "px" // Imprime 
"$" + 4 + 5 // Imprime "$45"
"4" - 2 // Imprime 2
"4px" - 2 // Imprime NAN
7 / 0  // Imprime Infinity
{}[0] // Imprime [0]
parseInt("09") // Imprime 9
5 && 2 // Imprime 2
2 && 5 // Imprime 5
5 || 0 // Imprime 5
0 || 5 // Imprime 5
[3]+[3]-[10] // Imprime 23
3>2>1 // Imprime false 
[] == ![] // Imprime true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // Imprime undefined debido a que el console log se encuentra arriba de la funcion
   console.log(foo()); // Imprime 2

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack; 
}

getFood(false); // No retorna nada porque se ejecuta en false.
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // Imprime Aurelio De Rosa

var test = obj.prop.getFullname;

console.log(test()); // Imprime Undefined
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1); // Imprime primero por el orden en el Call Stack
   setTimeout(function() { console.log(2); }, 1000); // Imprime tercero por el orden en el Call Stack
   setTimeout(function() { console.log(3); }, 0); // Imprime cuarto por el orden en el Call Stack
   console.log(4); // Imprime segundo por el orden en el Call Stack
}

printing(); 
```
