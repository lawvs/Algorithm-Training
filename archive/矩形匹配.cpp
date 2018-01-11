#include<iostream>
#include<fstream>
using namespace std;
/*该程序通过穷举法求出最大的覆盖个数，为了减少时间复杂度，该程序会把已对比的矩形删除以减少时间复杂度*/

ifstream fin("input.txt", ios::in); //建立从input.txt文件读入信息的函数fin
ofstream fout("output.txt", ios::out);  //建立输出到output.txt文件的函数fout

struct Lnode
{
   int  data;        /*数据域*/
   Lnode  *next;    //指向后继
};

void Init_DuLinkList(Lnode  *& La,Lnode  *& Lb)  //初始化两个线性表，一个装x轴的差，一个装y轴的差
{
	int x1,x2,y1,y2;
	Lnode *p, *q,*m,*n;
	int num;
	fin>>num;    //导入矩形的个数
	La=new Lnode;
	q=La;
	Lb=new Lnode;
	n=Lb;
	for(int i=1; i<=num; i++)
	{
		fin>>x1>>x2>>y1>>y2;
		p=new Lnode;     //构造La
		p->data=x2-x1;
		q->next=p;
		q=q->next;

		m=new Lnode;     //构造Lb
		m->data=y2-y1;
		n->next=m;
		n=n->next;
	}
	q->next=NULL;
	n->next=NULL;
}

int like_num(Lnode *&La,Lnode *&Lb,Lnode *&p,Lnode *&m)//判断与该矩形可以重合的矩形个数
{
	int result1=0; 
	Lnode *q, *n;//q，n指向被对比的矩形；p，m指向对比的矩形
	q=p;n=m;
	while(n->next!=NULL)
	{
		if((p->data==q->next->data||p->data==n->next->data)&&(m->data==n->next->data||m->data==q->next->data))//判断矩形是否可以互相覆盖，可以则删除该结点，不能跳到下一个结点继续对比
		{
			result1++;
			q->next=q->next->next;
			n->next=n->next->next;
		}
		else
		{
           q=q->next;n=n->next;
		}
	}
	return result1;	
}

void main()  
{   int result=0;//代表输出结果               
	Lnode *La, *Lb;  
	Init_DuLinkList(La,Lb);   //线性表初始化
	Lnode *p, *m;
	p=La->next;m=Lb->next;//p,m指向第一个矩形数据
	while(p!=NULL)
	{
		int b=like_num(La,Lb,p,m);
		if(b>=result)
			result=b;
		p=p->next;m=m->next;
	}

	if(result==0)   //若存在可以互相覆盖的则加1（加上本身），否否则为0，即没有可以互相覆盖的矩形
		fout<<result;
	else
		fout<<result+1;
	 delete La;delete Lb;
	 fin.close();                           //fin和fout要及时关闭
	 fout.close();
}




