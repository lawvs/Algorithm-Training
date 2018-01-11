/*
2016年5月20日23:15:02
BSG白山极客挑战赛
A 数数字
统计一下aaa ⋯ aaa(n个a)×b的结果里面有多少个数字d，
a,b,d均为一位数。
样例解释：
3333333333*3=9999999999，里面有10个9。

*/
#include<iostream>
#include<string>
using namespace std;
int ans=0;
int a;
int b;
int d;
int n;

int solve(){
	int cnt[10]={0};
	int num=a;
	int r=0;
	for(int i=0;i<n;++i){
	    num=b*a+r;
        if(num>=10){
            r=num/10;
        }
        num%=10;

        cnt[num]++;
        //test
        //cout<<num;
	}
	if(r != 0){
		cnt[r]++;
		//cout<<r;
	}
	//cout<<endl;
	return cnt[d];
}

int solvebig(){
	int cnt[10]={0};
	int num=a;
	int r=0;
	for(int i=0;i<4;++i){
	    num=b*a+r;
        if(num>=10){
            r=num/10;
        }
        num%=10;

        cnt[num]++;
        //test
        //cout<<num;
	}
	//
	cnt[num]+=n-8;
	//
	for(int i=n-4;i<n;++i){
	    num=b*a+r;
        if(num>=10){
            r=num/10;
        }
        num%=10;

        cnt[num]++;
        //test
        //cout<<num;
	}

	if(r != 0){
		cnt[r]++;
		//cout<<r;
	}

	return cnt[d];
}

int main()
{
	int t;
	cin>>t;
	while(t--){
		ans=0;
		//aaaaaaaaaaaaaaa*b=d
		cin>>a>>b>>d>>n;

		if(n>=10){
			ans=solvebig();
		}else{
			ans=solve();
		}

		cout<<ans<<endl;
	}
	return 0;
}
