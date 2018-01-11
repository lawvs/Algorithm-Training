#include<iostream>
using namespace std;
int main(){
	bool light[1001]={0};
	int n;
	cin>>n;
	for(int i=2;i<=n;i++){
		for(int j=i;j<=n;j=j+i){
			light[j]=!light[j];
		}
	}
	for(int k=1;k<=n;k++){
		if(light[k]){
			cout<<k<<" ";
		}
	}
	cout<<endl;
    return 0;
}