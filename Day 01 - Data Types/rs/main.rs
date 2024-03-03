use std::io;

fn main() {
    let i: i32 = 4;
    let d: f32 = 4.0;
    let s: &str = "Some word";

    let mut i2 = String::new();
    let mut d2 = String::new();
    let mut s2 = String::new();

    io::stdin().read_line(&mut i2).expect("Failed to read line");
    io::stdin().read_line(&mut d2).expect("Failed to read line");
    io::stdin().read_line(&mut s2).expect("Failed to read line");

    let i2: i32 = i2.trim().parse::<i32>().expect("Please enter a number");
    let d2: f32 = d2.trim().parse::<f32>().expect("Please enter a number");

    let ir: i32 = i + i2;
    let dr: f32 = d + d2;

    println!("{}", ir);
    println!("{}", dr);
    println!("{} {}", s, s2);
}
