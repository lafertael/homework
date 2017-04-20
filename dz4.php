<?php
/**
 * Created by PhpStorm.
 * User: Вжак
 * Date: 28.03.2017
 * Time: 15:55
 */

//1.  Написать функцию , которая будет записывать в файл передаваемую строку в зашифрованном виде (base64)
function InputBase64($str)
{
$t = base64_encode($str);
    $k = fopen('base64.txt', 'w');
    fwrite($k, $t);
    fclose($k);
}

InputBase64('КРЯ КРЯ цууууууууууууууу');

//2. Функцию для считывания и расшифровки этой строки.

function OutputBase64Decode()
{
    $l = fopen('base64.txt', 'r+');
    $text = fread($l, filesize('base64.txt'));
    $decode = base64_decode($text);
    echo $decode;
}

OutputBase64Decode();

?>
