#include<algorithm>  
#include<iostream>  
#include<cstdlib>  
#include<cstring>  
#include<iomanip>  
#include<string>  
#include<cstdio>  
#include<cmath>  
using namespace std;  
int pd(int a,int b) //��һ���жϺ���������ʹ��������ۡ�  
{  
    if(a<b) return -1;  
    if(a==b) return 0;  
    if(a>b) return 1;  
}  
int add2(string &a,string &b) //�ú������Է����Ժ����Ӽ��˳���Ϊһ���һ���⡣  
{  
    int a1[1001],b1[1001],c1[1001];  
    int alen=a.size();  
    int blen=b.size();  
    int y,big;string k;  
    if(alen>blen){big=alen;} else {big=blen;}  
    for(int i=0;i<big;i++)  
    {  
       if(pd(alen,blen)>0){break;}  
       if(pd(alen,blen)==-1)  
       {  
              cout<<"-";  
              y=alen;  
              alen=blen;  
              blen=y;  
              k=a;  
              a=b;  
              b=k;  
              break;  
       }  
    }  
    for( i=0;i<alen;i++)  
       a1[alen-i]=a[i]-'0';  
    for(i=0;i<blen;i++)  
       b1[blen-i]=b[i]-'0';  
     i=1;  
    while(i<=alen||i<=blen) //ȥǰ��0.  
    {  
      if(a1[i]<b1[i])  
      {  
        a1[i]+=10;a1[i+1]--;  
      }  
      c1[i]=a1[i]-b1[i];  
      i++;  
    }  
    int lenc1=i;  
    while((c1[lenc1]==0)&&(lenc1>1))  
      lenc1--;  
    for(int j=lenc1;j>=1;j--)  
       cout<<c1[j];  
    cout<<endl;  
	return 0;
}  
int main()  
{  
    string a,b;  
    cin>>a>>b;  
    add2(a,b);  
	return 0;
}  