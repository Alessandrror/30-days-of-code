fn main() {
  let mut buf = String::new();
  io::stdin().read_line(&mut buf);

  println!("Hello world.");
  println!("{}", buf)
}