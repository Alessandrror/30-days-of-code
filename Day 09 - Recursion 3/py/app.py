def factorial(n):
    # Write your code here
    return n if n <= 1 else n * factorial(n - 1)

def main():

  n = int(input().strip())

  result = factorial(n)

  print(result)

main()
