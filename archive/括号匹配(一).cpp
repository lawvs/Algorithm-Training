//2015.6.27
/*����
���ڣ���һ���������У����������������Ƿ���ԡ�
����
��һ������һ����N��0<N<=100��,��ʾ��N��������ݡ�
�����N����������������ݣ�ÿ���������ݶ���һ���ַ���S(S�ĳ���С��10000����S���ǿմ�����
����������������5�顣���ݱ�֤S��ֻ����"[","]","(",")"�����ַ�
���
ÿ���������ݵ����ռһ�У�
������ַ�������������������Եģ�
�����Yes,�������������No
*/

#include<iostream>
#include<cstdio>
using namespace std;

typedef struct//Ԥ����ջ�ṹ��
{
	char *top;//ջ��ָ��
}SqStack;



//��������
  void Push(SqStack &S,char e);
  void Pop(SqStack &S,char &e);

  //������
int main(){
  int n;//��������N
  char e;
  bool flag=0;
  SqStack S;//ջS
  char stack[10000];//ջ
 
  cin>>n;//������������N
  e=getchar();
  for(int i=0;i<n;++i){
	  S.top=&stack[0];//��ʼ��ָ��
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




 //����Ԫ��eΪ�µ�ջ��Ԫ��
 void Push(SqStack &S,char e){
	 *S.top++=e;
	 return ;
 }

 //ɾ��ջ��Ԫ�أ���e������ֵ
 void Pop(SqStack &S,char &e){
	 e=*--S.top;
	 return ;
 }
