//2015.7.8
#include<iostream>
#include<cstdio>
#include<cmath>
using namespace std;

//�ж�num�Ƿ�����,�Ƿ���1,���򷵻�0
bool prime_number(int num){
	if(num<2){//����
		return 0;
	}
	for(int i=2;i<=sqrt(1.0*num);++i){
				if(num%i==0){//��������
					return 0;
				}
	}
		return 1;
}

int main(){
	int n,num,kim;
	scanf("%d",&n);
	while(n--){

		scanf("%d",&num);
		for(kim=0;;++kim){
			if(prime_number(num-kim)){
				printf("%d %d\n",num-kim,kim);
				break;
			}
			if(prime_number(num+kim)){
				printf("%d %d\n",num+kim,kim);
				break;
			}
		}
	}
	return 0;
}