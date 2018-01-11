/*算法训练 Multithreading
构造
http://lx.lanqiao.org/problem.page?gpid=T347
repeat ni times
　　yi = y
　　y = yi+1
　　end repeat
*/
#include<iostream>
#include<algorithm>
using namespace std;

class Num {
	public:
		int v;
		int p;
		int c;
};

bool comp(const Num n1,const Num n2) {
	return n1.v < n2.v;
}

int n;//N为需要算加法的数字个数1<=N<=100
int w;//W是你希望算出的数 -10^9<=W<=10^9
Num num[105];//1<=n[i]<=1000

//打印n轮cur位置
int displayn(int cur,int n) {
	for (int i = 0; i < n; ++i) {
		cout<<num[cur].p<<" ";
		cout<<num[cur].p<<" ";
	}
	return 0;
}

//完全打印st到ed
int display(int st,int ed) {
	for(int i=st; i<ed; i++) {
		displayn(i,num[i].v);
	}
}
//特殊情况求解
int solves(){
	cout<<"Yes"<<endl;
	//存储y值
	cout<<num[0].p<<" ";//0存储y=0
	//执行num[1]的无用数
	for(int i=0;i<num[1].v-1;i++){
		cout<<num[1].p<<" ";
		cout<<num[1].p<<" ";
	}
	//执行num[1]之后其余无用数
	display(2,n);
	//y值恢复
	cout<<num[0].p<<" ";//0还原y=1

	cout<<num[1].p<<" ";//1存储y=1
	//执行num[0]的无用数
	//w-2=num[0].v
	for(int i=0;i<num[0].v-(w-1);i++){
		cout<<num[0].p<<" ";
		cout<<num[0].p<<" ";
	}
	cout<<num[1].p<<" ";//1还原y=2
	//最后计算w-2=?
	for(int i=0;i<w-2;i++){
		cout<<num[0].p<<" ";
		cout<<num[0].p<<" ";
	}
	return 0;
}

//求解
int solve(int cur,int sum) {
	//特例
	if (cur ==0 && num[0].v != w) {
		if(w==1){
			cout<<"No"<<endl;
			return 0;
		}
		solves();
		return 0;
	}
	cout<<"Yes"<<endl;
	//输出
	int t=num[0].p;
	//存储y值
	cout<<t<<" ";
	//部分执行
	displayn(cur,sum-w);
	//执行无用数
	display(cur+1,n);
	//y值恢复
	cout<<t<<" ";

	//执行剩下的部分语句
	if(cur != 0) {
		displayn(cur,num[cur].v-(sum-w));
	}
	//顺序执行其余1语句
	displayn(0,num[0].v-1);
	//执行其他语句
	display(1,cur);

	return 0;
}


int main() {
	cin>>n;
	cin>>w;
	//输入n[i]
	for (int i = 0; i < n; ++i) {
		cin>>num[i].v;
		num[i].p=i+1;
	}
	//排序
	sort(num,num+n,comp);
	//calc
	//判断情况
	//特例 n==1 && num[0] != w 不可能
	if (n==1 && num[0].v != w || w<=0 ) {
		cout<<"No"<<endl;
		return 0;
	}

	int sum=0;
	for (int i = 0; i < n; ++i) {
		if((sum+=num[i].v) >= w ) { //有解
			//cout<<i<<" "<<sum<<endl;
			solve(i,sum);//求解
			return 0;
		}
	}
	//cout<<sum<<endl;
	//sum<w不可能
	if (sum<w) {
		cout<<"No"<<endl;
		return 0;
	}

	return 0;
}
