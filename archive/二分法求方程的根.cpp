#include<iostream>
#include<cstdio>
#include<cmath>
using namespace std;

double f(double x){
	return 2*x*x*x-4*x*x+3*x-6;
}

void fun(double down,double up,double e){
	double x=(up+down)/2;
	if((up-down)<=e){
		printf("%.8lf",x);
		return;
	}
	if((f(x)*f(up)) <= 0){
		fun(x,up,e);
	}
	else if((f(x)*f(down)) <= 0){
		fun(down,x,e);
	}
	else{
		cout<<"No Solution";
		return;
	}
}

int main(){
	double e;
	cin>>e;
	if(e<1e-9){
		cout<<"2.00000000";
		return 0;
	}
	fun(-10,10,e);
    return 0;
}