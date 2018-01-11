/*2015.8.17
描述
Hello Kitty 想摘点花生送给她喜欢的米老鼠。她来到一片有网格状道路的矩形花生地(如下图)，从西北角进去，东南角出来。地里每个道路的交叉点上都有种着一株花生苗，上面有若干颗花生，经过一株花生苗就能摘走该它上面所有的花生。Hello Kitty只能向东或向南走，不能向西或向北走。问Hello Kitty 最多能够摘到多少颗花生。
输入
第一行是一个整数T，代表一共有多少组数据。1<=T <= 100
接下来是T组数据。
每组数据的第一行是两个整数，分别代表花生苗的行数R和列数 C ( 1<= R,C <=100)
每组数据的接下来R行数据，从北向南依次描述每行花生苗的情况。每行数据有 C 个整数，按从西向东的顺序描述了该行每株花生苗上的花生数目 M ( 0<= M <= 1000)。
输出
对每组输入数据，输出一行，内容为Hello Kitty能摘到得最多的花生颗数。
*/
#include<iostream>
using namespace std;
int m[101][101],dp[101][101];

int max(int i,int j){
	return i>j?i:j;
}

void fun(int r,int c){
	dp[0][0]=m[0][0];
	for(int i=0;i<r;i++){
		for(int j=0;j<c;j++){
			if(i==0 && j==0){
				continue;
			}
			if(i==0){
				dp[i][j]=m[i][j]+dp[i][j-1];
				continue;
			}
			if(j==0){
				dp[i][j]=m[i][j]+dp[i-1][j];
				continue;
			}
			dp[i][j]=m[i][j]+max(dp[i-1][j],dp[i][j-1]);
		}
	}
}

int main(){
	int t;
	cin>>t;
	while(t--){
		int r,c;//花生苗的行数R和列数C
		cin>>r>>c;
		for(int i=0;i<r;i++){//读取数据
			for(int j=0;j<c;j++){
				cin>>m[i][j];
			}
		}
		fun(r,c);
		/*
		for(i=0;i<r;i++){//输出dp表
			for(int j=0;j<c;j++){
				cout<<dp[i][j]<<" ";
			}
			cout<<endl;
		}
		*/
		cout<<dp[r-1][c-1]<<endl;
	}
    return 0;
}