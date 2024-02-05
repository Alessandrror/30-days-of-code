def main():
  n = int(input().strip())
  counter = 0
  max_count = 0

  while n > 0:
    if n % 2:
      counter+=1
    else:
      counter = 0

    n = int(n/2)
    if (max_count < counter):
      max_count = counter

  print(max_count)

main()
