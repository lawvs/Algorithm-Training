#include<iostream>
using namespace std;
int map[100][100];

//输入数据
void input(int n){
	int i=0,j=n-1,k=0,num=1;
	while(1){
		for( ;i<n-k;++i){//down
			map[i][j]=num++;
			if(num>n*n)return ;
		}
		for(--i,--j;j>=0+k;--j){//left
			map[i][j]=num++;
			if(num>n*n)return ;
		}
		for(--i,++j;i>=0+k;--i){//up
			map[i][j]=num++;
			if(num>n*n)return ;
		}
		for(++i,++j;j<n-k-1;++j){//right
			map[i][j]=num++;
			if(num>n*n)return ;
		}
		++i;//切换格子
		--j;//减去余量
		++k;//缩进
	}
}

//输出矩阵
void output(int n){
	for(int i=0;i<n;++i){
		for(int j=0;j<n;++j){
			cout<<map[i][j]<<" ";
		}
		cout<<endl;
	}
}

int main(){
	int n;
	cin>>n;
	input(n);
	output(n);
    return 0;
}
