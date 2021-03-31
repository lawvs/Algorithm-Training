impl Solution {
    pub fn clumsy(n: i32) -> i32 {
        let mut n = n;
        let mut op = '*';
        let mut vec = vec![n];
        n -= 1;
        while n > 0 {
            op = match op {
                '*' => {
                    let last = vec.pop().unwrap();
                    vec.push(last * n);
                    '/'
                }
                '/' => {
                    let last = vec.pop().unwrap();
                    vec.push(last / n);
                    '+'
                }
                '+' => {
                    vec.push(n);
                    '-'
                }
                '-' => {
                    vec.push(-n);
                    '*'
                }
                _ => unreachable!(),
            };
            n -= 1;
        }
        return vec.iter().sum();
    }
}
