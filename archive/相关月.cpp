/*
描述
“相关月”是指那些在一年中月份的第一天星期数相同的月份。
例如，九月和十二月是相关的，因为九月一日和十二月一日的星期数总是相同的。
两个月份相关，当且仅当两个月份第一天相差的天数能被7整除，也就是说，这两天相差为几个整星期。
又如，二月和三月一般都是相关月，因为二月有28天，能被7整除，也恰好为4个星期。
而在闰年，一月和二月的相关月与它们在平年的相关月是不同的，
因为二月有29天，其后每个月份的第一天星期数都推后了一天。
*/
#include<iostream>
using namespace std;
//判断闰年
bool fun1(int year){
	if((year%4==0 && year%100!=0) || year%400==0){
		return 1;
	}
	return 0;
}

bool fun2(int year ,int m1,int m2){
	if(m1==3 && m2==11){
		return 1;
	}
	if(m1==4 && m2==7){
		return 1;
	}
	if(m1==9 && m2==12){
		return 1;
	}
	if(!fun1(year) && m1==1 && m2==10){
		return 1;
	}
	if(!fun1(year) && m1==2 && (m2==3||m2==11)){
		return 1;
	}
	if(fun1(year) && m1==1 && (m2==4||m2==7)){
		return 1;
	}
	if(fun1(year) && m1==2 && m2==8){
		return 1;
	}
	return 0;
}

int main(){
	int n;
	cin>>n;
	while(n--){
		int year;
		cin>>year;
		int m1,m2;
		cin>>m1>>m2;
		if(m1>m2){
			swap(m1,m2);
		}
		fun2(year,m1,m2)?cout<<"YES"<<endl:cout<<"NO"<<endl;
	}
    return 0;
}
