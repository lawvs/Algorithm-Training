/*
	������ϰ ����ȡ��
	Date: 05/02/16 20:34
	Description:����ȡ���������ؾ���ı�ȡ����
	����ǰ������������ȡ���Ѿ�ȡ��������ת90�ȡ�
	һ��ʼλ�ھ������Ͻǣ��������¡�
*/

#include<iostream>
using namespace std;
int main(){
    int m,n;
    cin>>m>>n;
    int num[m][n];
    bool flag[m][n];
    for(int i=0;i<m;i++){
    	for(int j=0;j<n;j++){
    		cin>>num[i][j];
    		flag[i][j]=0;
		}
	}
	/*test
	for(int i=0;i<m;i++){
    	for(int j=0;j<n;j++){
    		cout<<num[i][j]<<" ";
		}
		cout<<endl;
	}
	//*/
	int i=0,j=0;
	for(int count=0;count<(m*n);){
		//����
		for(;i<m && !flag[i][j];i++) {
			flag[i][j]=1;
			count++;
			cout<<num[i][j]<<" ";
		}
		i--;
		//����
		j++;
		for(;j<n && !flag[i][j];j++) {
			flag[i][j]=1;
			count++;
			cout<<num[i][j]<<" ";
		}
		j--;
		//����
		i--;
		for(;i>=0 && !flag[i][j];i--) {
			flag[i][j]=1;
			count++;
			cout<<num[i][j]<<" ";
		}
		i++;
		//����
		j--;
		//cout<<"\n"<<i<<" "<<j<<endl;
		for(;j>=0 && !flag[i][j];j--) {
			flag[i][j]=1;
			count++;
			cout<<num[i][j]<<" ";
		}
		j++;
		i++;
	}
	return 0;
}

