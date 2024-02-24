n = gets.strip.to_i
counter = 0
max_counter = 0

while n > 0
    n % 2 == 1 ? counter+=1 : counter = 0
    n = Integer(n / 2)
    if max_counter < counter
        max_counter = counter
    end
end

puts max_counter
