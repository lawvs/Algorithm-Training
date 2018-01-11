#include<stdio.h>
int main(){
	char c;
    getchar();
	getchar();
	while(c=getchar()){
		if(c==EOF){
			return 0;
		}
		else if(c=='\n'){
			printf("\n");
			continue;
		}
		if((c>='a' && c<='y')||(c>='A' && c<='Y'))++c;
		else if(c=='z'|| c=='Z')c-=25;
		printf("%c",c);
	}
	return 0;
}