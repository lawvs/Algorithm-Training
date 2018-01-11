//运算全部为整型运算，省略小数
#include<iostream>
#include<ctime>
#include<cstdlib>
using namespace std;

char optrSwitch(int optrnum)
{
	switch(optrnum)
	{
		case 0:
			return '+';
		case 1:
			return '-';
		case 2:
			return '*';
		case 3:
			return '/';
		default:
			cout<<"optrSwitchERROR"<<endl;//异常
			exit(1);//异常退出
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
			return opnd1-opnd2;
		case '*':
			return opnd1*opnd2;
		case '/':
			if(!opnd1)//除0异常
			{
				cout<<"calcERROR #inf"<<endl;
				exit(1);
			}
			return opnd1/opnd2;
		default:
			cout<<"calcERROR"<<endl;//异常
			exit(1);//异常退出
	}
}

int main()
{
	srand(time(NULL));//初始化随机数种子
	int right=0;//做对题数
	int ans;
	for(int count=1; count<=10; count++)
	{
		int num1=rand()%90+10;//随机两位数
		int num2=rand()%90+10;
		int optrnum=rand()%4;//+-*/0123
		char optr=optrSwitch(optrnum);//将optrnum转换为运算符
		cout<<count<<"、"<<num1<<optr<<num2<<"=";//打印题目
		cin>>ans;
		if(ans==calc(num1,num2,optr)){
			cout<<"OK"<<endl;
			right++;
		}
		else{
			cout<<"ERROR"<<endl;
		}
	}
	cout<<"总分："<<right<<endl;
	cout<<"做错题数："<<10-right<<endl;
    system("pause");
	return 0;
}

