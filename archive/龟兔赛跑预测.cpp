/*
	Date: 05/02/16 19:50
	Description:�����ڹ�ı����У�
	һ����һ����������ӷ����Լ�����t�׻����ϣ�
	���Ǿͻ�ͣ������Ϣs�롣
	���ڲ�ͬ�����ӣ�t��s����ֵ�ǲ�ͬ�ģ�
	�������е��ڹ겻���յ����ֹͣ��
	��һ������������һ����д��ĸ��T����R����D����
	�ֱ��ʾ�ڹ��ʤ�����ӻ�ʤ��
	��������ͬʱ�����յ㡣
*/

#include<iostream>
using namespace std;
int main(){
	/*
	���ӵ��ٶ�v1����ʾÿ����������v1�ף���
	�ڹ���ٶ�v2��
	���Ӷ�Ӧ��t��sֵ��
	����t�׻����ϣ�ͣ������Ϣs�룬
	�����ĳ���l
	*/
	int v1,v2,t,s,l;
	cin>>v1>>v2>>t>>s>>l;
	//
	int ts=0;//�ڹ�·��
	int rs=0;//����·��
	int nows=0;//���ӵȴ�ʱ��
	int nowt=0;//����ʱ��
	while(ts<l && rs<l){//��δ�����յ�
		nowt++;
		if(nows){//������Ϣ
			nows--;
		}else{
			rs+=v1;
		}
		ts+=v2;
		//
		if( !nows && (rs-ts)>=t ){//��Ϣʱ�������ж�
			nows=s;
		}
	}
	//output
	if(ts < rs){
		cout<<"R"<<endl;
	}else if(ts > rs){
		cout<<"T"<<endl;
	}else{
		cout<<"D"<<endl;
	}
	cout<<nowt<<endl;
	return 0;
}

