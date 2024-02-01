# Enter your code here. Read input from STDIN. Print output to STDOUT
def main():

  t = int(input().strip())

  for _ in range(t):
    s = input().strip()
    # create_outputs(s)
    even = []
    odd = []

    for i, v in enumerate(s):
      odd.append(v) if i % 2 else even.append(v)

    print(f'{"".join(even)} {"".join(odd)}')

main()