#include<iostream>//���������ͷ�ļ� 
#include<vector>//����ͷ�ļ�
#include<algorithm>//�㷨ͷ�ļ�
#include<string>//�ַ���ͷ�ļ�
#include<iomanip>
using namespace std;//��׼���ռ�
//��ģ�� 
template<typename T>
class Array{
	public:
		Array<T>(int n);//���캯��
		void operation(int m);//��������
		void display();//��ʾ����
		void segment_move(int start, int end, int pos);//�ƶ�����
	private:
		vector<T> array;
};
//���캯��ʵ��
template<typename T>
Array<T>::Array(int n){
	for(int i=0;i<n;++i) {//��ȡ����
		T temp;
		cin>>temp;
		array.push_back(temp);
	}
}
//��������ʵ��
template<typename T>
void Array<T>::operation(int m){
	for(int a=0;a<m;++a){
		char oprator;
		cin>>oprator;
		int start,end;
		cin>>start>>end;
		if(oprator=='r'){//��ת ������[i, j ]֮���Ԫ�ط�ת
			reverse(array.begin()+start,array.begin()+end+1); 
		}
		else if(oprator=='m'){//�ƶ�
			int pos;
			cin>>pos;
			segment_move(start,end,pos);
		}
		else return;
	}
	return;
}
//�ƶ�����ʵ�� ������[i, j]֮��Ԫ���ƶ���k�ĺ���
template<typename T>
void Array<T>::segment_move(int start, int end, int pos){
	typename vector<T>::iterator it=array.begin()+start;//����ǰ�������it
	typename vector<T>::iterator it2=array.begin()+end+1;//����ǰ�������it2
	vector<T> temp;//��ʱ������i��j
	for (it=array.begin()+start;it<=array.begin()+end;++it){
		temp.push_back(*it);
	}
	if(pos>=end){//������
		for (it=array.begin()+start,it2=array.begin()+end+1;it2<=array.begin()+pos;++it,++it2){
			*it=*it2;
		}
		for (it2=temp.begin();it2!=temp.end();++it,++it2){
			*it=*it2;
		}
	}
	else if (pos<=start){//��ǰ����
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
//��ʾ����ʵ��
template<typename T> 
void Array<T>::display(){
	typename vector<T>::iterator it;//����ǰ�������
	for(it=array.begin();it != array.end();++it) {//��ʾ����
		cout<<setiosflags(ios::fixed)<<setprecision(2)<<*it;
		if(it != array.end()-1){
			cout<<" ";//���һ��Ԫ�غ��治Ҫ����ո�
		}
	}
	cout<<endl;
	return;
}
//������
int main(){	
	int t;
	cin>>t;//��������
	while(t--){ 
		string type;
		int n,m;//��������type ��������n ������m
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
