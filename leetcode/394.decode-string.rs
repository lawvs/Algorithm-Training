impl Solution {
    pub fn decode_string(s: String) -> String {
        let mut ds = String::new();
        let cp = s.chars();
        let mut cnt = 0;
        let mut sub = String::new();
        let mut flag = 0;
        for c in cp {
            if flag > 0 {
                if c == '[' {
                    flag += 1;
                }
                if c == ']' {
                    flag -= 1;
                    if flag == 0 {
                        // print!("{} ", sub);
                        let ssub = Solution::decode_string(sub);
                        // println!("{}", ssub);
                        for i in 0..cnt {
                            ds.push_str(&ssub.to_string());
                        }
                        flag = 0;
                        sub = String::new();
                        cnt = 0;
                        continue;
                    }
                }
                sub.push(c);
                continue;
            }

            if c.is_ascii_alphabetic() {
                ds.push(c);
                continue;
            }
            if c.is_ascii_digit() {
                cnt = cnt * 10
                    + match c.to_digit(10) {
                        Some(x) => x,
                        None => panic!("Unreachable"),
                    };
                continue;
            }

            if c == '[' {
                flag += 1;
                continue;
            }
        }
        ds.to_string()
    }
}
