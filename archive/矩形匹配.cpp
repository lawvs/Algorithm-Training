#include<iostream>
#include<fstream>
using namespace std;
/*�ó���ͨ����ٷ�������ĸ��Ǹ�����Ϊ�˼���ʱ�临�Ӷȣ��ó������ѶԱȵľ���ɾ���Լ���ʱ�临�Ӷ�*/

ifstream fin("input.txt", ios::in); //������input.txt�ļ�������Ϣ�ĺ���fin
ofstream fout("output.txt", ios::out);  //���������output.txt�ļ��ĺ���fout

struct Lnode
{
   int  data;        /*������*/
   Lnode  *next;    //ָ����
};

void Init_DuLinkList(Lnode  *& La,Lnode  *& Lb)  //��ʼ���������Ա�һ��װx��Ĳһ��װy��Ĳ�
{
	int x1,x2,y1,y2;
	Lnode *p, *q,*m,*n;
	int num;
	fin>>num;    //������εĸ���
	La=new Lnode;
	q=La;
	Lb=new Lnode;
	n=Lb;
	for(int i=1; i<=num; i++)
	{
		fin>>x1>>x2>>y1>>y2;
		p=new Lnode;     //����La
		p->data=x2-x1;
		q->next=p;
		q=q->next;

		m=new Lnode;     //����Lb
		m->data=y2-y1;
		n->next=m;
		n=n->next;
	}
	q->next=NULL;
	n->next=NULL;
}

int like_num(Lnode *&La,Lnode *&Lb,Lnode *&p,Lnode *&m)//�ж���þ��ο����غϵľ��θ���
{
	int result1=0; 
	Lnode *q, *n;//q��nָ�򱻶Աȵľ��Σ�p��mָ��Աȵľ���
	q=p;n=m;
	while(n->next!=NULL)
	{
		if((p->data==q->next->data||p->data==n->next->data)&&(m->data==n->next->data||m->data==q->next->data))//�жϾ����Ƿ���Ի��า�ǣ�������ɾ���ý�㣬����������һ���������Ա�
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
{   int result=0;//����������               
	Lnode *La, *Lb;  
	Init_DuLinkList(La,Lb);   //���Ա��ʼ��
	Lnode *p, *m;
	p=La->next;m=Lb->next;//p,mָ���һ����������
	while(p!=NULL)
	{
		int b=like_num(La,Lb,p,m);
		if(b>=result)
			result=b;
		p=p->next;m=m->next;
	}

	if(result==0)   //�����ڿ��Ի��า�ǵ����1�����ϱ����������Ϊ0����û�п��Ի��า�ǵľ���
		fout<<result;
	else
		fout<<result+1;
	 delete La;delete Lb;
	 fin.close();                           //fin��foutҪ��ʱ�ر�
	 fout.close();
}




