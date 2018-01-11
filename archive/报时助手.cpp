/*
	基础练习 报时助手
	Date: 05/02/16 21:19
	Description:给定当前的时间，
	用英文的读法将它读出来。
*/
#include<string>
#include<iostream>
using namespace std;

string map[21];
void init(){
	map[0]="zero";
	map[1]="one";
	map[2]="two";
	map[3]="three";
	map[4]="four";
	map[5]="five";
	map[6]="six";
	map[7]="seven";
	map[8]="eight";
	map[9]="nine";
	map[10]="ten";
	map[11]="eleven";
	map[12]="twelve";
	map[13]="thirteen";
	map[14]="fourteen";
	map[15]="fifteen";
	map[16]="sixteen";
	map[17]="seventeen";
	map[18]="eighteen";
	map[19]="nineteen";
	map[20]="twenty";
}//30读作thirty，40读作forty，50读作fifty

string change(int n){
	if(n<=20){
		return map[n]+" ";
	}
	string str;
	switch(n/10) {
		case 2:{
			str="twenty ";
			break;
		}
		case 3:{
			str="thirty ";
			break;
		}
		case 4:{
			str="forty ";
			break;
		}
		case 5:{
			str="fifty ";
			break;
		}
	}
	if(n%10){
		str+=map[n%10]+" ";
	}
	return str;
}
int main(){
	int h,m;
	cin>>h>>m;
	init();
	string ans;
	if(!m){
		ans=change(h)+"o'clock";
	}else{
		ans=change(h)+change(m);
	}
	cout<<ans<<endl;
	return 0;
}

