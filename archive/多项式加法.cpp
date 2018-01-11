/*
Date: 02/10/15 16:19
Description:
输入包括多行。
第一行整数n,表示有多少组的多项式需要求和。(1 < n < 100)
下面为2n行整数，每一行都是一个多项式的表达式。表示n组需要相加的多项式。
每行长度小于300。
输出
输出包括n行，每行为1组多项式相加的结果。
在每一行的输出结果中，多项式的每一项用“[x y]”形式的字符串表示，x是该项的系数、y 是该项的幂数。要求按照每一项的幂从高到低排列，即先输出幂数高的项、再输出幂数低的项。
系数为零的项不要输出。
*/

#include<iostream>
#include <algorithm>//算法头文件
using namespace std;

//多项式结构体
struct polynomial {
	int  factor;//系数
	int power;//幂数
};

//排序函数 按幂次排序
bool comp(polynomial poly1,polynomial poly2) {
	return poly1.power>poly2.power;
}

int main() {
	int n;
	cin>>n;
	while(n--) {
		//读入多项式1
		polynomial poly1[301];
		int tail1=0;
		while(tail1<301) {
			cin>>poly1[tail1].factor>>poly1[tail1].power;
			if(poly1[tail1].power<0) { //幂数为负数,输入结束
				break;
			}
			for(int i=0; i<tail1; i++) { //判断幂次重复项
				if(poly1[i].power==poly1[tail1].power) {
					poly1[i].factor+=poly1[tail1].factor;
					tail1--;
					break;
				}
			}
			tail1++;
		}
		//读入多项式2
		polynomial poly2[301];
		int tail2=0;
		while(tail2<301) {
			cin>>poly2[tail2].factor>>poly2[tail2].power;
			if(poly2[tail2].power<0) { //幂数为负数
				break;
			}
			for(int i=0; i<tail2; i++) { //判断幂次重复项
				if(poly2[i].power==poly2[tail2].power) {
					poly2[i].factor+=poly2[tail2].factor;
					tail2--;
					break;
				}
			}
			tail2++;
		}
		//排序
		sort(poly1,poly1+tail1,comp);
		sort(poly2,poly2+tail2,comp);

		//合并
		polynomial poly3[602];
		int head1=0;
		int head2=0;
		int tail3=0;
		while(head1<tail1 && head2<tail2) {
			if(poly1[head1].power>poly2[head2].power) {
				if(poly1[head1].factor==0) { //删除系数为0项
					head1++;
					continue;
				}
				poly3[tail3].factor=poly1[head1].factor;
				poly3[tail3++].power=poly1[head1++].power;
			} else if(poly1[head1].power<poly2[head2].power) {
				if(poly2[head2].factor==0) { //删除系数为0项
					head2++;
					continue;
				}
				poly3[tail3].factor=poly2[head2].factor;
				poly3[tail3++].power=poly2[head2++].power;
			} else { //相等
				if(poly1[head1].factor+poly2[head2].factor==0) {
					head1++;
					head2++;
					continue;
				}
				poly3[tail3].factor=poly1[head1].factor+poly2[head2++].factor;
				poly3[tail3++].power=poly1[head1++].power;
			}
		}

		//合并尾部
		while(head1<tail1) {
			if(poly1[head1].factor==0) { //删除系数为0项
				head1++;
				continue;
			}
			poly3[tail3].factor=poly1[head1].factor;
			poly3[tail3++].power=poly1[head1++].power;
		}
		while(head2<tail2) {
			if(poly2[head2].factor==0) { //删除系数为0项
				head2++;
				continue;
			}
			poly3[tail3].factor=poly2[head2].factor;
			poly3[tail3++].power=poly2[head2++].power;
		}

		//输出
		for(int head3=0; head3<tail3; head3++) {
			cout<<"[ "<<poly3[head3].factor<<" "<<poly3[head3].power<<" ] ";
		}
		cout<<endl;
	}
	return 0;
}
