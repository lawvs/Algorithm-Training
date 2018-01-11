/*2014.10.15
�ж�����Ĵ����š������š�С���������Ƿ�ƥ��
������ķǷ�Ԫ�ؽ��о���
��ƥ��ɹ��򷵻�OK�����򷵻�ERROR
��input�ļ��ж������ݣ������output�ļ�
*/
#include<iostream.h>
#include<fstream.h>
#include<stdio.h>
#include<stdlib.h>

#define STACK_INIT_SIZE 100//ջ����ռ��ʼ������
#define STACKINCREMENT 10//ջ����ռ��������
typedef int Status;

ifstream fin("input.txt",ios::in);   //������input.txt�ļ�������Ϣ�ĺ���fin
ofstream fout("output.txt",ios::out);    //���������output.txt�ļ��ĺ���fout

typedef struct//Ԥ����ջ�ṹ��
{
	char *base;//ջ��ָ�룬��ջ����ǰ�����ٺ�base��ֵΪNULL
	char *top;//ջ��ָ��
	int stacksize;//��ǰ�ѷ���Ĵ���ռ䣬��Ԫ��Ϊ��λ
}SqStack;

int main()
{
	//��������
	Status InitStack(SqStack &S);//����һ����ջS
	Status Push(SqStack &S,char e);//����һ��Ԫ��
	Status Pop(SqStack &S,char &e);//ɾ��ջ��Ԫ��

	//����
	SqStack S;//ջS
	char e;

	InitStack(S);
	printf("***����ƥ��***\nƥ������\n");
	while((fin>>e)!='\0')
	{
		switch (e)
		{
		case '(': 
		case '[': 
		case '{': Push(S,e);continue;
		case ')': Pop(S,e);
			if(e=='(')continue;
			printf("ERROR ���ڲ�ƥ��С����\n");fout<<"ERROR ���ڲ�ƥ��С����\n";fin.close();fout.close();return 0;
		case ']': Pop(S,e);
			if(e=='[')continue;
			printf("ERROR ���ڲ�ƥ��������\n");fout<<"ERROR ���ڲ�ƥ��������\n";fin.close();fout.close();return 0;
		case '}': Pop(S,e);
			if(e=='{')continue;
			printf("ERROR ���ڲ�ƥ�������\n");fout<<"ERROR ���ڲ�ƥ�������\n";fin.close();fout.close();return 0;
		default : printf("���棺����Ԫ���к��зǷ�Ԫ�� (%c)\n",e);fout<<"���棺����Ԫ���к��зǷ�Ԫ�� "<<e<< "\n";continue;
		}
	}
	if(S.top==S.base)
	{
		printf("OK\n");
	    fout<<("OK");
	}
	else
	{
		printf("ERROR ʣ��%d������δƥ��\n",S.top-S.base);
		fout<<"ERROR ʣ��"<<S.top-S.base<<"������δƥ��";
	}
	 fin.close(); 
	 fout.close();//��ʱ�ر�fin��fout
	return 1;
}

//����һ����ջS ��ʼ��ջ��������1�����򷵻�0
Status InitStack(SqStack &S)
{
	S.base=(char*)malloc(STACK_INIT_SIZE*sizeof(char));
	if(!S.base){
		printf("�������쳣 �洢����ʧ��\n");
		fout<<"�������쳣 �洢����ʧ��";
		exit(-2);}//�洢����ʧ��
	S.top=S.base;
	S.stacksize=STACK_INIT_SIZE;
	return 1;
}

//����Ԫ��eΪ�µ�ջ��Ԫ�أ�������1�����򷵻�0
Status Push(SqStack &S,char e)
{
	if(S.top-S.base>=S.stacksize)//ջ����׷�Ӵ洢�ռ�
	{
		S.base=(char*)realloc(S.base,(S.stacksize+STACKINCREMENT)*sizeof(char));
		if(!S.base)
		{
			printf("�������쳣 ����Ԫ��ʧ��\n");
			fout<<"�������쳣 ����Ԫ��ʧ��\n";
			exit(-2);
		}//�洢����ʧ��,����0
		S.top=S.base+S.stacksize;
		S.stacksize+=STACKINCREMENT;
	}
	*S.top++=e;
	return 1;
}

//��ջ��Ϊ�գ���ɾ��ջ��Ԫ�أ���e������ֵ��������1�����򷵻�0
Status Pop(SqStack &S,char &e)
{
	if(S.top==S.base){
		printf("ERROR ȱ��������\n");
		fout<<"ERROR ȱ��������\n";
		exit(0);
	}
	e=*--S.top;
	return 1;
}