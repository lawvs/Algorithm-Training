impl Solution {
    pub fn num_decodings(s: String) -> i32 {
        let mut dp = vec![0; s.len()];
        let s = s.as_bytes();
        let n: i32 = String::from_utf8_lossy(&[s[0]]).parse().unwrap();
        if n > 0 && n < 10 {
            dp[0] = 1;
        }
        if s.len() > 1 {
            let n: i32 = String::from_utf8_lossy(&[s[1]]).parse().unwrap();
            if n > 0 && n < 10 {
                dp[1] = dp[0];
            }
        }
        if s.len() > 1 {
            let withPrevious: i32 = String::from_utf8_lossy(&[s[0], s[1]]).parse().unwrap();
            if withPrevious > 9 && withPrevious < 27 {
                dp[1] += 1;
            }
        }

        for i in 2..s.len() {
            let mut cnt = 0;
            let n: i32 = String::from_utf8_lossy(&[s[i]]).parse().unwrap();
            if n > 0 && n < 10 {
                cnt += dp[i - 1];
            }
            let withPrevious: i32 = String::from_utf8_lossy(&[s[i - 1], s[i]]).parse().unwrap();
            if withPrevious > 9 && withPrevious < 27 {
                cnt += dp[i - 2];
            }
            dp[i] = cnt;
        }

        // println!("{:?}", dp);
        dp[s.len() - 1]
    }
}
