#include<iostream>
#include<stack>
#include<string>
#include<stdlib.h>
using namespace std;

//�ж��ַ�c�Ƿ�Ϊ������+,-,*,/
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

//���ݲ�����optr��������������������
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
			cout<<"calcERROR"<<endl;//�쳣
			exit(1);//�쳣�˳�
	}
}

//��������ȼ��жϺ���, optrAΪջ��,optrBΪ��ǰԪ��,
//���optrA���ȼ����򷵻�1,���optrA���ȼ��ϵͷ���-1
int precede(char optrA, char optrB)
{
	if (optrA == '(')//'('��ջ����optrA���ȼ�������ͣ�optrB��ջ
	{
		return -1;
	}

	if (optrA == '+' || optrA == '-')
	{
		if (optrB == '*' || optrB == '/')   //ջ�����ȼ��ͣ�����-1��optrB��ջ
		{
			return -1;
		}
		if (optrB == '+' || optrB == '-')   //ջ�����ȼ��ߣ�����1��ջ
		{
			return 1;
		}
	}

	if (optrA == '*' || optrA == '/')  //ջ�����ȼ��ߣ�����1��ջ
	{
		return 1;
	}

	cout<<"precedeERROR"<<endl;//�쳣
	exit(1);//�쳣�˳�
}

//������
int main()
{
	int n;	//��������
	cin>>n;
	while(n--)
	{
		string str;
		cin>>str;
		stack<int> opnds;//������ջ
		stack<char> optrs;//������ջ

		//������ջ ������ ������
		bool flag=0;
		for(int i = 0; i<str.length(); i++)
		{
			char c = str[i];
			//c��0-9
			if (isdigit(c))
			{
				if(flag)//�������������
				{
					int num1=opnds.top()*10;
					opnds.pop();
					opnds.push(c-'0'+num1);
				}
				else
				{
					opnds.push(c-'0');//��ջ
				}
				flag=1;//�����������
			}
			//c��'('
			else if(c=='(')
			{
				flag=0;
				optrs.push(c);//��ջ
			}
			//c�������+-*/
			else if(isOptr(c))
			{
				flag=0;
				if(optrs.empty()) //������ջΪ��
				{
					optrs.push(c);
				}
				else if(precede(optrs.top(),c)==1)//ջ�����ȼ���
				{
					while(!optrs.empty() && precede(optrs.top(),c)==1)
					{

						//��ȡջ������
						int num1=opnds.top();//ջ������
						opnds.pop();
						int num2=opnds.top();
						opnds.pop();

						//����ջ������
						int num3=calc(num1,num2,optrs.top());//����ջ������
						opnds.push(num3);//����������ջ
						//test1
						//cout<<num2<<optrs.top()<<num1<<"="<<num3<<endl;

						optrs.pop();//��ջ�Ѿ�����������
					}
					optrs.push(c);//��ջ�����ȼ������
				}
				else//ջ�����ȼ���
				{
					optrs.push(c);//��ջ�����
				}
			}
			//c��')'
			else if(c==')')
			{
				flag=0;
				//���γ�ջ���㵽'('
				while(optrs.top() != '(')
				{
					//����
					//��ȡջ������
					int num1=opnds.top();//ջ������
					opnds.pop();
					int num2=opnds.top();
					opnds.pop();

					//����ջ������
					int num3=calc(num1,num2,optrs.top());//����ջ������
					opnds.push(num3);//����������ջ
					//test2
					//cout<<"("<<num2<<optrs.top()<<num1<<")="<<num3<<endl;

					optrs.pop();//��ջ�Ѿ�����������
				}
				optrs.pop();//��ջ'('
			}
		}

		//������ջ��Ϊ�� ��ջ����
		while(!optrs.empty())
		{
			//����
			//��ȡջ������
			int num1=opnds.top();//ջ������
			opnds.pop();
			int num2=opnds.top();
			opnds.pop();

			//����ջ������
			int num3=calc(num1,num2,optrs.top());//����ջ������
			opnds.push(num3);//����������ջ
			//test3
			//cout<<num2<<optrs.top()<<num1<<"="<<num3<<endl;

			optrs.pop();//��ջ�Ѿ�����������
		}

		//������
		cout<<opnds.top()<<endl;
	}
	return 0;
}
