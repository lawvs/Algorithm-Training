/*
	�����Ĵ���
	Date: 29/01/16 21:22
	Description:���Ĵ�����һ��������ַ�����
	���������Ҷ��ʹ����������һ���ġ�
	С������Ϊ���Ĵ����������ġ�
	���ڸ���һ����������һ���ǻ��ĵģ�
	����������ٵĽ�������
	ʹ�øô����һ�������Ļ��Ĵ���
*/

#include<iostream>
#include<algorithm>
#include<string.h>
using namespace std;

char charodd=0;//��¼������ĸ

//�ж��Ƿ��н�
bool haveSolution(string str)
{
	//ͳ����ĸ����
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
	//�ж��Ƿ�Ϸ�
	bool flag=0;

	for(int i=0; i<26; i++)
	{
		if( count[i]%2 ) //���ִ���Ϊ����
		{
			if( str.length()%2 && !flag ) //����Ϊ����
			{
				flag=1;//���ֹ�����
				charodd=i+'a';//��¼������ĸ
				continue;
			}
			//cout<<char (i+'a')<<" "<<count[i]<<endl;
			return 0;//���Ϸ�
		}
	}
	return 1;//�Ϸ�
}

//��������
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

//���
int Solve(string str)
{
	int ans=0;
	for(int i=0,j=str.length()-1; i<str.length()/2; i++,j--)
	{
		if( str[i] != str[j] ) //��ƥ��
		{
			if(str[i]==charodd)//�����ַ�
			{
				for(int k=i+1; k<j; k++) //�����Ѱ��ƥ��
				{
					if( str[j]==str[k] ) //�ҵ�ƥ��
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
				for(int k=j-1; k>i; k--) //���ұ�Ѱ��ƥ��
				{
					if( str[i]==str[k] ) //�ҵ�ƥ��
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
	//�ж��Ƿ����
	if( !haveSolution(str) )
	{
		cout<<"Impossible"<<endl;
		return 0;
	}
	//calc output
	cout<<Solve(str)<<endl;
	return 0;
}

