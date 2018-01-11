/**
  *检验算法训练 Multithreading的正确性
*/
#include <iostream>
#include <string.h>
using namespace std;
const int N=30;
const int W=10;
class Num
{
public:
	int y=-1;
	int c=0;
};

int main()
{
	string s;
	cin>>s;
	Num num[101];
	int y=0;
	int t;
	while(cin>>t){
		num[t].c++;
		if (num[t].y==-1)
		{
			num[t].y=y;
		}else{
			y=num[t].y+1;
			num[t].y=-1;
		}
	}
	if(y==W){
		cout<<y<<endl;
	}else{
		cout<<"ERROR:"<<y<<endl;
	}
	//output
	for (int i = 1; i <= N; ++i)
	{
		cout<<num[i].c/2<<" ";
	}
	return 0;
}
