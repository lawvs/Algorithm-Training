#include <iostream>
#include <cstdio>
#include<string>
#define max(a, b)  (((a)>(b))?(a):(b))
using namespace std;
int n, dp[10000],result;
string num;

int main() {
    scanf("%d", &n);//数据组数
	while(n--){
		result = 0;
		cin>>num;
    //动态规划的核心代码
	for (int i = 0; i <num.length(); ++i) {
        dp[i] = 1;
        for (int j = 0; j < i; ++j) {
    if (num[j] < num[i]) {
        dp[i] = max(dp[j] + 1, dp[i]);
    }
}
        result = max(result, dp[i]);
}
    // end.
    printf("%d\n", result);

	}
    return 0;
}
