//����ȫ��Ϊ�������㣬ʡ��С��
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
			cout<<"optrSwitchERROR"<<endl;//�쳣
			exit(1);//�쳣�˳�
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
			return opnd1-opnd2;
		case '*':
			return opnd1*opnd2;
		case '/':
			if(!opnd1)//��0�쳣
			{
				cout<<"calcERROR #inf"<<endl;
				exit(1);
			}
			return opnd1/opnd2;
		default:
			cout<<"calcERROR"<<endl;//�쳣
			exit(1);//�쳣�˳�
	}
}

int main()
{
	srand(time(NULL));//��ʼ�����������
	int right=0;//��������
	int ans;
	for(int count=1; count<=10; count++)
	{
		int num1=rand()%90+10;//�����λ��
		int num2=rand()%90+10;
		int optrnum=rand()%4;//+-*/0123
		char optr=optrSwitch(optrnum);//��optrnumת��Ϊ�����
		cout<<count<<"��"<<num1<<optr<<num2<<"=";//��ӡ��Ŀ
		cin>>ans;
		if(ans==calc(num1,num2,optr)){
			cout<<"OK"<<endl;
			right++;
		}
		else{
			cout<<"ERROR"<<endl;
		}
	}
	cout<<"�ܷ֣�"<<right<<endl;
	cout<<"����������"<<10-right<<endl;
    system("pause");
	return 0;
}

