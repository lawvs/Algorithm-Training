/*
	Name:���Ķ���
	Date: 01/02/16 11:25
	Description:�������һ��ϵͳ��
	����һ�����������ִ�����
	�����������Ķ�д�Ĺ淶תΪ����ƴ���ִ���
	���ڵ�����������һ���ո���񿪡�
*/

#include<iostream>
#include<string.h>
using namespace std;

string numtable[10];
string unittable[10];
//����ӳ���
bool mapTable()
{
	//0~9
	//numtable[0]="ling ";
	numtable[1]="yi ";
	numtable[2]="er ";
	numtable[3]="san ";
	numtable[4]="si ";
	numtable[5]="wu ";
	numtable[6]="liu ";
	numtable[7]="qi ";
	numtable[8]="ba ";
	numtable[9]="jiu ";
	//unit
	unittable[0]="shi ";
	unittable[1]="yi ";
	unittable[2]="qian ";
	unittable[3]="bai ";
	unittable[4]="shi ";
	unittable[5]="wan ";
	unittable[6]="qian ";
	unittable[7]="bai ";
	unittable[8]="shi ";
}

int main()
{
	string str;
	cin>>str;
	while(str.length() < 10)
	{
		str='0'+str;
	}
	int index=0;
	while(str[index]=='0')
	{
		index++;
	}
	string finstr;
	mapTable();
	//ʮ�� ʮ�� ʮ
	if(str[index]=='1')
	{
		if(index==0||index==4||index==8)
		{
			finstr+="shi ";
			index++;
			finstr+=numtable[ str[index]-'0' ];
			finstr+=unittable[index++];
		}
	}
	
	//0		1	2	3	 4	 5	 6	7 8  9
	//ʮ�� �� ǧ�� ���� ʮ�� �� ǧ �� ʮ ��
	while(index<10){
		if(str[index]=='0'){
			bool flag=0;
			while(str[index]=='0'){
				if(!flag&&(index==1||index==5)){
					finstr+=unittable[index];
					flag=1;
				}
				index++;
			}
			if(index < 10){
				finstr+="ling ";
			}else{
				break;
			}
		}
		finstr+=numtable[ str[index]-'0' ];
		finstr+=unittable[index++];
	}
	//cout<<index<<endl;
	cout<<finstr<<endl;
	return 0;
}

