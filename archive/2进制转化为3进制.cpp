#include<iostream>
using namespace std;

//2进制转换10进制
void fun2to10(unsigned long long &ten,string s){
	unsigned long long count =1;
	for(int i=s.length()-1;i>=0;i--){
		ten+=count*(s[i]-48);
		count*=2;
	}
}

//10进制转换3进制
void fun10to3(string &s,unsigned long long ten){
	s.clear();
	if(ten==0){
		s+='0';
		return;
	}
	while(ten>0){
		s+=ten%3+48;
		ten/=3;
	}
}

int main(){
	int n;
	cin>>n;
	string s;
	unsigned long long ten=0;
	while(n--){
		ten=0;
		s.clear();
		cin>>s;
		fun2to10(ten,s);
		fun10to3(s,ten);
		for(int i=s.length()-1;i>=0;i--){
		cout<<s[i];
	}
		cout<<endl;
	}
	return 0;
}
