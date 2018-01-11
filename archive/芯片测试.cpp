/*
	Date: 02/02/16 14:35
	Description:有n（2≤n≤20）块芯片，有好有坏，
	已知好芯片比坏芯片多。
　　每个芯片都能用来测试其他芯片。
	用好芯片测试其他芯片时，
	能正确给出被测试芯片是好还是坏。
	而用坏芯片测试其他芯片时，
	会随机给出好或是坏的测试结果
	（即此结果与被测试芯片实际的好坏无关）。
　　给出所有芯片的测试结果，问哪些芯片是好芯片。
*/

#include<iostream>
#include<cstdlib>
using namespace std;

int n;//芯片数目
int corrnum;//正确芯片数目
int chip[20];//芯片结果
bool check[20][20];//检查矩阵

//初始化
void init(int n){
	corrnum=1;
	for(int i=0;i<n;i++){
		chip[i]=0;
	}
}

//output
void output(){
	for(int i=0;i<n;i++){
		if(chip[i]){
			cout<<i+1<<" ";
		}
	}
	cout<<endl;
}

void find(int now){
	/*test
	cout<<"nowfind:"<<now+1<<endl;
	cout<<"nowcorrnum:"<<corrnum<<endl;
	output();
	//testend*/
	//检查
	for(int i=0;i<now;i++){
		if(check[now][i] != chip[i]){
			//test
			//cout<<"wrong"<<i<<chip[i]<<" ";
			//
			return;
		}
	}
	for(int i=now+1;i<n;i++){
		if(check[now][i]){
			chip[i]=1;
			corrnum++;
			find(i);
			chip[i]=0;
			corrnum--;
		}else{
			chip[i]=0;
		}
	}
	//出口
	if(now>=n-1){
		if(corrnum>n/2){
			output();
			exit(0);
		}
		return;
	}
	
}

int main(){
    //input
    cin>>n;
    for(int i=0;i<n;i++){
    	for(int j=0;j<n;j++){
    		cin>>check[i][j];
		}
	}
	
	init(n);
	//计算
	for(int i=0;i<n;i++){
		chip[i]=1;
		find(i);
		chip[i]=0;
	}
	
	//output();
	return 0;
}

