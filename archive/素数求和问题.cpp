/*
2015.7.7
���ڸ���N������0<N<1000��������Ҫ����д��һ������
�ҳ���N�����е���������������͡�
*/
#include<iostream>
using namespace std;
int main(){
	int n1,n2,num,result;//n1�������� n2������������
	bool flag;
	cin>>n1;
	while(n1--){
		//��������
		result=0;
		for(cin>>n2;n2>0;--n2){
			cin>>num;
			if(num==1){
				continue;
			}
				flag=1;
			for(int i=2;i<=sqrt(1.0*num);++i){
				if(num%i==0){//��������
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