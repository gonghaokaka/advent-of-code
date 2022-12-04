use std:: {
    fs::File,
    io::{prelude::*, BufReader},
};

fn main() {
    println!("Day1!");

    let file = File::open("Day1.txt").expect("no file found");
    let buf : Result<BufReader<File>, E> = BufReader::new(file);

    let aa = Ok(buf);

    for line in aa {
        println!("Line: {:?}", line);
    }
}
