def main():
  N = int(input().strip())
  if N%2 and N>0 and N<100:
    print('Weird')
  elif not(N%2) and N>=2 and N<=5:
    print('Not Weird')
  elif not(N%2) and N>=6 and N<=20:
    print('Weird')
  elif not(N%2) and N>20:
    print('Not Weird')

main()