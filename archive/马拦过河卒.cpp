/*2015.8.17
����
������A����һ�������䣬��Ҫ�ߵ�Ŀ��B�㡣�����ߵĹ��򣺿������¡��������ҡ�ͬʱ��������C����һ���Է������������ڵĵ��������Ծһ���ɴ�ĵ��Ϊ�Է���Ŀ��Ƶ㡣��˳�֮Ϊ�����������䡱��
�����������ʾ��A��(0, 0)��B��(n, m)(n, mΪ������15������)��ͬ�����λ����������Ҫ�����ġ�����Ҫ�����������A���ܹ�����B���·�����������������λ���ǹ̶������ģ�����������һ������һ����
����
һ���ĸ����ݣ��ֱ��ʾB�������������ꡣ����֤���е������н⣩
���
һ�����ݣ���ʾ���е�·��������
 */
#include<iostream>
//#include<time.h> 
using namespace std;

int ans=0;//·������
int bx,by;//Ŀ��B������(bx,by)
int hx,hy;//������(hx,hy)
bool flag[17][17];


//Ŀ�����з���1,�����з���0
bool fun2(int x,int y){
	if(x>bx || y>by){//���곬��Ŀ���
		return 0;
	}
	if( x==(hx+2) ||x==(hx-2) ){//����������Ծһ���ɴ�ĵ�
		if( y==(hy+1)||y==(hy-1) ){
			return 0;
		}
	}
	if( y==(hy+2) ||y==(hy-2) ){//����������Ծһ���ɴ�ĵ�
		if( x==(hx+1)||x==(hx-1) ){
			return 0;
		}
	}
	if(x==hx && y==hy){//����Ϊ�����ڵĵ�
		return 0;
	}
	return 1;//����
}

//��ʼ������
void fun3(){
	for(int i=0;i<=bx+1;i++){
		for(int j=0;j<by+1;j++){
			fun2(i,j)?flag[i][j]=1:flag[i][j]=0;
			//flag[i][j]=1;
		}
	}
}

void fun(int x=0,int y=0){//�䵱ǰ����x,y
	if(x==bx && y==by){//����Ŀ��,·��+1
		ans++;
		return;//����
	}
	if(flag[x+1][y]){
		fun(x+1,y);
	}
	if(flag[x][y+1]){
		fun(x,y+1);
	}
	return;
}

//������
int main(){	
	cin>>bx>>by;//Ŀ��B������
	cin>>hx>>hy;//������(hx,hy)
	//bx=15,by=15,hx=0,hy=0;
	fun3();//��ʼ������
	fun();
	cout<<ans<<endl;
	//printf("Time used = %.2fs\n", (double)clock() / CLOCKS_PER_SEC); //ʱ��ͳ��
    return 0;
}