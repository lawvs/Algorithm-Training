//2015.6.27
/*描述
现在，有一行括号序列，请你检查这行括号是否配对。
输入
第一行输入一个数N（0<N<=100）,表示有N组测试数据。
后面的N行输入多组输入数据，每组输入数据都是一个字符串S(S的长度小于10000，且S不是空串），
测试数据组数少于5组。数据保证S中只含有"[","]","(",")"四种字符
输出
每组输入数据的输出占一行，
如果该字符串中所含的括号是配对的，
则输出Yes,如果不配对则输出No
*/

#include<iostream>
#include<cstdio>
using namespace std;

typedef struct//预定义栈结构体
{
	char *top;//栈顶指针
}SqStack;



//函数声明
  void Push(SqStack &S,char e);
  void Pop(SqStack &S,char &e);

  //主函数
int main(){
  int n;//数据组数N
  char e;
  bool flag=0;
  SqStack S;//栈S
  char stack[10000];//栈
 
  cin>>n;//读入数据组数N
  e=getchar();
  for(int i=0;i<n;++i){
	  S.top=&stack[0];//初始化指针
	  flag=0;
	  while(flag==0&&(e=getchar())!='\n'){
		  switch (e){
		case '(': 
		case '[': Push(S,e);continue;
		case ')': Pop(S,e);
			if(e=='(')continue;
			printf("No\n");
			while((e=getchar())!='\n');flag=1;break;
		case ']': Pop(S,e);
			if(e=='[')continue;
			printf("No\n");
			while((e=getchar())!='\n');flag=1;break;
		  }
	  }
	  if(flag==0&&S.top==&stack[0])
		  cout<<"Yes"<<endl;
	  else if(flag==0)
		  printf("No\n");
  }
	  return 0;
}




 //插入元素e为新的栈顶元素
 void Push(SqStack &S,char e){
	 *S.top++=e;
	 return ;
 }

 //删除栈顶元素，用e返回其值
 void Pop(SqStack &S,char &e){
	 e=*--S.top;
	 return ;
 }
