/*
����
������¡���ָ��Щ��һ�����·ݵĵ�һ����������ͬ���·ݡ�
���磬���º�ʮ��������صģ���Ϊ����һ�պ�ʮ����һ�յ�������������ͬ�ġ�
�����·���أ����ҽ��������·ݵ�һ�����������ܱ�7������Ҳ����˵�����������Ϊ���������ڡ�
���磬���º�����һ�㶼������£���Ϊ������28�죬�ܱ�7������Ҳǡ��Ϊ4�����ڡ�
�������꣬һ�ºͶ��µ��������������ƽ���������ǲ�ͬ�ģ�
��Ϊ������29�죬���ÿ���·ݵĵ�һ�����������ƺ���һ�졣
*/
#include<iostream>
using namespace std;
//�ж�����
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
