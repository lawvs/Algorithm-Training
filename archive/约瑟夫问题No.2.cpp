/*
	Date: 02/10/15 19:54
	Description:
	n ��С��Χ����һȦ��
	����˳ʱ����Ϊ1,2,��,n���ӱ��Ϊ p ��С��˳ʱ�����α�����
	��1����m �������� m ʱ����С����Ȧ�г�ȥ��
	Ȼ����һ���ٴ�1������������ m ʱ�ٳ�ȥ��
	��˷�����ֱ�����е�С������Ȧ�г�ȥ��
	�밴��ȥ���Ⱥ�˳�����С���ı�š�
*/

#include<iostream>
using namespace std;
int main() {
	int step,n,no;
	int tar;
	int child[301];
	while(1) {
		cin>>n>>no>>step;
		if(n==0&&step==0&&no==0) {
			break;
		}
		//��ʼ��
		for(int i=1; i<=n; i++) {
			child[i]=i;
		}
		step--;//m
		//
		while(n>0) {
			tar=(no+step)%n;
			if(tar==0){
				tar=n;
			}
			cout<<child[tar];//���
			for(int i=tar; i<n; i++) { //ɾ��
				child[i]=child[i+1];
			}
			n--;
			if(tar>n) {
				no=1;
			} else {
				no=tar;
			}
			if(n) {
				cout<<",";
			}
		}
		cout<<endl;
	}
	return 0;
}
