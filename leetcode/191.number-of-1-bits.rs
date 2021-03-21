impl Solution {
  pub fn hammingWeight(n: u32) -> i32 {
      let mut num = n;
      let mut cnt = 0;
      while num > 0 {
          if num & 1 == 1 {
              cnt += 1;
          }
          num >>= 1;
      }
      cnt
  }
}
