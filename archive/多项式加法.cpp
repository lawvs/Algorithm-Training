/*
Date: 02/10/15 16:19
Description:
����������С�
��һ������n,��ʾ�ж�����Ķ���ʽ��Ҫ��͡�(1 < n < 100)
����Ϊ2n��������ÿһ�ж���һ������ʽ�ı��ʽ����ʾn����Ҫ��ӵĶ���ʽ��
ÿ�г���С��300��
���
�������n�У�ÿ��Ϊ1�����ʽ��ӵĽ����
��ÿһ�е��������У�����ʽ��ÿһ���á�[x y]����ʽ���ַ�����ʾ��x�Ǹ����ϵ����y �Ǹ����������Ҫ����ÿһ����ݴӸߵ������У�������������ߵ������������͵��
ϵ��Ϊ����Ҫ�����
*/

#include<iostream>
#include <algorithm>//�㷨ͷ�ļ�
using namespace std;

//����ʽ�ṹ��
struct polynomial {
	int  factor;//ϵ��
	int power;//����
};

//������ ���ݴ�����
bool comp(polynomial poly1,polynomial poly2) {
	return poly1.power>poly2.power;
}

int main() {
	int n;
	cin>>n;
	while(n--) {
		//�������ʽ1
		polynomial poly1[301];
		int tail1=0;
		while(tail1<301) {
			cin>>poly1[tail1].factor>>poly1[tail1].power;
			if(poly1[tail1].power<0) { //����Ϊ����,�������
				break;
			}
			for(int i=0; i<tail1; i++) { //�ж��ݴ��ظ���
				if(poly1[i].power==poly1[tail1].power) {
					poly1[i].factor+=poly1[tail1].factor;
					tail1--;
					break;
				}
			}
			tail1++;
		}
		//�������ʽ2
		polynomial poly2[301];
		int tail2=0;
		while(tail2<301) {
			cin>>poly2[tail2].factor>>poly2[tail2].power;
			if(poly2[tail2].power<0) { //����Ϊ����
				break;
			}
			for(int i=0; i<tail2; i++) { //�ж��ݴ��ظ���
				if(poly2[i].power==poly2[tail2].power) {
					poly2[i].factor+=poly2[tail2].factor;
					tail2--;
					break;
				}
			}
			tail2++;
		}
		//����
		sort(poly1,poly1+tail1,comp);
		sort(poly2,poly2+tail2,comp);

		//�ϲ�
		polynomial poly3[602];
		int head1=0;
		int head2=0;
		int tail3=0;
		while(head1<tail1 && head2<tail2) {
			if(poly1[head1].power>poly2[head2].power) {
				if(poly1[head1].factor==0) { //ɾ��ϵ��Ϊ0��
					head1++;
					continue;
				}
				poly3[tail3].factor=poly1[head1].factor;
				poly3[tail3++].power=poly1[head1++].power;
			} else if(poly1[head1].power<poly2[head2].power) {
				if(poly2[head2].factor==0) { //ɾ��ϵ��Ϊ0��
					head2++;
					continue;
				}
				poly3[tail3].factor=poly2[head2].factor;
				poly3[tail3++].power=poly2[head2++].power;
			} else { //���
				if(poly1[head1].factor+poly2[head2].factor==0) {
					head1++;
					head2++;
					continue;
				}
				poly3[tail3].factor=poly1[head1].factor+poly2[head2++].factor;
				poly3[tail3++].power=poly1[head1++].power;
			}
		}

		//�ϲ�β��
		while(head1<tail1) {
			if(poly1[head1].factor==0) { //ɾ��ϵ��Ϊ0��
				head1++;
				continue;
			}
			poly3[tail3].factor=poly1[head1].factor;
			poly3[tail3++].power=poly1[head1++].power;
		}
		while(head2<tail2) {
			if(poly2[head2].factor==0) { //ɾ��ϵ��Ϊ0��
				head2++;
				continue;
			}
			poly3[tail3].factor=poly2[head2].factor;
			poly3[tail3++].power=poly2[head2++].power;
		}

		//���
		for(int head3=0; head3<tail3; head3++) {
			cout<<"[ "<<poly3[head3].factor<<" "<<poly3[head3].power<<" ] ";
		}
		cout<<endl;
	}
	return 0;
}
