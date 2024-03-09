#![allow(non_snake_case)]

struct Person {
    age: i32
}

impl Person {
  fn new(initial_Age: i32) -> Person {
    // Add some more code to run some checks on initialAge
    if initial_Age < 0 {
      println!("Age is not valid, setting age to 0.");
      return Person { age: 0 };
    } else {
      return Person { age: initial_Age };
    }
  }

  fn amIOld(&self) {
    // Do some computations in here and print out the correct statement to the console
    if &self.age < &13 {
      println!("You are young.");
    } else if &self.age >= &13 && &self.age < &18 {
      println!("You are a teenager.");
    } else {
      println!("You are old.");
    }
  }

  fn yearPasses(&mut self) {
    // Increment the age of the person in here
    self.age = &self.age + 1;
  }
}

fn main() {
  let T: i32 = read_line().trim().parse().unwrap();

  for _ in 0..T {
    let age = read_line().trim().parse().unwrap();
    let mut p = Person::new(age);

    p.amIOld();

    for _ in 0..3 {
      p.yearPasses();
    }

    p.amIOld();
    println!("");
  }
}

fn read_line() -> String {
  let mut  input = String::new();
  std::io::stdin().read_line(&mut input).expect("Could not read stdin!");
  return input;
}