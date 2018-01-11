/*
2015.7.7
现在给你N个数（0<N<1000），现在要求你写出一个程序，
找出这N个数中的所有素数，并求和。
*/
#include<iostream>
using namespace std;
int main(){
	int n1,n2,num,result;//n1数据组数 n2该组数据数量
	bool flag;
	cin>>n1;
	while(n1--){
		//读入数据
		result=0;
		for(cin>>n2;n2>0;--n2){
			cin>>num;
			if(num==1){
				continue;
			}
				flag=1;
			for(int i=2;i<=sqrt(1.0*num);++i){
				if(num%i==0){//不是素数
					flag=0;
					break;
				}
			}
			if(flag){
				result+=num;
			}
		}
		cout<<result<<endl;
	}
	return 0;
}