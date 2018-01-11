/*
	数字三角形
    动态规划
	Date: 21/02/16 16:56
	Description:给出了一个数字三角形。
	请编一个程序计算从顶至底的某处的一条路
　　径，使该路径所经过的数字的总和最大。
　　●每一步可沿左斜线向下或右斜线向下走；
　　●1＜三角形行数≤100；
　　●三角形中的数字为整数0，1，…99；
*/

#include<iostream>
#include<algorithm>
using namespace std;
int main(){
    int line;
    cin>>line;
    int num[101]={0};
    
    //dp
    int temnum;
    int temnump=0;
    int temnumpp=0;
    for(int i=0;i<=line;i++){
    	for(int j=0;j<i;j++){
    		cin>>temnum;
    		temnump=num[j];
    		num[j]=temnum+max(num[j],temnumpp);
			temnumpp=temnump;
    		//
    		//cout<<num[j]<<" ";
    	}
    	//cout<<endl;
	}
	//findmax
	int max=0;
	for(int i=0;i<line;i++){
    	if(max<num[i]){
    		max=num[i];
		}
    }
    
	cout<<max<<endl;
	return 0;
}

