#include<iostream>
using namespace std;
main(){
	int n,grade;
	cin>>n;
	while(n--){
		cin>>grade;
		if(grade>=90){
			cout<<"A"<<endl;
			continue;
		}
		else if(grade<=89&&grade>=80){
			cout<<"B"<<endl;
			continue;
		}
	    else if(grade<=79&&grade>=70){
			cout<<"C"<<endl;
			continue;
		}
		else if(grade<=69&&grade>=60){
			cout<<"D"<<endl;
			continue;
		}
		else{
			cout<<"E"<<endl;
		}
	}
}