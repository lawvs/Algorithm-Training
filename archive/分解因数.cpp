/*
描述
给出一个正整数a，要求分解成若干个正整数的乘积，即a = a1 * a2 * a3 * ... * an，并且1 < a1 <= a2 <= a3 <= ... <= an，问这样的分解的种数有多少。注意到a = a也是一种分解。
输入
第1行是测试数据的组数n，后面跟着n行输入。每组测试数据占1行，包括一个正整数a (1 < a < 32768)
输出
n行，每行输出对应一个输入。输出应是一个正整数，指明满足要求的分解的种数
*/
#include<iostream>
using namespace std;
int ans;
int num[32768];
//求乘积函数
int sum(int n){
	int ans=1;
	for (int i=0;i<n;i++){
		ans*=num[i];
	}
	return ans;
}

void fun(int a,int n,int min){
	for(int i=min;i<=a;i++){
		if((i*sum(n))<a){
			num[n]=i;
			fun(a,n+1,i);
		}
		else if ((i*sum(n))==a){
			ans++;
			/*
			for(int j=0;j<n;j++){
				cout<<num[j]<<" ";
			}
			cout<<i<<endl;
			*/
			return;
		}
		else{
			return;
		}
	}
}

int main(){
	int n;
	cin>>n;
	while(n--){
		int a;
		cin>>a;
		ans=0;
		fun(a,0,2);
		cout<<ans<<endl;
	}
    return 0;
}
