/*
	�㷨ѵ�� �ִ�ͳ��
	Date: 09/03/16 17:49
	Description:����һ������Ϊn���ַ���S��
	����һ������L��
	ͳ�Ƴ��ȴ��ڵ���L�ĳ��ִ��������Ӵ�
	����ͬ�ĳ��ֿ����ཻ��������ж���������ģ�
	�����Ȼ�ж���������һ�γ�������ġ�
*/

#include<string.h>
#include<iostream>
using namespace std;

//��index��ʼ�ҳ�sub��str�г��ֵĴ���
int findstr(const string &str,const string &sub,int index){
	int n=1;
	for(int i=index;i<str.length()-sub.length();i++){
		int pos=str.find(sub,i);
		if( pos != -1){
			n++;
			i=pos;
		}
	}
	return n;
}

int main() {
	short int l;
	cin>>l;
	string str;
	cin>>str;
	
	string maxstr;
	int max=0;
	int maxl=l;
	//ö�������Ӵ�
	for(int i=l;i<=str.length();i++) {//�ִ�����
		for(int j=i; j<=str.length();j++) {//�ִ���ʼ
			string s(str,j-i,i);
			//s=str.substr(j-i,i);
			int count=findstr(str,s,j-i);
			//testout
			//cout<<s<<" "<<count<<endl;
			if(count>max ||(count==max && s.length()>maxl)){
				max=count;
				maxstr=s;
				maxl=s.length();
			}
		}
	}
	cout<<maxstr<<endl;
	return 0;
}

