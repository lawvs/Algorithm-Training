#include<iostream>
#include<iomanip>
#include<algorithm>
using namespace std;

class Point
{
	public:
		double x;
		double y;

};

//排序函数
bool comp(Point p1,Point p2)
{
	if(p1.y > p2.y)
	{
		return 1;
	}
	else if(p1.x < p2.x)
	{
		return 1;
	}
	else
	{
		return 0;
	}
	return 0;
}

int main()
{
	Point p1[4],p2[4];
	cin>>p1[0].x>>p1[0].y>>p1[1].x>>p1[1].y;
	cin>>p2[0].x>>p2[0].y>>p2[1].x>>p2[1].y;

	//初始化
	p1[2].x=p1[0].x;//rectangle1
	p1[2].y=p1[1].y;
	p1[3].x=p1[1].x;
	p1[3].y=p1[0].y;
	sort(p1,p1+4,comp);
	p2[2].x=p2[0].x;//rectangle2
	p2[2].y=p2[1].y;
	p2[3].x=p2[1].x;
	p2[3].y=p2[0].y;
	sort(p2,p2+4,comp);

	/*test output p1
	cout<<p1[0].x<<" "<<p1[0].y<<endl;
	cout<<p1[1].x<<" "<<p1[1].y<<endl;
	cout<<p1[2].x<<" "<<p1[2].y<<endl;
	cout<<p1[3].x<<" "<<p1[3].y<<endl;
	double s1 = (p1[3].x - p1[0].x)*(p1[0].y - p1[3].y);
	cout<<"S1="<<s1<<endl;
	//output p2
	cout<<p2[0].x<<" "<<p2[0].y<<endl;
	cout<<p2[1].x<<" "<<p2[1].y<<endl;
	cout<<p2[2].x<<" "<<p2[2].y<<endl;
	cout<<p2[3].x<<" "<<p2[3].y<<endl;
	double s2 = (p2[3].x - p2[0].x)*(p2[0].y - p2[3].y);
	cout<<"S2="<<s2<<endl;
	//testend*/

	//calc
	Point p3[4];
	p3[0].x = max( p1[0].x,p2[0].x );
	p3[0].y = min( p1[0].y,p2[0].y );
	p3[3].x = min( p1[3].x,p2[3].x );
	p3[3].y = max( p1[3].y,p2[3].y );
	double ans = (p3[3].x - p3[0].x)*(p3[0].y - p3[3].y);
	if(ans<0 || p3[0].x>p3[3].x || p3[0].y<p3[3].y)
	{
		ans = 0;
	}
	//output
	cout<<setiosflags(ios::fixed)<<setprecision(2)<<ans<<endl;
	return 0;
}
