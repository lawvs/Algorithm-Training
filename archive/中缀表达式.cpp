#include<iostream>
#include<stack>
#include<string>
#include<stdlib.h>
using namespace std;

//判断字符c是否为操作符+,-,*,/
bool isOptr(char c)
{
	switch (c)
	{
		case '+':
		case '-':
		case '*':
		case '/':
			return 1;
		default	:
			return 0;
	}
}

//根据操作符optr与两个运算数进行运算
int calc(int opnd1, int opnd2, char optr)
{
	switch (optr)
	{
		case '+':
			return opnd1+opnd2;
		case '-':
			return opnd2-opnd1;
		case '*':
			return opnd1*opnd2;
		case '/':
			if(!opnd1)
			{
				cout<<"calcERROR #inf"<<endl;
				exit(1);
			}
			return opnd2/opnd1;
		default:
			cout<<"calcERROR"<<endl;//异常
			exit(1);//异常退出
	}
}

//运算符优先级判断函数, optrA为栈顶,optrB为当前元素,
//如果optrA优先级高则返回1,如果optrA优先级较低返回-1
int precede(char optrA, char optrB)
{
	if (optrA == '(')//'('在栈顶，optrA优先级总是最低，optrB入栈
	{
		return -1;
	}

	if (optrA == '+' || optrA == '-')
	{
		if (optrB == '*' || optrB == '/')   //栈顶优先级低，返回-1，optrB入栈
		{
			return -1;
		}
		if (optrB == '+' || optrB == '-')   //栈顶优先级高，返回1出栈
		{
			return 1;
		}
	}

	if (optrA == '*' || optrA == '/')  //栈顶优先级高，返回1出栈
	{
		return 1;
	}

	cout<<"precedeERROR"<<endl;//异常
	exit(1);//异常退出
}

//主函数
int main()
{
	int n;	//数据组数
	cin>>n;
	while(n--)
	{
		string str;
		cin>>str;
		stack<int> opnds;//操作数栈
		stack<char> optrs;//操作符栈

		//依次入栈 操作数 操作符
		bool flag=0;
		for(int i = 0; i<str.length(); i++)
		{
			char c = str[i];
			//c是0-9
			if (isdigit(c))
			{
				if(flag)//刚输入的是数字
				{
					int num1=opnds.top()*10;
					opnds.pop();
					opnds.push(c-'0'+num1);
				}
				else
				{
					opnds.push(c-'0');//入栈
				}
				flag=1;//输入的是数字
			}
			//c是'('
			else if(c=='(')
			{
				flag=0;
				optrs.push(c);//入栈
			}
			//c是运算符+-*/
			else if(isOptr(c))
			{
				flag=0;
				if(optrs.empty()) //操作符栈为空
				{
					optrs.push(c);
				}
				else if(precede(optrs.top(),c)==1)//栈顶优先级高
				{
					while(!optrs.empty() && precede(optrs.top(),c)==1)
					{

						//获取栈顶两数
						int num1=opnds.top();//栈顶数字
						opnds.pop();
						int num2=opnds.top();
						opnds.pop();

						//计算栈顶两数
						int num3=calc(num1,num2,optrs.top());//计算栈顶两数
						opnds.push(num3);//将计算结果入栈
						//test1
						//cout<<num2<<optrs.top()<<num1<<"="<<num3<<endl;

						optrs.pop();//出栈已经运算的运算符
					}
					optrs.push(c);//入栈低优先级运算符
				}
				else//栈顶优先级低
				{
					optrs.push(c);//入栈运算符
				}
			}
			//c是')'
			else if(c==')')
			{
				flag=0;
				//依次出栈计算到'('
				while(optrs.top() != '(')
				{
					//计算
					//获取栈顶两数
					int num1=opnds.top();//栈顶数字
					opnds.pop();
					int num2=opnds.top();
					opnds.pop();

					//计算栈顶两数
					int num3=calc(num1,num2,optrs.top());//计算栈顶两数
					opnds.push(num3);//将计算结果入栈
					//test2
					//cout<<"("<<num2<<optrs.top()<<num1<<")="<<num3<<endl;

					optrs.pop();//出栈已经运算的运算符
				}
				optrs.pop();//出栈'('
			}
		}

		//操作符栈不为空 出栈计算
		while(!optrs.empty())
		{
			//计算
			//获取栈顶两数
			int num1=opnds.top();//栈顶数字
			opnds.pop();
			int num2=opnds.top();
			opnds.pop();

			//计算栈顶两数
			int num3=calc(num1,num2,optrs.top());//计算栈顶两数
			opnds.push(num3);//将计算结果入栈
			//test3
			//cout<<num2<<optrs.top()<<num1<<"="<<num3<<endl;

			optrs.pop();//出栈已经运算的运算符
		}

		//输出结果
		cout<<opnds.top()<<endl;
	}
	return 0;
}
