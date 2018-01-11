/*
	基础练习 高精度阶乘计算
	Date: 09/02/16 23:23
	Description:
	输入一个正整数n，输出n!的值。
　　其中n!=1*2*3*…*n。n<=1000
	样例输入
	10
	样例输出
	3628800
*/

#include<iostream>
using namespace std;
int main()
{
	int n;
	cin>>n;
	int num[3000] = {0};
	num[0]=1;
	int l=1;
	for(int i=2; i<=n; i++)
	{
		int r=0;//余数
		for(int j=0; j<l; j++)
		{
			num[j] *= i;//乘
			num[j] += r;//加上进位
			r = num[j] / 10;
			num[j] %= 10;
		}


		while(r)
		{
			num[l] = r % 10;
			r /= 10;
			l++;
		}
		/*test
		cout<<i<<"!=";
		for(int i=l-1; i>=0; i--)
		{
			cout<<num[i];
		}
		cout<<endl;
		//test*/
	}
	//output
	for(int i=l-1; i>=0; i--)
	{
		cout<<num[i];
	}
	cout<<endl;
	return 0;
}

