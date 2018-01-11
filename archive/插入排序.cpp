/*
	Date: 02/10/15 16:45
	Description:
	采用插入排序对数据进行从小到大排序
*/

#include<iostream>
using namespace std;
int main() {
	int n;
	cin>>n;
	int num[30001];
	int tem;
	int tail=0;
	for(int i=0; i<n; i++) {
		bool flag=1;
		cin>>tem;
		for(int j=0; j<tail; j++) {
			if(num[j]>tem) {
				for(int k=tail; k>j; k--) {
					num[k]=num[k-1];
				}
				num[j]=tem;
				tail++;
				flag=0;
				break;
			}
		}
		if(flag){num[i]=tem;
		tail++;
		}
		
	}
	for(int i=0; i<n; i++) {
		cout<<num[i]<<" ";
	}
	cout<<endl;
	return 0;
}
