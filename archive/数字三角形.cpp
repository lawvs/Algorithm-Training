/*
	����������
    ��̬�滮
	Date: 21/02/16 16:56
	Description:������һ�����������Ρ�
	���һ���������Ӷ����׵�ĳ����һ��·
��������ʹ��·�������������ֵ��ܺ����
������ÿһ��������б�����»���б�������ߣ�
������1��������������100��
�������������е�����Ϊ����0��1����99��
*/

#include<iostream>
#include<algorithm>
using namespace std;
int main(){
    int line;
    cin>>line;
    int num[101]={0};
    
    //dp
    int temnum;
    int temnump=0;
    int temnumpp=0;
    for(int i=0;i<=line;i++){
    	for(int j=0;j<i;j++){
    		cin>>temnum;
    		temnump=num[j];
    		num[j]=temnum+max(num[j],temnumpp);
			temnumpp=temnump;
    		//
    		//cout<<num[j]<<" ";
    	}
    	//cout<<endl;
	}
	//findmax
	int max=0;
	for(int i=0;i<line;i++){
    	if(max<num[i]){
    		max=num[i];
		}
    }
    
	cout<<max<<endl;
	return 0;
}

