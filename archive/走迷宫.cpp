/*
	Date: 02/10/15 23:11
	Description:
	���� ��ȱ���
	��һ���������������Һͣã������Թ��ĳ��Ϳ��� 1<= R��C <= 40)
�������ǣ��У�ÿ�Уø��ַ������������Թ���
�յظ�����'.'��ʾ�����ϰ���ĸ�����'#'��ʾ��
�Թ����ϽǺ����½Ƕ���'.'��
�㲽��Ҫ���������յ㡣
*/

#include<iostream>
using namespace std;

struct queue {
	int x;
	int y;
	int step;//����
};

int r,c;//���У�ÿ�Уø��ַ������������Թ�
char map[41][41];//��ͼ
bool book[40][40]= {0};//��̽��

queue que[1601];//����
int head=0;
int tail=0;

//���x1,y1 �յ�x2,y2
int bfs(int x1,int y1,int x2,int y2) {
	int x,y;
	//��ʼ��
	que[tail].x=x1;
	que[tail].y=y1;
	que[tail].step=1;
	tail++;
	//����
	while(head<tail) {
		x=que[head].x;
		y=que[head].y;

		//�Թ�����
		if(x==x2&&y==y2) {
			return que[head].step;
		}
		//�ϰ�
		if(map[x][y]=='#') {
			head++;
			continue;
		}
		//Խ���ж�
		if(x<0||y<0||x>=r||y>=c) {
			head++;
			continue;
		}
		//��̽��
		if(book[x][y]==1) {
			head++;
			continue;
		}
		book[x][y]=1;
		//����
		//��
		que[tail].x=x-1;
		que[tail].y=y;
		que[tail].step=que[head].step+1;
		tail++;
		//��
		que[tail].x=x+1;
		que[tail].y=y;
		que[tail].step=que[head].step+1;
		tail++;
		//��
		que[tail].x=x;
		que[tail].y=y-1;
		que[tail].step=que[head].step+1;
		tail++;
		//��
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
	//��������
	for(int i=0; i<r; i++) {
		for(int j=0; j<c; j++) {
			cin>>map[i][j];
		}
	}
	cout<<bfs(0,0,r-1,c-1)<<endl;
	return 0;
}
