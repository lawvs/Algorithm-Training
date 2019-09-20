impl Solution {
    pub fn calculate(s: String) -> i32 {
        let sc = s.chars();
        let mut stack1: Vec<i32> = Vec::new(); // num
        let mut stack2 = Vec::new(); // symbol
        let mut tn: i32 = 0;
        for c in sc {
            if c == ' ' {
                continue;
            }
            // parse num
            if c.is_ascii_digit() {
                tn = tn * 10 + c.to_digit(10).unwrap() as i32;
                continue;
            }
            stack1.push(tn);
            tn = 0;
            // parse symbol
            while let Some(top) = stack2.last() {
                if *top == '*' || *top == '/' {
                    let n1 = stack1.pop().unwrap();
                    let n2 = stack1.pop().unwrap();
                    match top {
                        '*' => stack1.push(n1 * n2),
                        '/' => stack1.push(n2 / n1),
                        _ => unreachable!(),
                    }
                    stack2.pop();
                    continue;
                }
                // + -
                if c == '*' || c == '/' {
                    break;
                }
                let n1 = stack1.pop().unwrap();
                let n2 = stack1.pop().unwrap();
                match top {
                    '+' => stack1.push(n1 + n2),
                    '-' => stack1.push(n2 - n1),
                    _ => unreachable!(),
                }
                stack2.pop();
            }
            stack2.push(c);
        }

        stack1.push(tn);

        // println!("{:?}", stack1);
        // println!("{:?}", stack2);

        loop {
            if stack1.len() == 1 {
                if let Some(ans) = stack1.pop() {
                    return ans as i32;
                }
            }
            let n1 = stack1.pop().unwrap();
            let n2 = stack1.pop().unwrap();
            match stack2.pop() {
                Some('+') => stack1.push(n1 + n2),
                Some('-') => stack1.push(n2 - n1),
                Some('*') => stack1.push(n1 * n2),
                Some('/') => stack1.push(n2 / n1),
                None => unreachable!("no symbol"),
                Some(x) => unreachable!("other symbol {}", x),
            }
            // println!("{:?}", stack1);
            // println!("{:?}", stack2);
            // println!("{} {}", n1, n2);
        }
    }
}
