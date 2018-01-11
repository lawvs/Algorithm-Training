/*�㷨ѵ�� Multithreading
����
http://lx.lanqiao.org/problem.page?gpid=T347
repeat ni times
����yi = y
����y = yi+1
����end repeat
*/
#include<iostream>
#include<algorithm>
using namespace std;

class Num {
	public:
		int v;
		int p;
		int c;
};

bool comp(const Num n1,const Num n2) {
	return n1.v < n2.v;
}

int n;//NΪ��Ҫ��ӷ������ָ���1<=N<=100
int w;//W����ϣ��������� -10^9<=W<=10^9
Num num[105];//1<=n[i]<=1000

//��ӡn��curλ��
int displayn(int cur,int n) {
	for (int i = 0; i < n; ++i) {
		cout<<num[cur].p<<" ";
		cout<<num[cur].p<<" ";
	}
	return 0;
}

//��ȫ��ӡst��ed
int display(int st,int ed) {
	for(int i=st; i<ed; i++) {
		displayn(i,num[i].v);
	}
}
//����������
int solves(){
	cout<<"Yes"<<endl;
	//�洢yֵ
	cout<<num[0].p<<" ";//0�洢y=0
	//ִ��num[1]��������
	for(int i=0;i<num[1].v-1;i++){
		cout<<num[1].p<<" ";
		cout<<num[1].p<<" ";
	}
	//ִ��num[1]֮������������
	display(2,n);
	//yֵ�ָ�
	cout<<num[0].p<<" ";//0��ԭy=1

	cout<<num[1].p<<" ";//1�洢y=1
	//ִ��num[0]��������
	//w-2=num[0].v
	for(int i=0;i<num[0].v-(w-1);i++){
		cout<<num[0].p<<" ";
		cout<<num[0].p<<" ";
	}
	cout<<num[1].p<<" ";//1��ԭy=2
	//������w-2=?
	for(int i=0;i<w-2;i++){
		cout<<num[0].p<<" ";
		cout<<num[0].p<<" ";
	}
	return 0;
}

//���
int solve(int cur,int sum) {
	//����
	if (cur ==0 && num[0].v != w) {
		if(w==1){
			cout<<"No"<<endl;
			return 0;
		}
		solves();
		return 0;
	}
	cout<<"Yes"<<endl;
	//���
	int t=num[0].p;
	//�洢yֵ
	cout<<t<<" ";
	//����ִ��
	displayn(cur,sum-w);
	//ִ��������
	display(cur+1,n);
	//yֵ�ָ�
	cout<<t<<" ";

	//ִ��ʣ�µĲ������
	if(cur != 0) {
		displayn(cur,num[cur].v-(sum-w));
	}
	//˳��ִ������1���
	displayn(0,num[0].v-1);
	//ִ���������
	display(1,cur);

	return 0;
}


int main() {
	cin>>n;
	cin>>w;
	//����n[i]
	for (int i = 0; i < n; ++i) {
		cin>>num[i].v;
		num[i].p=i+1;
	}
	//����
	sort(num,num+n,comp);
	//calc
	//�ж����
	//���� n==1 && num[0] != w ������
	if (n==1 && num[0].v != w || w<=0 ) {
		cout<<"No"<<endl;
		return 0;
	}

	int sum=0;
	for (int i = 0; i < n; ++i) {
		if((sum+=num[i].v) >= w ) { //�н�
			//cout<<i<<" "<<sum<<endl;
			solve(i,sum);//���
			return 0;
		}
	}
	//cout<<sum<<endl;
	//sum<w������
	if (sum<w) {
		cout<<"No"<<endl;
		return 0;
	}

	return 0;
}
