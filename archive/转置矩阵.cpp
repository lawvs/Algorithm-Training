#include<iostream>
using namespace std;
int main(){
	int n,map[3][3];
	cin>>n;
	while(n--){
		for(int i=0;i<3;++i){
			for(int j=0;j<3;++j){
				cin>>map[j][i];
			}
		}
		for( i=0;i<3;++i){
			for(int j=0;j<3;++j){
				cout<<map[i][j]<<" ";
			}
			cout<<endl;
		}
		cout<<endl;
	}
	return 0;
}