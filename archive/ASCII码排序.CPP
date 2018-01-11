/*
描述
输入三个字符（可以重复）后，按各字符的ASCII码从小到大的顺序输出这三个字符。
输入
第一行输入一个数N,表示有N组测试数据。后面的N行输入多组数据，每组输入数据都是占一行，
有三个字符组成，之间无空格。
输出
对于每组输入数据，输出一行，字符中间用一个空格分开。
*/
#include<iostream>
#include<cstdio>
using namespace std;
int main(){
	int n,a,b,c;
	cin>>n;
	while(n--){
		getchar();//吸收一个回车
		a=getchar();
		b=getchar();
		c=getchar();
		if(a>b){
			swap(a,b);
		}
		if(a>c){
			printf("%c %c %c\n",c,a,b);
			continue;
		}
		else 
			printf("%c ",a);
		b>c?printf("%c %c\n",c,b):printf("%c %c\n",b,c);
	}
	return 0;
}