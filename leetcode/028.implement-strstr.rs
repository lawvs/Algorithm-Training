impl Solution {
    pub fn str_str(haystack: String, needle: String) -> i32 {
        if haystack == needle {
            return 0;
        }
        let haystack = haystack.as_bytes();
        let needle = needle.as_bytes();
        for i in 0..haystack.len() {
            let mut flag = true;
            for j in 0..needle.len() {
                if i + j >= haystack.len() || haystack[(i + j)] != needle[j] {
                    flag = false;
                    break;
                }
            }
            if flag == true {
                return i as i32;
            }
        }
        return -1;
    }
}
