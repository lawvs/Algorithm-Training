/*
����
��1�У�2��������L,N (1 �� L �� 2,000��1 �� N �� 2,000)
��2�У�N����������i������ʾ���Ϊi���������������k[i] (0 �� k[i] �� L)
��3�У�N����������i������ʾ���Ϊi�������������ֵf[i] (1 �� f[i] �� 10,000)
���
��1�У�1����������ʾ��С���˺���Ӧ�����꣬
����ж������ȡ����Сֵ�������С��һ�����ꡣ
��2�У�1����������ʾ�ܵ�����С���˺���ֵ
*/
#include<iostream>
using namespace std;

//�����С���˺���Ӧ��������ܵ�����С���˺���ֵ
void out(int harmmap[],int l){
	int p=0,minharm=harmmap[0];
	for(int i=1;i<l+1;++i){
		if(harmmap[i]<minharm){
			minharm=harmmap[i];
			p=i;
		}
	}
	cout<<p<<endl;//�������
	cout<<minharm;//�����С�˺�
}

int main(){
	int l,n,location[2001],harmmap[2001]={0},j;
	cin>>l>>n;
	for(j=0;j<n;++j){//���ݶ�ȡ
		cin>>location[j];//�����˺�����
	}
	
	//�˺�ģ��
	for(j=0;j<n;++j ){
		int harm,harm2,i;//harm,harm2�˺���ʱ���
		cin>>harm2;//�����˺�
		harm=harm2;
		harmmap[ location[j] ]+=harm;//�˺�ԭ�����˺�����
		for(i=1;--harm && location[j]-i>=0;++i ){//�˺����µݼ�  �˺�Ϊ0 Խ�½� ����
			harmmap[ location[j]-i ]+=harm;
		}
		harm=harm2;//�˺�ֵ��ʼ��
		for(i=1;--harm && location[j]+i< l+1 ;++i ){//�˺����ϵݼ� �˺�Ϊ0 Խ�Ͻ� ����
			harmmap[ location[j]+i ]+=harm;
		}
	}
	out(harmmap,l);//���
    return 0;
}