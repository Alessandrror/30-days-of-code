class Solution
{
  public static void Main(string[] args)
  {
    int n = Convert.ToInt32(Console.ReadLine().Trim());
    int counter = 0;
    int maxCounter = 0;

    while (n > 0)
    {
      var condition = n % 2 == 1 ? counter++ : counter = 0;
      n = Convert.ToInt32(n/2);
      if (maxCounter < counter)
      {
        maxCounter = counter;
      }
    }

    Console.WriteLine(maxCounter);
  }
}
