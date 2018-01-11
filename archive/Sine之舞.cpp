/*
	Date: 01/02/16 11:27
	Description:
　　An=sin(1–sin(2+sin(3–sin(4+...sin(n))...)
　　Sn=(...(A1+n)A2+n-1)A3+...+2)An+1
　　打印出Sn的完整表达式
*/

#include<iostream>
using namespace std;

void A(int n){
	if(n==1){
		cout<<"sin(1";
		return;
	}
	A(n-1);
	if(n%2){
		cout<<'+';
	}else{
		cout<<'-';
	}
	cout<<"sin("<<n;
}

int num;
void S(int n){
	if(n<1){
		return;
	}
	S(n-1);
	//An
	A(n);
	for(int i=0;i<n;i++){
		cout<<")";
	}
	cout<<'+'<<num--;
	if(num){
		cout<<')';
	}
	
	
}

int main(){
	int n;
	cin>>n;
	num=n;
	
	for(int i=0;i<n-1;i++){
		cout<<"(";
	}
	S(n);
	cout<<endl;
	return 0;
}

