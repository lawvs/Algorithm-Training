/*
����
ũ��֪��һͷţ��λ�ã���Ҫץס����ũ���ţ��λ�������ϣ�ũ����ʼλ�ڵ�N(0<=N<=100000)��ţλ�ڵ�K(0<=K<=100000)��ũ���������ƶ���ʽ��

  1����X�ƶ���X-1��X+1��ÿ���ƶ�����һ����
  2����X�ƶ���2*X��ÿ���ƶ�����һ����
  ����ţû����ʶ��ũ����ж���վ��ԭ�ز�����ũ������Ҫ������ʱ�����ץסţ��
  ����
  ����������N��K
  ���
  һ��������ũ��ץ��ţ��Ҫ���ѵ���С������
*/
#include<iostream>
//#include<time.h> 
//#include<cstdio>
using namespace std;

bool pos[100001]={0},temp[100001]={0};

void fun(long n,const long k){
	int time=0;//����ʱ��
	bool (*p1),(*p2);//���ڽ�������
	p1=pos;
	p2=temp;
	pos[n]=1;//��ʼ��
	int max=n,min=n;
	while(true){
		for(int i=min;i<=max;i++)
		{
			if(i==k&&p1[i]){
				cout<<time<<endl;
				return;
			}
			if(p1[i]){
				*(p2+i)=1;
				if(i-1>=0){
					*(p2+i-1)=1;
				}
				if(i+1<=100001){
					*(p2+i+1)=1;
				}
				if(2*i<=100001){
					*(p2+2*i)=1;
				}
			}
		}
		swap(p1,p2);
		max=2*max>100001?100001:2*max+1;
		if(min)min--;
		time++;
	}
	return;
}

int main(){
	long n,k;
	cin>>n>>k;
	//n=0,k=100000;
	if(n>=k){
		cout<<n-k;
	}
	else 
		fun(n,k);
	//printf("Time used = %.2fs\n", (double)clock() / CLOCKS_PER_SEC); //ʱ��ͳ��
	return 0;
}