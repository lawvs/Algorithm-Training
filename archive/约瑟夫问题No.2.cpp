/*
	Date: 02/10/15 19:54
	Description:
	n 个小孩围坐成一圈，
	并按顺时针编号为1,2,…,n，从编号为 p 的小孩顺时针依次报数，
	由1报到m ，当报到 m 时，该小孩从圈中出去，
	然后下一个再从1报数，当报到 m 时再出去。
	如此反复，直至所有的小孩都从圈中出去。
	请按出去的先后顺序输出小孩的编号。
*/

#include<iostream>
using namespace std;
int main() {
	int step,n,no;
	int tar;
	int child[301];
	while(1) {
		cin>>n>>no>>step;
		if(n==0&&step==0&&no==0) {
			break;
		}
		//初始化
		for(int i=1; i<=n; i++) {
			child[i]=i;
		}
		step--;//m
		//
		while(n>0) {
			tar=(no+step)%n;
			if(tar==0){
				tar=n;
			}
			cout<<child[tar];//输出
			for(int i=tar; i<n; i++) { //删除
				child[i]=child[i+1];
			}
			n--;
			if(tar>n) {
				no=1;
			} else {
				no=tar;
			}
			if(n) {
				cout<<",";
			}
		}
		cout<<endl;
	}
	return 0;
}
