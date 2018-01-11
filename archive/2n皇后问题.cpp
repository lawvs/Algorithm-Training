/*
	������ϰ 2n�ʺ�����
	Date: 05/02/16 22:02
	Description:����һ��n*n�����̣�
	��������һЩλ�ò��ܷŻʺ�
	����Ҫ�������з���n���ڻʺ��n���׻ʺ�
	ʹ����������ڻʺ󶼲���ͬһ�С�
	ͬһ�л�ͬһ���Խ����ϣ�
	����������׻ʺ󶼲���ͬһ�С�
	ͬһ�л�ͬһ���Խ����ϡ�
	���ܹ��ж����ַŷ���nС�ڵ���8��
*/

#include<iostream>
using namespace std;

int n;//���̴�С
int ans;//�����
bool grid[8][8];//����
bool set[2][8];//��(0)��(1)�ʺ��г�ͻ
bool legal1[2][17],legal2[2][17];//�ڰ׻ʺ�Խǳ�ͻ

bool init(int n){
	//����г�ͻ
	for(int i = 0; i < n; i++){
		set[0][i] = 0;
		set[1][i] = 0;
	}
	//��նԽǳ�ͻ
	for(int i = 0; i < 2*n-1; i++){
		legal1[0][i]=0;
		legal1[1][i]=0;
		legal2[0][i]=0;
		legal2[1][i]=0;
	}
	return 0;
}

//Ѱ�ҵ�line�еĺ�(0)��(1)�ʺ��
bool findans(int line,bool num){
	//cout<<"find "<<line<<"�� "<<num<<"�ʺ�"<<endl;
	//����
	if(line>=n){
		if(num){
			ans++;
			/*test
			cout<<"findans "<<ans<<endl;
			for(int i=0;i<n;i++){
				for(int j=0;j<n;j++){
				cout<<grid[i][j]<<" ";
				}
				cout<<endl;
			}
			//*/
			return 1;
		}
		else{
			findans(0,1);//Ѱ�Ұ�(1)�ʺ�
			return 1;
		}
	}
	
	//Ѱ��
	for(int i=0;i<n;i++){//line�� i��
		//����δ�����ҿɷ����������Խ���δ��ͻ
		if( !set[num][i] && grid[line][i]==1 && !legal1[num][ line+i ] && !legal2[num][(n-1)+line-i] ){
			set[num][i]=1;//�����ѷ���
			legal1[num][ line+i ] = 1;//���öԽǳ�ͻ
			legal2[num][ (n-1)+line-i ] = 1;
			grid[line][i]=0;//�ø��޷��ٷ���
			//
			//grid[line][i]=num+2;//test���
			
			findans(line+1,num);//Ѱ����һ��
			
			set[num][i]=0;
			legal1[num][ line+i ] = 0;//ȡ���Խǳ�ͻ
			legal2[num][ (n-1)+line-i ] = 0;
			grid[line][i]=1;
		}
	}
	return 0;
}

int main(){
	
	cin>>n;//��ʾ���̵Ĵ�С
	
	/*
	���һ������Ϊ1��
	��ʾ��Ӧ��λ�ÿ��ԷŻʺ�
	���һ������Ϊ0��
	��ʾ��Ӧ��λ�ò����ԷŻʺ�
	*/
	for(int i=0;i<n;i++){
		for(int j=0;j<n;j++){
			cin>>grid[i][j];
		}
	}
	//
	ans=0;
	init(n);//��ʼ�� ��ճ�ͻ
	findans(0,0);
	//���һ����������ʾ�ܹ��ж����ַŷ�
	cout<<ans<<endl;
	return 0;
}

