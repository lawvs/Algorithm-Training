/*
	基础练习 Huffuman树
	Date: 09/02/16 21:49
	Description:给出一列数{pi}={p0, p1, …, pn-1}，
	用这列数构造Huffman树的过程如下：
　　1. 找到{pi}中最小的两个数，设为pa和pb，
	将pa和pb从{pi}中删除掉，
	然后将它们的和加入到{pi}中。
	这个过程的费用记为pa + pb。
　　2. 重复步骤1，直到{pi}中只剩下一个数。
　　在上面的操作过程中，把所有的费用相加，
	就得到了构造Huffman树的总费用。
　　本题任务：对于给定的一个数列，
	现在请你求出用该数列构造Huffman树的总费用。
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

