#include<iostream.h>
#include<fstream.h>
#include<stdlib.h>
#define STACK_INIT_SIZE 100//栈储存空间初始分配量
#define STACKINCREMENT 10//栈储存空间分配增量
typedef int Status;

ifstream fin("input.txt",ios::in);   //建立从input.txt文件读入信息的函数fin
ofstream fout("output.txt",ios::out);    //建立输出到output.txt文件的函数fout

typedef struct//预定义栈结构体
{
	char *base;//栈底指针，在栈构造前和销毁后，base的值为NULL
	char *top;//栈顶指针
	int stacksize;//当前已分配的储存空间，以元素为单位
}SqStack;

int main()
{
	//函数声明
	Status InitStack(SqStack &S);//构造一个空栈S
	Status Push(SqStack &S,char e);//插入一个元素
	Status Pop(SqStack &S,char &e);//删除栈顶元素

	//定义
	SqStack S;//栈S
	char e;
	InitStack(S);
	while((fin>>e)!='\0')
	{
		switch (e)
		{
		case '(': 
		case '[': 
		case '{': Push(S,e);continue;
		case ')': Pop(S,e);if(e=='(')continue;
			fout<<"ERROR";return 0;
		case ']': Pop(S,e);if(e=='[')continue;
			fout<<"ERROR";return 0;
		case '}': Pop(S,e);if(e=='{')continue;
			fout<<"ERROR";return 0;
		}
	}
	if(S.top==S.base)
	    fout<<("OK");
	else
		fout<<"ERROR";
	
	 fin.close(); //fin和fout要及时关闭
	 fout.close();
	return 1;
}

//构造一个空栈S 初始化栈，并返回1，否则返回0
Status InitStack(SqStack &S)
{
	S.base=(char*)malloc(STACK_INIT_SIZE*sizeof(char));
	if(!S.base)
		exit(-2);//存储分配失败
	S.top=S.base;
	S.stacksize=STACK_INIT_SIZE;
	return 1;
}

//插入元素e为新的栈顶元素，并返回1，否则返回0
Status Push(SqStack &S,char e)
{
	if(S.top-S.base>=S.stacksize)//栈满，追加存储空间
	{
		S.base=(char*)realloc(S.base,(S.stacksize+STACKINCREMENT)*sizeof(char));
		if(!S.base)
			exit(0);	//存储分配失败,返回0
		S.top=S.base+S.stacksize;
		S.stacksize+=STACKINCREMENT;
	}
	*S.top++=e;
	return 1;
}

//若栈不为空，则删除栈顶元素，用e返回其值，并返回1，否则返回0
Status Pop(SqStack &S,char &e)
{
	if(S.top==S.base){
		fout<<"ERROR";
		exit(0);
	}
	e=*--S.top;
	return 1;
}