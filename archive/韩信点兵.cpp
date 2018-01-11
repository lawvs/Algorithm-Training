#include<iostream>
using namespace std;
int main(){
	int a,b,c,n;
	cin>>a>>b>>c;
		for(n=10;n<=100;++n){
			if(n%3!=a)continue;
			if(n%5!=b)continue;
			if(n%7!=c)continue;
			cout<<n;
			return 0;
	}
	cout<<"No answer";
	return 0;
}