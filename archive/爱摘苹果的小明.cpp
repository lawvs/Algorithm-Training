#include<iostream>
using namespace std;
main(){
	int n,h,i,count;
	int apple[10];

	cin>>n;//数据组数
	while(n--){
		count=0;
		for(i=0;i<10;++i){
			cin>>apple[i];
		}
		cin>>h;//小明高度
		for(i=0;i<10;++i){
			if(apple[i]<=h+30)++count;
		}
		cout<<count<<endl;
	}
}
