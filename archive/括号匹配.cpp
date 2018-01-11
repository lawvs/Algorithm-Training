/*2014.10.15
判断输入的大括号、中括号、小括号左右是否匹配
对输入的非法元素进行警告
若匹配成功则返回OK，否则返回ERROR
从input文件中读入数据，输出到output文件
*/
#include<iostream.h>
#include<fstream.h>
#include<stdio.h>
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
	printf("***括号匹配***\n匹配结果：\n");
	while((fin>>e)!='\0')
	{
		switch (e)
		{
		case '(': 
		case '[': 
		case '{': Push(S,e);continue;
		case ')': Pop(S,e);
			if(e=='(')continue;
			printf("ERROR 存在不匹配小括号\n");fout<<"ERROR 存在不匹配小括号\n";fin.close();fout.close();return 0;
		case ']': Pop(S,e);
			if(e=='[')continue;
			printf("ERROR 存在不匹配中括号\n");fout<<"ERROR 存在不匹配中括号\n";fin.close();fout.close();return 0;
		case '}': Pop(S,e);
			if(e=='{')continue;
			printf("ERROR 存在不匹配大括号\n");fout<<"ERROR 存在不匹配大括号\n";fin.close();fout.close();return 0;
		default : printf("警告：输入元素中含有非法元素 (%c)\n",e);fout<<"警告：输入元素中含有非法元素 "<<e<< "\n";continue;
		}
	}
	if(S.top==S.base)
	{
		printf("OK\n");
	    fout<<("OK");
	}
	else
	{
		printf("ERROR 剩余%d个括号未匹配\n",S.top-S.base);
		fout<<"ERROR 剩余"<<S.top-S.base<<"个括号未匹配";
	}
	 fin.close(); 
	 fout.close();//及时关闭fin和fout
	return 1;
}

//构造一个空栈S 初始化栈，并返回1，否则返回0
Status InitStack(SqStack &S)
{
	S.base=(char*)malloc(STACK_INIT_SIZE*sizeof(char));
	if(!S.base){
		printf("程序发生异常 存储分配失败\n");
		fout<<"程序发生异常 存储分配失败";
		exit(-2);}//存储分配失败
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
		{
			printf("程序发生异常 插入元素失败\n");
			fout<<"程序发生异常 插入元素失败\n";
			exit(-2);
		}//存储分配失败,返回0
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
		printf("ERROR 缺少左括号\n");
		fout<<"ERROR 缺少左括号\n";
		exit(0);
	}
	e=*--S.top;
	return 1;
}