/*
����
����һ��������a��Ҫ��ֽ�����ɸ��������ĳ˻�����a = a1 * a2 * a3 * ... * an������1 < a1 <= a2 <= a3 <= ... <= an���������ķֽ�������ж��١�ע�⵽a = aҲ��һ�ַֽ⡣
����
��1���ǲ������ݵ�����n���������n�����롣ÿ���������ռ1�У�����һ��������a (1 < a < 32768)
���
n�У�ÿ�������Ӧһ�����롣���Ӧ��һ����������ָ������Ҫ��ķֽ������
*/
#include<iostream>
using namespace std;
int ans;
int num[32768];
//��˻�����
int sum(int n){
	int ans=1;
	for (int i=0;i<n;i++){
		ans*=num[i];
	}
	return ans;
}

void fun(int a,int n,int min){
	for(int i=min;i<=a;i++){
		if((i*sum(n))<a){
			num[n]=i;
			fun(a,n+1,i);
		}
		else if ((i*sum(n))==a){
			ans++;
			/*
			for(int j=0;j<n;j++){
				cout<<num[j]<<" ";
			}
			cout<<i<<endl;
			*/
			return;
		}
		else{
			return;
		}
	}
}

int main(){
	int n;
	cin>>n;
	while(n--){
		int a;
		cin>>a;
		ans=0;
		fun(a,0,2);
		cout<<ans<<endl;
	}
    return 0;
}
