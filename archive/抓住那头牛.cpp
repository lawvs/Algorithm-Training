/*
描述
农夫知道一头牛的位置，想要抓住它。农夫和牛都位于数轴上，农夫起始位于点N(0<=N<=100000)，牛位于点K(0<=K<=100000)。农夫有两种移动方式：

  1、从X移动到X-1或X+1，每次移动花费一分钟
  2、从X移动到2*X，每次移动花费一分钟
  假设牛没有意识到农夫的行动，站在原地不动。农夫最少要花多少时间才能抓住牛？
  输入
  两个整数，N和K
  输出
  一个整数，农夫抓到牛所要花费的最小分钟数
*/
#include<iostream>
//#include<time.h> 
//#include<cstdio>
using namespace std;

bool pos[100001]={0},temp[100001]={0};

void fun(long n,const long k){
	int time=0;//所花时间
	bool (*p1),(*p2);//用于交换数组
	p1=pos;
	p2=temp;
	pos[n]=1;//初始化
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
	//printf("Time used = %.2fs\n", (double)clock() / CLOCKS_PER_SEC); //时间统计
	return 0;
}