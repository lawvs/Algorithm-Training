impl Solution {
    pub fn length_of_last_word(s: String) -> i32 {
        let words: Vec<&str> = s.split_whitespace().collect();
        match words.len() {
            0 => 0,
            n => words[n - 1].len() as i32
        }
    }
}
