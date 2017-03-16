<?php

//1. Дана строка 'PHP'. Сделайте из нее строку 'php'.
$exercise_1 = 'PHP';
echo(mb_strtolower($exercise_1));

//2. Дана переменная $str, в которой находится текст сообщения, который отправляется в Twitter API,
// однако твиттер имеет ограничение на длинну сообщения в 150 символов. Преобразовать строку
// следующим образом - если длинна сообщения больше 150, то отрезать лишний текст и добавлять ...
// (три точки) в конец сообщения. Если длинна не превышает - ничего не делать

$exercise_2 = 'To be happy with a man you must understand him a lot and love him a little.
 To be happy with a woman you must love her a lot and not try to understand her at all.';
$symbols = str_split($exercise_2);
$result = count($symbols);
if ($result <= 150) {
    echo $exercise_2;
} else {
    echo($rest = mb_substr($exercise_2, 0, 150) . "...");
}

//3.  В переменной $date лежит дата в формате '2013-12-31'. Преобразуйте эту дату в формат '31.12.2013' .
$date = '2013-12-31';
$DateOne = explode("-", $date);
print_r($DateOne);
echo $DateOne[2] . "." . $DateOne[1] . "." . $DateOne[0];

//4. Описать матрицу 3х3, произвести операцию транспонирования матрицы.

$array = [[2, 3, 4], [5, 6, 7], [8, 9, 1]];
for ($i = 0; $i <= 2; $i++) {
    for ($j = 0; $j <= 2; $j++) {
        $array[$i][$j] = $array[$j][$i];
    }
}

print_r($array);

//5. Дан массив чисел (например, Фибоначчи) .
//Организовать проверку является ли вводимое пользователем числом Фибоначчи (вхождение в заданный массив).
$fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
$Vvedi = 6;
if (in_array($Vvedi, $fibonacci)){
echo 'Это число Фибоначчи';
}
else {
    echo 'Это не число Фибоначчи!';
}

