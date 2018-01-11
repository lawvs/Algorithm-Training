
#include<iostream>
#include<cmath>
using namespace std;
//函数声明
int fun_max_divisor(int, int);
int fun_min_multiple(int, int, int);

int main()
{
	int n,n1, n2, max_divisor, min_multiple;
	cin>>n;//数据总组数
	while(n--){
		cin>>n1>>n2;
		max_divisor=fun_max_divisor(n1, n2);
		cout<<max_divisor<<endl;
		min_multiple=fun_min_multiple(n1, n2, max_divisor);
		cout<<min_multiple<<endl;
	}
	return 0;
}

//最大公约数
int fun_max_divisor(int n1, int n2)
{
	int max_divisor;
	int m, n;
	if (n1<n2) {//判断大小,交换使n1>n2
		m=n1;
		n1=n2;
		n2=m;
	}
	max_divisor=n1;
	n=n2;
	while(n!=0) {
		m=max_divisor%n;
		max_divisor=n;
		n=m;
	}
	return max_divisor;
}

//最小公倍数
int fun_min_multiple(int n1, int n2, int max_divisor)
{
	return n1*n2/max_divisor;     //最小公倍数=n1*n2/max_divisor(最大公约数)
}
