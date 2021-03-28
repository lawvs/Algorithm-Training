impl Solution {
    pub fn reverse_bits(x: u32) -> u32 {
        let mut x = x;
        let mut ans = 0;
        for n in 0..32 {
            let bit = x & 1;
            x >>= 1;
            ans = (ans << 1) + bit;
            // println!("{} {} {}", ans, x, bit);
        }
        ans
    }
}
