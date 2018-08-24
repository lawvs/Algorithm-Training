/*
 * leetcode #319 bulb-switcher 灯泡开关
 * https://leetcode-cn.com/problems/bulb-switcher/description/
 */
#include <string.h>

class Solution {
public:
    int bulbSwitch(int n) {
        return sqrt(n);
    }

    // TLE
    int solution2(int n) {
        return sqrt(n);
        if (n == 0) {
            return 0;
        }
        int ans = 0;
        bool *arr = new bool[n + 1];
        int len = n + 1;
        memset(arr, true, sizeof(bool) * len);
        for (auto i = 2; i < len; i++) {
            if (i > len / 2) {
                !arr[i] && ans++;
                continue;
            }
            for (auto j = i; j < len; j += i) {
                arr[j] = !arr[j];
            }
            arr[i] && ans++;
        }
        return ans + 1;
    }
};
