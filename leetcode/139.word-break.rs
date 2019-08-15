use std::collections::HashSet;

impl Solution {

    pub fn word_break(s: String, word_dict: Vec<String>) -> bool {
        // set.insert("111".to_string());
        fn go(s: String, word_dict: Vec<String>, set: &mut HashSet<String>) -> bool {
            if s.len() == 0 {
                return true
            }
            if set.contains(&s.to_string()) {
                return false
            }
            for word in word_dict.iter() {
                if s.starts_with(word) {
                    let sub: &str = match s.get(word.len()..) {
                        Some(s) => s,
                        None => return true,
                    };
                    let ret = go(sub.to_string(), word_dict.to_vec(), set);
                    if ret == true {
                        return true
                    }
                    set.insert(s.to_string());
                }
            }
            false
        }
        let mut set: HashSet<String> = HashSet::new();
        go(s, word_dict, &mut set)
    }

}

