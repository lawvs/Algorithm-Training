/*
输入
第1行：2个正整数L,N (1 ≤ L ≤ 2,000，1 ≤ N ≤ 2,000)
第2行：N个整数，第i个数表示编号为i的能量球落点坐标k[i] (0 ≤ k[i] ≤ L)
第3行：N个整数，第i个数表示编号为i的能量球的能量值f[i] (1 ≤ f[i] ≤ 10,000)
输出
第1行：1个整数，表示最小总伤害对应的坐标，
如果有多个坐标取得最小值，输出最小的一个坐标。
第2行：1个整数，表示受到的最小总伤害的值
*/
#include<iostream>
using namespace std;

//输出最小总伤害对应的坐标和受到的最小总伤害的值
void out(int harmmap[],int l){
	int p=0,minharm=harmmap[0];
	for(int i=1;i<l+1;++i){
		if(harmmap[i]<minharm){
			minharm=harmmap[i];
			p=i;
		}
	}
	cout<<p<<endl;//输出坐标
	cout<<minharm;//输出最小伤害
}

int main(){
	int l,n,location[2001],harmmap[2001]={0},j;
	cin>>l>>n;
	for(j=0;j<n;++j){//数据读取
		cin>>location[j];//输入伤害坐标
	}
	
	//伤害模拟
	for(j=0;j<n;++j ){
		int harm,harm2,i;//harm,harm2伤害临时存放
		cin>>harm2;//输入伤害
		harm=harm2;
		harmmap[ location[j] ]+=harm;//伤害原点总伤害计算
		for(i=1;--harm && location[j]-i>=0;++i ){//伤害向下递减  伤害为0 越下界 跳出
			harmmap[ location[j]-i ]+=harm;
		}
		harm=harm2;//伤害值初始化
		for(i=1;--harm && location[j]+i< l+1 ;++i ){//伤害向上递减 伤害为0 越上界 跳出
			harmmap[ location[j]+i ]+=harm;
		}
	}
	out(harmmap,l);//输出
    return 0;
}