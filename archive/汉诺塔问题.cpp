#include<iostream>
using namespace std;

//将n个盘子从a借助b杆移至c杆  
void move(int n,char a,char b,char c){
	if(n==1){
		cout<<n<<":"<<a<<"->"<<c<<endl;
		return;
	}
	move(n-1,a,c,b);//首先将上面的（n-1）个盘子从a杆借助c杆移至b杆
	cout<<n<<":"<<a<<"->"<<c<<endl;//然后将编号为n的盘子从a杆移至c杆  
	move(n-1,b,a,c);//最后将上面的（n-1）个盘子从b杆借助a杆移至c杆
}

int main(){
	int n;
	char a,b,c;
	cin>>n>>a>>b>>c;
	move(n,a,b,c);
    return 0;
}