/*
	完美的代价
	Date: 29/01/16 21:22
	Description:回文串，是一种特殊的字符串，
	它从左往右读和从右往左读是一样的。
	小龙龙认为回文串才是完美的。
	现在给你一个串，它不一定是回文的，
	请你计算最少的交换次数
	使得该串变成一个完美的回文串。
*/

#include<iostream>
#include<algorithm>
#include<string.h>
using namespace std;

char charodd=0;//记录单数字母

//判断是否有解
bool haveSolution(string str)
{
	//统计字母个数
	int count[26]= {0};
	for(int i=0; i<str.length(); i++)
	{
		count[ str[i]-'a' ]++;
	}
	/*testout
	for(int i=0; i<26; i++){
		cout<<count[i]<<" ";
	}
	cout<<endl;
	//testend*/
	//判断是否合法
	bool flag=0;

	for(int i=0; i<26; i++)
	{
		if( count[i]%2 ) //出现次数为单数
		{
			if( str.length()%2 && !flag ) //长度为奇数
			{
				flag=1;//出现过奇数
				charodd=i+'a';//记录单数字母
				continue;
			}
			//cout<<char (i+'a')<<" "<<count[i]<<endl;
			return 0;//不合法
		}
	}
	return 1;//合法
}

//交换相邻
void bubleSwap(string &str,int tar,int pos)
{
	if(tar<pos)
	{
		for(int i=pos; i>tar; i--)
		{
			swap(str[i],str[i-1]);
		}
	}
	else
	{
		for(int i=pos; i<tar; i++)
		{
			swap(str[i],str[i+1]);
		}
	}
	return;
}

//求解
int Solve(string str)
{
	int ans=0;
	for(int i=0,j=str.length()-1; i<str.length()/2; i++,j--)
	{
		if( str[i] != str[j] ) //不匹配
		{
			if(str[i]==charodd)//单数字符
			{
				for(int k=i+1; k<j; k++) //从左边寻找匹配
				{
					if( str[j]==str[k] ) //找到匹配
					{
						//swap(str[i],str[k]);
						bubleSwap(str,i,k);//k>i
						ans+=k-i;
						break;
					}
				}
			}
			else
			{
				for(int k=j-1; k>i; k--) //从右边寻找匹配
				{
					if( str[i]==str[k] ) //找到匹配
					{
						//swap(str[j],str[k]);
						bubleSwap(str,j,k);//j>k
						ans+=j-k;
						break;
					}
				}
			}
		}
	}
	//testoutput
	//cout<<str<<endl;
	//testend*/
	return ans;
}

int main()
{
	int n;
	cin>>n;
	string str;
	cin>>str;
	//判断是否可行
	if( !haveSolution(str) )
	{
		cout<<"Impossible"<<endl;
		return 0;
	}
	//calc output
	cout<<Solve(str)<<endl;
	return 0;
}

