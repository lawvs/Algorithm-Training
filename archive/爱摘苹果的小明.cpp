#include<iostream>
using namespace std;
main(){
	int n,h,i,count;
	int apple[10];

	cin>>n;//��������
	while(n--){
		count=0;
		for(i=0;i<10;++i){
			cin>>apple[i];
		}
		cin>>h;//С���߶�
		for(i=0;i<10;++i){
			if(apple[i]<=h+30)++count;
		}
		cout<<count<<endl;
	}
}
