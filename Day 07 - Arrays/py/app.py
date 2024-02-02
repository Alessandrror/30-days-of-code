def main():
  n = int(input().strip())

  arr = list(map(int, input().rstrip().split()))

  arrStr = []
  arr.reverse()
  for i in arr:
    arrStr.append(str(i))

  print(" ".join(arrStr))

main()