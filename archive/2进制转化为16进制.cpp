/*
	Date: 06/10/15 12:00
	Description:
	����һ��2���Ƶ�����Ҫ�������2��������16���Ʊ�ʾ��
��16���Ƶı�ʾ�У�A-F��ʾ10-15
����
��1���ǲ������ݵ�����n���������n�����롣
ÿ���������ռ1�У�����һ����0��1��ɵ��ַ�����
�ַ�������������1��������10000
!δ���ǰ��0
*/

#include<iostream>
#include<cstdio>
#include<stack>
using namespace std;

char fun10to16(int ans) {
	if(ans>=0&&ans<=9) {
		return ans+48;
	}
	switch (ans) {
		case 10:
			return 'A';
		case 11:
			return 'B';
		case 12:
			return 'C';
		case 13:
			return 'D';
		case 14:
			return 'E';
		case 15:
			return 'F';
		default :
			return 1;
	}
}

int main() {
	int n;
	cin>>n;
	int size2=0;
	int size16=0;
	string str2;
	stack<char> s;
	getchar();
	while(n--) {
		getline(cin,str2);//���ո���������str
		int count=1;
		int ans=0;
		for(int i=str2.length()-1; i>=0; i--) {
			if(count > 8) {
				s.push(fun10to16(ans));
				count=1;
				ans=0;
			}
			ans+=count*(str2[i]-48);
			count*=2;
		}
		s.push(fun10to16(ans));
		while(s.empty()!=true) { //��ջ�ǿ�
			cout<<s.top();//��ȡջ��Ԫ��
			s.pop();//��ջ����ɾ��ջ��Ԫ�أ�
		}
		cout<<endl;
	}
	return 0;
}
