def factorial(n)
  # Write your code here
  return n > 1 ? n * factorial(n - 1) : n
end

def main ()
  n = gets.to_i

  result = factorial(n)

  puts result
end

main()