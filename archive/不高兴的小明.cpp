#include<iostream>
using namespace std;
main(){
	int n,a,b,day,maxhours;
	cin>>n;//��������
	while(n--){
		maxhours=8;
		day=0;//�����ʼ��
		for(int i=1;i<=7;++i){
			cin>>a>>b;
			if(a+b>maxhours){
				maxhours=a+b;
				day=i;
			}
		}
		cout<<day<<endl;
	}
}