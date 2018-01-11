/*
	基础练习 回形取数
	Date: 05/02/16 20:34
	Description:回形取数就是是沿矩阵的边取数，
	若当前方向上无数可取或已经取过，则左转90度。
	一开始位于矩阵左上角，方向向下。
*/

#include<iostream>
using namespace std;
int main(){
    int m,n;
    cin>>m>>n;
    int num[m][n];
    bool flag[m][n];
    for(int i=0;i<m;i++){
    	for(int j=0;j<n;j++){
    		cin>>num[i][j];
    		flag[i][j]=0;
		}
	}
	/*test
	for(int i=0;i<m;i++){
    	for(int j=0;j<n;j++){
    		cout<<num[i][j]<<" ";
		}
		cout<<endl;
	}
	//*/
	int i=0,j=0;
	for(int count=0;count<(m*n);){
		//向下
		for(;i<m && !flag[i][j];i++) {
			flag[i][j]=1;
			count++;
			cout<<num[i][j]<<" ";
		}
		i--;
		//向右
		j++;
		for(;j<n && !flag[i][j];j++) {
			flag[i][j]=1;
			count++;
			cout<<num[i][j]<<" ";
		}
		j--;
		//向上
		i--;
		for(;i>=0 && !flag[i][j];i--) {
			flag[i][j]=1;
			count++;
			cout<<num[i][j]<<" ";
		}
		i++;
		//向左
		j--;
		//cout<<"\n"<<i<<" "<<j<<endl;
		for(;j>=0 && !flag[i][j];j--) {
			flag[i][j]=1;
			count++;
			cout<<num[i][j]<<" ";
		}
		j++;
		i++;
	}
	return 0;
}

