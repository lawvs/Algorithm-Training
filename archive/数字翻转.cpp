//#include<iostream>
#include<stdio.h>
#include<string.h>
//using namespace std;
int main(){
	char ch[501];
	int p=0;
	char c;
	while(c = getchar()){
		if(c==EOF){
			for(;p>0;p--){
				//cout<<ch[p];
				printf("%c",ch[p]);
			}
			return 0;
		}
		if(c==' '){
			for(;p>0;p--){
				//cout<<ch[p];
				printf("%c",ch[p]);
			}
			//cout<<c;
			printf("%c",c);//Êä³ö¿Õ¸ñ
			continue;
		}
		ch[++p]=c;
	}
	return 0;
}
