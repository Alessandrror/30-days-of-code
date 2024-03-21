fn main() {
  let n: i8 = read_line().trim().parse().unwrap();

  if n < 2 && n > 20 {
    return
  }

  for i in 0..n {
    println!("{} x {} = {}", n, i+1, n*(i+1));
  }

}

fn read_line() -> String {
  let mut input = String::new();
  std::io::stdin().read_line(&mut input).expect("Could not read stdin!");
  input
}