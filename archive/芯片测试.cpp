/*
	Date: 02/02/16 14:35
	Description:��n��2��n��20����оƬ���к��л���
	��֪��оƬ�Ȼ�оƬ�ࡣ
����ÿ��оƬ����������������оƬ��
	�ú�оƬ��������оƬʱ��
	����ȷ����������оƬ�Ǻû��ǻ���
	���û�оƬ��������оƬʱ��
	����������û��ǻ��Ĳ��Խ��
	�����˽���뱻����оƬʵ�ʵĺû��޹أ���
������������оƬ�Ĳ��Խ��������ЩоƬ�Ǻ�оƬ��
*/

#include<iostream>
#include<cstdlib>
using namespace std;

int n;//оƬ��Ŀ
int corrnum;//��ȷоƬ��Ŀ
int chip[20];//оƬ���
bool check[20][20];//������

//��ʼ��
void init(int n){
	corrnum=1;
	for(int i=0;i<n;i++){
		chip[i]=0;
	}
}

//output
void output(){
	for(int i=0;i<n;i++){
		if(chip[i]){
			cout<<i+1<<" ";
		}
	}
	cout<<endl;
}

void find(int now){
	/*test
	cout<<"nowfind:"<<now+1<<endl;
	cout<<"nowcorrnum:"<<corrnum<<endl;
	output();
	//testend*/
	//���
	for(int i=0;i<now;i++){
		if(check[now][i] != chip[i]){
			//test
			//cout<<"wrong"<<i<<chip[i]<<" ";
			//
			return;
		}
	}
	for(int i=now+1;i<n;i++){
		if(check[now][i]){
			chip[i]=1;
			corrnum++;
			find(i);
			chip[i]=0;
			corrnum--;
		}else{
			chip[i]=0;
		}
	}
	//����
	if(now>=n-1){
		if(corrnum>n/2){
			output();
			exit(0);
		}
		return;
	}
	
}

int main(){
    //input
    cin>>n;
    for(int i=0;i<n;i++){
    	for(int j=0;j<n;j++){
    		cin>>check[i][j];
		}
	}
	
	init(n);
	//����
	for(int i=0;i<n;i++){
		chip[i]=1;
		find(i);
		chip[i]=0;
	}
	
	//output();
	return 0;
}

