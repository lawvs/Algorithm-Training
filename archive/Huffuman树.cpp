/*
	������ϰ Huffuman��
	Date: 09/02/16 21:49
	Description:����һ����{pi}={p0, p1, ��, pn-1}��
	������������Huffman���Ĺ������£�
����1. �ҵ�{pi}����С������������Ϊpa��pb��
	��pa��pb��{pi}��ɾ������
	Ȼ�����ǵĺͼ��뵽{pi}�С�
	������̵ķ��ü�Ϊpa + pb��
����2. �ظ�����1��ֱ��{pi}��ֻʣ��һ������
����������Ĳ��������У������еķ�����ӣ�
	�͵õ��˹���Huffman�����ܷ��á�
�����������񣺶��ڸ�����һ�����У�
	������������ø����й���Huffman�����ܷ��á�
*/

#include<iostream>
#include<set>
#include<algorithm>
using namespace std;

int main(){
	int n;
	cin>>n;
	
	multiset<int> s;
	int value;
	for(int i=0;i<n;i++){
		cin>>value;
		s.insert(value);
	}
	//
	int ans=0;
	set<int>::iterator it;
	while( s.size()>1 ){
		int tem=0;
		it=s.begin();
		tem+=*it;
		s.erase( it );
		
		it=s.begin();
		tem+=*it;
		s.erase( it );
		
		s.insert(tem);
		ans+=tem;
	}
	
	cout<<ans<<endl;
	return 0;
}

