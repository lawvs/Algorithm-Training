/*
	������ϰ �߾��ȼӷ�
	Date: 09/02/16 22:52
	Description:������������a��b��
	��������������ĺ͡�
	a��b��������100λ��
*/
#include<iostream>
#include<string>
using namespace std;
#define MAX 101//���λ��


int main()
{
	int a[MAX]= {0},b[MAX]= {0}; //��������
	string s1,s2;
	cin>>s1>>s2;//����
	int len1=s1.size();
	int len2=s2.size();
	for (int i=len1-1,j=0; i>=0; i--,j++) //���Ŵ浽a����
	{
		a[j]=s1[i]-'0';
	}
	for (int i=len2-1,j=0; i>=0; i--,j++) //���Ŵ浽b����
	{
		b[j]=s2[i]-'0';
	}

	//calc
	int x=0;//��λ��
	int i=0;
	for(; i<=len1 || i<=len2; i++) //���,���ֱ�Ӵ���b����
	{
		b[i]+=a[i]+x;
		x=b[i]/10;
		b[i]%=10;
	}
	b[i]=x;
	
	while(b[i]==0 && i!=0)
	{
		i--;   //ȥǰ��0��ֱ��ȥ���ֻʣһ��0���������0��
	}
	
	for (int j=i; j>=0; j--) //���
	{
		cout<<b[j];
	}
	cout<<endl;
	//system("pause");
}
