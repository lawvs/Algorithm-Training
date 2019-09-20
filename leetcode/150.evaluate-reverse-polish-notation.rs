impl Solution {
    pub fn eval_rpn(tokens: Vec<String>) -> i32 {
        let mut vec: Vec<i32> = Vec::new();
        for s in tokens {
            match s.as_str() {
                c if c == "+" || c == "-" || c == "*" || c == "/" => {
                    let n1 = vec.pop().unwrap();
                    let n2 = vec.pop().unwrap();
                    match c {
                        "+" => vec.push(n1 + n2),
                        "-" => vec.push(n2 - n1),
                        "*" => vec.push(n1 * n2),
                        "/" => vec.push(n2 / n1),
                        _ => unreachable!(),
                    }
                }
                num => vec.push(s.parse().unwrap()),
            }
        }
        return *vec.first().unwrap();
    }
}
