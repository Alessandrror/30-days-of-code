<?php

$n = intval(trim(fgets(STDIN)));

if ($n < 2 && $n > 20) {
  return;
}

for ($i = 0; $i < 10; $i++) {
  echo $n . " x " . $i+1 . " = " . $n*($i+1) . "\n";
}

?>