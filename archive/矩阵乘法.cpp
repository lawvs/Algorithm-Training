#include<iostream>
using namespace std;
void printArrayn(int n)
{
	for(int i = 0; i < n; i++)
	{
		for(int j = 0; j < n; j++)
		{
			if( i == j )
			{
				cout<<1<<" ";
			}
			else
			{
				cout<<0<<" ";
			}
		}
		cout<<endl;
	}
}
int main()
{
	int n;
	int m;
	cin>>n>>m;
	//特殊情况 0次幂 输出单位矩阵
	if( !m )
	{
		printArrayn(n);
		return 0;
	}
	int num[n][n];
	int tem[n][n];
	int ans[n][n];
	//input
	for(int i = 0; i < n; i++)
	{
		for(int j = 0; j < n; j++)
		{
			cin>>num[i][j];
			tem[i][j] = num[i][j];
		}
	}
	//test
	for(int i = 0; i < n; i++)
	{
		for(int j = 0; j < n; j ++)
		{
			ans[i][j] = 0;
		}
	}
	//calc
	for(int i = 1; i < m; i++) //幂
	{
		for(int j = 0; j < n; j ++) //行
		{
			for(int k = 0; k < n; k ++) //列
			{
				for(int l = 0; l < n; l ++)
				{
					ans[j][k] += tem[j][l]*num[l][k];
				}

			}
		}
		//
		for(int i = 0; i < n; i++)
		{
			for(int j = 0; j < n; j ++)
			{
				tem[i][j] = ans[i][j];
				ans[i][j] = 0;
			}
		}
	}
	//output
	for(int i = 0; i < n; i++)
	{
		for(int j = 0; j < n; j ++)
		{
			cout<<tem[i][j]<<" ";
		}
		cout<<endl;
	}
	//}
	return 0;
}

