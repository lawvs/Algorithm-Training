/*
��֪�����õ�������Ϊn,������Ϊm������n��m,������������õ���Ŀ��
����޽⣬�������No answer��
*/
#include<iostream>
using namespace std;
main(){
	int n,all,sheet,a,b;
	bool flag;
	cin>>n;
	while(n--){
		flag=0;
		cin>>all>>sheet;
		for(a=all,b=0;a>-1;--a,++b){
			if(sheet==2*a+4*b){
				cout<<a<<" "<<b<<endl;
				flag=1;
				break;
			}
		}
		if(flag==0){
			cout<<"No answer"<<endl;
		}
	}
}