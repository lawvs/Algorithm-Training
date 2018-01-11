/*
	Date: 05/02/16 19:50
	Description:在与乌龟的比赛中，
	一旦任一秒结束后兔子发现自己领先t米或以上，
	它们就会停下来休息s秒。
	对于不同的兔子，t，s的数值是不同的，
	但是所有的乌龟不到终点决不停止。
	第一行输出比赛结果一个大写字母“T”或“R”或“D”，
	分别表示乌龟获胜，兔子获胜，
	或者两者同时到达终点。
*/

#include<iostream>
using namespace std;
int main(){
	/*
	兔子的速度v1（表示每秒兔子能跑v1米），
	乌龟的速度v2，
	兔子对应的t，s值，
	领先t米或以上，停下来休息s秒，
	赛道的长度l
	*/
	int v1,v2,t,s,l;
	cin>>v1>>v2>>t>>s>>l;
	//
	int ts=0;//乌龟路程
	int rs=0;//兔子路程
	int nows=0;//兔子等待时间
	int nowt=0;//现在时间
	while(ts<l && rs<l){//均未到达终点
		nowt++;
		if(nows){//兔子休息
			nows--;
		}else{
			rs+=v1;
		}
		ts+=v2;
		//
		if( !nows && (rs-ts)>=t ){//休息时不进行判断
			nows=s;
		}
	}
	//output
	if(ts < rs){
		cout<<"R"<<endl;
	}else if(ts > rs){
		cout<<"T"<<endl;
	}else{
		cout<<"D"<<endl;
	}
	cout<<nowt<<endl;
	return 0;
}

