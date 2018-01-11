#include <iostream>
#include <cstring>
using namespace std;

int main()
{
	char st1[10005],st2[10005];
	int a[10005],b[10005],c[20005];
	int i,j,len1,len2;

	cin >> st1 >> st2;
	memset(a,0,sizeof(a));
	memset(b,0,sizeof(b));
	memset(c,0,sizeof(c));

	len1=strlen(st1);
	j=1;
	//
	for (i=len1-1; i>=0; i--)
	{
		a[j++]=st1[i]-'0';
	}

	len2=strlen(st2);
	j=1;
	for (i=len2-1; i>=0; i--)
	{
		b[j++]=st2[i]-'0';
	}

	//计算
	for (i=1; i<=len1; i++)
	{
		for (j=1; j<=len2; j++)
		{
			c[i+j-1]+=a[i]*b[j];
		}
	}

	for (i=1; i<len1+len2; i++)
	{
		c[i+1]+=c[i]/10;
		c[i]%=10;
	}
	//去前导0
	while (!c[i] && i>1)
	{
		i--;
	}
	//输出
	while (i)
	{
		cout<<c[i--];
	}
	cout<<endl;
	return 0;
}
