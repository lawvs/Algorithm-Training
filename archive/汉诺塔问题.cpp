#include<iostream>
using namespace std;

//��n�����Ӵ�a����b������c��  
void move(int n,char a,char b,char c){
	if(n==1){
		cout<<n<<":"<<a<<"->"<<c<<endl;
		return;
	}
	move(n-1,a,c,b);//���Ƚ�����ģ�n-1�������Ӵ�a�˽���c������b��
	cout<<n<<":"<<a<<"->"<<c<<endl;//Ȼ�󽫱��Ϊn�����Ӵ�a������c��  
	move(n-1,b,a,c);//�������ģ�n-1�������Ӵ�b�˽���a������c��
}

int main(){
	int n;
	char a,b,c;
	cin>>n>>a>>b>>c;
	move(n,a,b,c);
    return 0;
}