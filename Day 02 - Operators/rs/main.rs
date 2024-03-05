use std::io;

fn main() {

  let mut meal = String::new();
  let mut tip_p = String::new();
  let mut tax_p = String::new();

  io::stdin().read_line(&mut meal).expect("Failed to read line");
  io::stdin().read_line(&mut tip_p).expect("Failed to read line");
  io::stdin().read_line(&mut tax_p).expect("Failed to read line");

  let meal_cost: f32 = meal.trim().parse::<f32>().expect("Please enter a valid numbr");
  let tip_percent: f32 = meal.trim().parse::<f32>().expect("Please enter a valid numbr");
  let tax_percent: f32 = meal.trim().parse::<f32>().expect("Please enter a valid numbr");

  let tip = (meal_cost/100.00)*(tip_percent);
  let tax = (tax_percent/100.00)*(meal_cost);
  let total_cost = meal_cost + tip + tax;
  println!("{}", total_cost.round());
}