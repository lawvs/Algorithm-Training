#include<iostream>
#include<set>
using namespace std;
int main(){
	int t;
	cin>>t;
	while(t--){
		multiset<int> s;
		int n;
		cin>>n;
		while(n--){
			int type;
			cin>>type;
			if(type==1){
				int u;
				cin>>u;
				s.insert(u);
			}
			else if(type==2){
				multiset<int>::iterator it;
				it=s.begin();
				cout<<*it<<endl;
				s.erase(it);
			}
		}
	}
    return 0;
}