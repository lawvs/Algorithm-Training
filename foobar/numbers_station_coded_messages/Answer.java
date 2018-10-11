// package com.google.challenges;

import java.util.Arrays;

public class Answer {
    public static int[] answer(int[] l, int t) {

        // Your code goes here.
        int poiStart = 0;
        int poiEnd = 1;
        int len = l.length;
        int sum = l[0];
        while (poiEnd <= len - 1 || sum >= t) {
            if (sum == t) {
                return new int[] {poiStart, poiEnd - 1};
            }
            if (sum < t) {
                sum += l[poiEnd];
                ++poiEnd;
                continue;
            }
            if (sum > t) {
                sum -= l[poiStart];
                ++poiStart;
                continue;
            }
        }
        return new int[] {-1, -1};
    }

    public static void main(String[] args) {
        int[] l;
        int t;
        int[] res;

        l = new int[] {1};
        t = 1;
        res = Answer.answer(l, t);
        // System.out.println(Arrays.toString(res));
        assert(Arrays.equals(res, new int[] {0, 0}));

        l = new int[] {1};
        t = 100;
        res = Answer.answer(l, t);
        // System.out.println(Arrays.toString(res));
        assert(Arrays.equals(res, new int[] {-1, -1}));

        l = new int[] {1, 1};
        t = 2;
        res = Answer.answer(l, t);
        // System.out.println(Arrays.toString(res));
        assert(Arrays.equals(res, new int[] {0, 1}));

        l = new int[] {1, 5};
        t = 5;
        res = Answer.answer(l, t);
        // System.out.println(Arrays.toString(res));
        assert(Arrays.equals(res, new int[] {1, 1}));

        l = new int[] {4, 3, 5, 7, 8};
        t = 12;
        res = Answer.answer(l, t);
        // System.out.println(Arrays.toString(res));
        assert(Arrays.equals(res, new int[] {0, 2}));

        l = new int[] {4, 3, 10, 2, 8};
        t = 12;
        res = Answer.answer(l, t); // [2, 3]
        // System.out.println(Arrays.toString(res));
        assert(Arrays.equals(res, new int[] {2, 3}));

        l = new int[] {1, 2, 3, 4};
        t = 15;
        res = Answer.answer(l, t);
        // System.out.println(Arrays.toString(res));
        assert(Arrays.equals(res, new int[] {-1, -1}));

        System.out.println("All test cases passed.");
    }
}