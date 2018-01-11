/*2015.8.17
描述
棋盘上A点有一个过河卒，需要走到目标B点。卒行走的规则：可以向下、或者向右。同时在棋盘上C点有一个对方的马，该马所在的点和所有跳跃一步可达的点称为对方马的控制点。因此称之为“马拦过河卒”。
棋盘用坐标表示，A点(0, 0)、B点(n, m)(n, m为不超过15的整数)，同样马的位置坐标是需要给出的。现在要求你计算出卒从A点能够到达B点的路径的条数，假设马的位置是固定不动的，并不是卒走一步马走一步。
输入
一行四个数据，分别表示B点坐标和马的坐标。（保证所有的数据有解）
输出
一个数据，表示所有的路径条数。
 */
#include<iostream>
//#include<time.h> 
using namespace std;

int ans=0;//路径条数
int bx,by;//目标B点坐标(bx,by)
int hx,hy;//马坐标(hx,hy)
bool flag[17][17];


//目标点可行返回1,不可行返回0
bool fun2(int x,int y){
	if(x>bx || y>by){//坐标超过目标点
		return 0;
	}
	if( x==(hx+2) ||x==(hx-2) ){//坐标在马跳跃一步可达的点
		if( y==(hy+1)||y==(hy-1) ){
			return 0;
		}
	}
	if( y==(hy+2) ||y==(hy-2) ){//坐标在马跳跃一步可达的点
		if( x==(hx+1)||x==(hx-1) ){
			return 0;
		}
	}
	if(x==hx && y==hy){//坐标为马所在的点
		return 0;
	}
	return 1;//可行
}

//初始化矩阵
void fun3(){
	for(int i=0;i<=bx+1;i++){
		for(int j=0;j<by+1;j++){
			fun2(i,j)?flag[i][j]=1:flag[i][j]=0;
			//flag[i][j]=1;
		}
	}
}

void fun(int x=0,int y=0){//卒当前坐标x,y
	if(x==bx && y==by){//到达目标,路径+1
		ans++;
		return;//结束
	}
	if(flag[x+1][y]){
		fun(x+1,y);
	}
	if(flag[x][y+1]){
		fun(x,y+1);
	}
	return;
}

//主函数
int main(){	
	cin>>bx>>by;//目标B点坐标
	cin>>hx>>hy;//马坐标(hx,hy)
	//bx=15,by=15,hx=0,hy=0;
	fun3();//初始化矩阵
	fun();
	cout<<ans<<endl;
	//printf("Time used = %.2fs\n", (double)clock() / CLOCKS_PER_SEC); //时间统计
    return 0;
}