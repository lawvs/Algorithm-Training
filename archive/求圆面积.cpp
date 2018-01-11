#include<iostream>
#include<iomanip>
#include<cmath>
using namespace std;
int main(){
    double r;
    double ans;
    const double pi=atan(1)*4;
    cin>>r;
    ans=pi*r*r;
    //cout<<pi<<endl;
	cout<<setiosflags(ios::fixed)<<setprecision(7)<<ans<<endl;
	return 0;
}

