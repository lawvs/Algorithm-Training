/*
	������ϰ �߾��Ƚ׳˼���
	Date: 09/02/16 23:23
	Description:
	����һ��������n�����n!��ֵ��
��������n!=1*2*3*��*n��n<=1000
	��������
	10
	�������
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
		int r=0;//����
		for(int j=0; j<l; j++)
		{
			num[j] *= i;//��
			num[j] += r;//���Ͻ�λ
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

