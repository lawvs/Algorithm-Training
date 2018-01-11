//并查集
#include<iostream>
using namespace std;
int f[50001];

//找到x所在的集合的编号  
int find(int x)  
{  
    return x == f[x] ? (x) : (f[x] = find(f[x]));  
}  

//主函数
int main(){
	int count=1;
	int a,b;
	while(true){
		int n,m;
		cin>>n>>m;//有n名学生

		if (n==0){
			return 0;
		}
		for (int i = 1; i <= n; i++)  
		{  
			f[i] = i;//初始化，每个人都是一个集合  
		}  
		for(int j=0;j<m;j++){//线性表的初始化
			cin>>a;
			cin>>b;
			f[find(a)] = find(b);//把a所在的集合和b所在的集合合并  
		}

		//core2 count
		int x=1;
		for(int a=0;a<n;a++)   //输出Lb数组中不等于0的元素个数
		{
			if(find(a) != find(1)){
				x++;
			}
		}
		//core end
		cout<<"Case "<<count++<<": "<<x<<endl;
	}
    return 0;
}