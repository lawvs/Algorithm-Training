impl Solution {
    pub fn add_digits(num: i32) -> i32 {
        let mut num = num;
        while num > 9 {
            let mut sum = 0;
            while num > 0 {
                sum += num % 10;
                // println!("{}", num % 10);
                num /= 10;
            }
            num = sum;
        }
        num
    }

    pub fn add_digits2(num: i32) -> i32 {
        let sum = num % 9;
        if sum == 0 && num > 0 {
            return 9;
        }
        sum
    }
}

