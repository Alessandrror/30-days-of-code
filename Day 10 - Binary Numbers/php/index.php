<?php

  $n = intval(trim(fgets(STDIN)));
  $counter = 0;
  $maxCounter = 0;
  while($n > 0)
  {
      $n % 2 ? $counter++ : $counter = 0;
      $n = intval($n / 2);
      if ($maxCounter < $counter)
      {
          $maxCounter = $counter;
      }
  }
  echo $maxCounter . "\n";

?>
