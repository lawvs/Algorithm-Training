// package com.google.challenges;

public class Answer {
    public static int answer(String s) {

        // Your code goes here.
        int len = s.length();
        for (int i = 1; i <= Math.round(len / 2); ++i) {
            if (len % i != 0) {
                continue;
            }
            String subStr = s.substring(0, i);
            boolean flag = true;
            for (int j = i; j <= len - 1; j += i) {
                String str = s.substring(j, j + i);
                if (!subStr.equals(str)) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                return len / i;
            }
        }
        return 1;
    }

    public static void main(String[] args) {
        String s;
        int res;

        s = "abccbaabccba";
        res = Answer.answer(s);
        // System.out.println(res);
        assert(res == 2);

        s = "abcabcabcabc";
        res = Answer.answer(s);
        // System.out.println(res);
        assert(res == 4);

        s = "ab";
        res = Answer.answer(s);
        // System.out.println(res);
        assert(res == 1);

        System.out.println("All test cases passed.");
    }
}