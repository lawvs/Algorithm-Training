/*
	基础练习 2n皇后问题
	Date: 05/02/16 22:02
	Description:给定一个n*n的棋盘，
	棋盘中有一些位置不能放皇后。
	现在要向棋盘中放入n个黑皇后和n个白皇后，
	使任意的两个黑皇后都不在同一行、
	同一列或同一条对角线上，
	任意的两个白皇后都不在同一行、
	同一列或同一条对角线上。
	问总共有多少种放法？n小于等于8。
*/

#include<iostream>
using namespace std;

int n;//棋盘大小
int ans;//最后结果
bool grid[8][8];//棋盘
bool set[2][8];//黑(0)白(1)皇后列冲突
bool legal1[2][17],legal2[2][17];//黑白皇后对角冲突

bool init(int n){
	//清空列冲突
	for(int i = 0; i < n; i++){
		set[0][i] = 0;
		set[1][i] = 0;
	}
	//清空对角冲突
	for(int i = 0; i < 2*n-1; i++){
		legal1[0][i]=0;
		legal1[1][i]=0;
		legal2[0][i]=0;
		legal2[1][i]=0;
	}
	return 0;
}

//寻找第line行的黑(0)白(1)皇后解
bool findans(int line,bool num){
	//cout<<"find "<<line<<"行 "<<num<<"皇后"<<endl;
	//出口
	if(line>=n){
		if(num){
			ans++;
			/*test
			cout<<"findans "<<ans<<endl;
			for(int i=0;i<n;i++){
				for(int j=0;j<n;j++){
				cout<<grid[i][j]<<" ";
				}
				cout<<endl;
			}
			//*/
			return 1;
		}
		else{
			findans(0,1);//寻找白(1)皇后
			return 1;
		}
	}
	
	//寻找
	for(int i=0;i<n;i++){//line行 i列
		//该列未放置且可放置且两条对角线未冲突
		if( !set[num][i] && grid[line][i]==1 && !legal1[num][ line+i ] && !legal2[num][(n-1)+line-i] ){
			set[num][i]=1;//该列已放置
			legal1[num][ line+i ] = 1;//设置对角冲突
			legal2[num][ (n-1)+line-i ] = 1;
			grid[line][i]=0;//该格无法再放置
			//
			//grid[line][i]=num+2;//test标记
			
			findans(line+1,num);//寻找下一行
			
			set[num][i]=0;
			legal1[num][ line+i ] = 0;//取消对角冲突
			legal2[num][ (n-1)+line-i ] = 0;
			grid[line][i]=1;
		}
	}
	return 0;
}

int main(){
	
	cin>>n;//表示棋盘的大小
	
	/*
	如果一个整数为1，
	表示对应的位置可以放皇后，
	如果一个整数为0，
	表示对应的位置不可以放皇后
	*/
	for(int i=0;i<n;i++){
		for(int j=0;j<n;j++){
			cin>>grid[i][j];
		}
	}
	//
	ans=0;
	init(n);//初始化 清空冲突
	findans(0,0);
	//输出一个整数，表示总共有多少种放法
	cout<<ans<<endl;
	return 0;
}

