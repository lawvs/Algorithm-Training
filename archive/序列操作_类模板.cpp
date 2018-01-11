#include<iostream>//输入输出流头文件 
#include<vector>//向量头文件
#include<algorithm>//算法头文件
#include<string>//字符串头文件
#include<iomanip>
using namespace std;//标准名空间
//类模板 
template<typename T>
class Array{
	public:
		Array<T>(int n);//构造函数
		void operation(int m);//操作函数
		void display();//显示函数
		void segment_move(int start, int end, int pos);//移动函数
	private:
		vector<T> array;
};
//构造函数实现
template<typename T>
Array<T>::Array(int n){
	for(int i=0;i<n;++i) {//读取数据
		T temp;
		cin>>temp;
		array.push_back(temp);
	}
}
//操作函数实现
template<typename T>
void Array<T>::operation(int m){
	for(int a=0;a<m;++a){
		char oprator;
		cin>>oprator;
		int start,end;
		cin>>start>>end;
		if(oprator=='r'){//反转 将区间[i, j ]之间的元素反转
			reverse(array.begin()+start,array.begin()+end+1); 
		}
		else if(oprator=='m'){//移动
			int pos;
			cin>>pos;
			segment_move(start,end,pos);
		}
		else return;
	}
	return;
}
//移动函数实现 将区间[i, j]之间元素移动到k的后面
template<typename T>
void Array<T>::segment_move(int start, int end, int pos){
	typename vector<T>::iterator it=array.begin()+start;//定义前向迭代器it
	typename vector<T>::iterator it2=array.begin()+end+1;//定义前向迭代器it2
	vector<T> temp;//临时数组存放i，j
	for (it=array.begin()+start;it<=array.begin()+end;++it){
		temp.push_back(*it);
	}
	if(pos>=end){//向后插入
		for (it=array.begin()+start,it2=array.begin()+end+1;it2<=array.begin()+pos;++it,++it2){
			*it=*it2;
		}
		for (it2=temp.begin();it2!=temp.end();++it,++it2){
			*it=*it2;
		}
	}
	else if (pos<=start){//向前插入
		it=array.begin()+start-1;
		it2=array.begin()+end;
		for(;it>=array.begin()+pos;it--,it2--){
			*it2=*it;
		}
		it=array.begin()+pos+1;
		for (it2=temp.begin();it2!=temp.end();it++,it2++){
			*it=*it2;
		}
	}
	else return;  
}
//显示函数实现
template<typename T> 
void Array<T>::display(){
	typename vector<T>::iterator it;//定义前向迭代器
	for(it=array.begin();it != array.end();++it) {//显示数据
		cout<<setiosflags(ios::fixed)<<setprecision(2)<<*it;
		if(it != array.end()-1){
			cout<<" ";//最后一个元素后面不要输出空格
		}
	}
	cout<<endl;
	return;
}
//主函数
int main(){	
	int t;
	cin>>t;//数据组数
	while(t--){ 
		string type;
		int n,m;//数据类型type 数据数量n 操作数m
		cin>>type>>n>>m;
		if(type[0] == 'i'){
			Array<int> arr(n);
			arr.operation(m);
			arr.display();
		}
		else if(type[0] == 'd'){
			Array<double> arr(n);
			arr.operation(m);
			arr.display();
		}
		else if(type[0] == 's'){
			Array<string> arr(n);
			arr.operation(m);
			arr.display();
		}
		else return 0;
	}
	return 0;
}
