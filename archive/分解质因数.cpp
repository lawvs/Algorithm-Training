#include<iostream>
#include<cmath>
using namespace std;

short primenum[5000];
short len=0;
//�ж�number�Ƿ�����
bool isPrimeNumber(int number)
{
	for(short i = 2; i <= sqrt(number); i++)
	{

		if( number % i == 0 )
		{
			return false;
		}
	}
	return true;
}

//�ҳ�2-max��������
int primeNumber(short max)
{

	for(short i = 2; i <= max; i++)
	{
		if ( isPrimeNumber(i) )
		{
			primenum[len++] = i;
		}
	}

	return 1;
}

int findPrimeFactor(int num)
{
	bool flag = 0;
	for(int i = 0; i < len; i++)
	{
		if( !num )
		{
			return 0;
		}
		if( num % primenum[i] == 0)
		{
			if(flag)
			{
				cout<<"*";
			}
			cout<<primenum[i];
			num /= primenum[i];
			i--;
			flag = 1;
		}
	}
}

int main()
{
	int a;
	int b;
	cin>>a>>b;
	primeNumber(b);//�ҳ�����

	for(short i = a; i <= b; i++)
	{
		cout<<i<<"=";
		findPrimeFactor(i);
		cout<<endl;
	}
	return 0;
}

