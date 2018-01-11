/*
	算法训练 字串统计
	Date: 09/03/16 17:49
	Description:给定一个长度为n的字符串S，
	还有一个数字L，
	统计长度大于等于L的出现次数最多的子串
	（不同的出现可以相交），如果有多个，输出最长的，
	如果仍然有多个，输出第一次出现最早的。
*/

#include<string.h>
#include<iostream>
using namespace std;

//从index开始找出sub在str中出现的次数
int findstr(const string &str,const string &sub,int index){
	int n=1;
	for(int i=index;i<str.length()-sub.length();i++){
		int pos=str.find(sub,i);
		if( pos != -1){
			n++;
			i=pos;
		}
	}
	return n;
}

int main() {
	short int l;
	cin>>l;
	string str;
	cin>>str;
	
	string maxstr;
	int max=0;
	int maxl=l;
	//枚举所有子串
	for(int i=l;i<=str.length();i++) {//字串长度
		for(int j=i; j<=str.length();j++) {//字串开始
			string s(str,j-i,i);
			//s=str.substr(j-i,i);
			int count=findstr(str,s,j-i);
			//testout
			//cout<<s<<" "<<count<<endl;
			if(count>max ||(count==max && s.length()>maxl)){
				max=count;
				maxstr=s;
				maxl=s.length();
			}
		}
	}
	cout<<maxstr<<endl;
	return 0;
}

