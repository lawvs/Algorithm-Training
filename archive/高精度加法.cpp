/*
	基础练习 高精度加法
	Date: 09/02/16 22:52
	Description:输入两个整数a和b，
	输出这两个整数的和。
	a和b都不超过100位。
*/
#include<iostream>
#include<string>
using namespace std;
#define MAX 101//最大位数


int main()
{
	int a[MAX]= {0},b[MAX]= {0}; //存两个数
	string s1,s2;
	cin>>s1>>s2;//读入
	int len1=s1.size();
	int len2=s2.size();
	for (int i=len1-1,j=0; i>=0; i--,j++) //反着存到a数组
	{
		a[j]=s1[i]-'0';
	}
	for (int i=len2-1,j=0; i>=0; i--,j++) //反着存到b数组
	{
		b[j]=s2[i]-'0';
	}

	//calc
	int x=0;//进位数
	int i=0;
	for(; i<=len1 || i<=len2; i++) //相加,结果直接存在b数组
	{
		b[i]+=a[i]+x;
		x=b[i]/10;
		b[i]%=10;
	}
	b[i]=x;
	
	while(b[i]==0 && i!=0)
	{
		i--;   //去前导0，直到去完或只剩一个0（代表和是0）
	}
	
	for (int j=i; j>=0; j--) //输出
	{
		cout<<b[j];
	}
	cout<<endl;
	//system("pause");
}
