#include<iostream>
#include<cmath>
using namespace std;

bool fun(long x,long y){
	long ans;
	ans=floor((y-x)*(sqrt(5.0)+1.0))/2; 
	if(ans==x)return 0;
	return 1;
}

int main(){
	long a,b;
	while(cin>>a && cin>>b){
		if(a>b){
			swap(a,b);
		}
		cout<<fun(a,b)<<endl;
	}
    return 0;
}
