/*
	Date: 06/10/15 12:00
	Description:
	输入一个2进制的数，要求输出该2进制数的16进制表示。
在16进制的表示中，A-F表示10-15
输入
第1行是测试数据的组数n，后面跟着n行输入。
每组测试数据占1行，包括一个以0和1组成的字符串，
字符串长度至少是1，至多是10000
!未检查前导0
*/

#include<iostream>
#include<cstdio>
#include<stack>
using namespace std;

char fun10to16(int ans) {
	if(ans>=0&&ans<=9) {
		return ans+48;
	}
	switch (ans) {
		case 10:
			return 'A';
		case 11:
			return 'B';
		case 12:
			return 'C';
		case 13:
			return 'D';
		case 14:
			return 'E';
		case 15:
			return 'F';
		default :
			return 1;
	}
}

int main() {
	int n;
	cin>>n;
	int size2=0;
	int size16=0;
	string str2;
	stack<char> s;
	getchar();
	while(n--) {
		getline(cin,str2);//带空格整行输入str
		int count=1;
		int ans=0;
		for(int i=str2.length()-1; i>=0; i--) {
			if(count > 8) {
				s.push(fun10to16(ans));
				count=1;
				ans=0;
			}
			ans+=count*(str2[i]-48);
			count*=2;
		}
		s.push(fun10to16(ans));
		while(s.empty()!=true) { //堆栈非空
			cout<<s.top();//读取栈顶元素
			s.pop();//出栈（即删除栈顶元素）
		}
		cout<<endl;
	}
	return 0;
}
