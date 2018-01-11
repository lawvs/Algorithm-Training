/*
	Date: 02/10/15 23:11
	Description:
	队列 广度遍历
	第一行是两个整数，Ｒ和Ｃ，代表迷宫的长和宽。（ 1<= R，C <= 40)
接下来是Ｒ行，每行Ｃ个字符，代表整个迷宫。
空地格子用'.'表示，有障碍物的格子用'#'表示。
迷宫左上角和右下角都是'.'。
算步数要包括起点和终点。
*/

#include<iostream>
using namespace std;

struct queue {
	int x;
	int y;
	int step;//步数
};

int r,c;//Ｒ行，每行Ｃ个字符，代表整个迷宫
char map[41][41];//地图
bool book[40][40]= {0};//已探索

queue que[1601];//队列
int head=0;
int tail=0;

//起点x1,y1 终点x2,y2
int bfs(int x1,int y1,int x2,int y2) {
	int x,y;
	//初始化
	que[tail].x=x1;
	que[tail].y=y1;
	que[tail].step=1;
	tail++;
	//遍历
	while(head<tail) {
		x=que[head].x;
		y=que[head].y;

		//迷宫出口
		if(x==x2&&y==y2) {
			return que[head].step;
		}
		//障碍
		if(map[x][y]=='#') {
			head++;
			continue;
		}
		//越界判断
		if(x<0||y<0||x>=r||y>=c) {
			head++;
			continue;
		}
		//已探索
		if(book[x][y]==1) {
			head++;
			continue;
		}
		book[x][y]=1;
		//搜索
		//上
		que[tail].x=x-1;
		que[tail].y=y;
		que[tail].step=que[head].step+1;
		tail++;
		//下
		que[tail].x=x+1;
		que[tail].y=y;
		que[tail].step=que[head].step+1;
		tail++;
		//左
		que[tail].x=x;
		que[tail].y=y-1;
		que[tail].step=que[head].step+1;
		tail++;
		//右
		que[tail].x=x;
		que[tail].y=y+1;
		que[tail].step=que[head].step+1;
		tail++;

		head++;
	}
	return 0;
}

int main() {
	cin>>r>>c;
	//读入数据
	for(int i=0; i<r; i++) {
		for(int j=0; j<c; j++) {
			cin>>map[i][j];
		}
	}
	cout<<bfs(0,0,r-1,c-1)<<endl;
	return 0;
}
