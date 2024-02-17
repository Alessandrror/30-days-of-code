<?php

/*
 * Complete the 'factorial' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function factorial($n) {
    // Write your code here
    return $n > 1 ? $n * factorial($n - 1) : $n;
}

$n = intval(trim(fgets(STDIN)));

$result = factorial($n);

echo $result . "\n";

?>
