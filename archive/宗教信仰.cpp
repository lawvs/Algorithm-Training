//���鼯
#include<iostream>
using namespace std;
int f[50001];

//�ҵ�x���ڵļ��ϵı��  
int find(int x)  
{  
    return x == f[x] ? (x) : (f[x] = find(f[x]));  
}  

//������
int main(){
	int count=1;
	int a,b;
	while(true){
		int n,m;
		cin>>n>>m;//��n��ѧ��

		if (n==0){
			return 0;
		}
		for (int i = 1; i <= n; i++)  
		{  
			f[i] = i;//��ʼ����ÿ���˶���һ������  
		}  
		for(int j=0;j<m;j++){//���Ա�ĳ�ʼ��
			cin>>a;
			cin>>b;
			f[find(a)] = find(b);//��a���ڵļ��Ϻ�b���ڵļ��Ϻϲ�  
		}

		//core2 count
		int x=1;
		for(int a=0;a<n;a++)   //���Lb�����в�����0��Ԫ�ظ���
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