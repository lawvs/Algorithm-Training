#include<iostream>
#include<string>
#include <map>
using namespace std;

int str2int(string str);

int main()
{
	string str;
	while(getline(cin,str) && str.length()>0)
	{
		cout<<str2int(str)<<endl;
	}

	return 0;
}

//英语数字转换
int str2int(string str)
{
	//map
	map<string,int> str2intMap;
	//negative, zero, one, two, three, four,five, six, seven, eight, nine,
	//ten, eleven, twelve, thirteen, fourteen,fifteen, sixteen, seventeen, eighteen, nineteen,
	//twenty, thirty, forty, fifty,sixty, seventy, eighty, ninety,
	//hundred, thousand, million
	str2intMap["negative"] = -1;
	str2intMap["zero"] = 0;
	str2intMap["one"] = 1;
	str2intMap["two"] = 2;
	str2intMap["three"] = 3;
	str2intMap["four"] = 4;
	str2intMap["five"] = 5;
	str2intMap["six"] = 6;
	str2intMap["seven"] = 7;
	str2intMap["eight"] = 8;
	str2intMap["nine"] = 9;

	str2intMap["ten"] = 10;
	str2intMap["eleven"] = 11;
	str2intMap["twelve"] = 12;
	str2intMap["thirteen"] = 13;
	str2intMap["fourteen"] = 14;
	str2intMap["fifteen"] = 15;
	str2intMap["sixteen"] = 16;
	str2intMap["seventeen"] = 17;
	str2intMap["eighteen"] = 18;
	str2intMap["nineteen"] = 19;

	str2intMap["twenty"] = 20;
	str2intMap["thirty"] = 30;
	str2intMap["forty"] = 40;
	str2intMap["fifty"] = 50;
	str2intMap["sixty"] = 60;
	str2intMap["seventy"] = 70;
	str2intMap["eighty"] = 80;
	str2intMap["ninety"] = 90;

	str2intMap["hundred"] = 100;
	str2intMap["thousand"] = 1000;
	str2intMap["million"] = 1000000;

	int num=0;//当前数字
	int tempnum=0;//前一个数字
	int ans=0;//结果
	bool flag=0;//正负
	string key;
	int start=0,end=0;
	while(end<str.length())
	{
		//截取
		key.clear();
		end=str.find(' ',start);
		key=str.substr(start,end-start);
		num=str2intMap[key];
		start=end+1;

		//计算
		if(num==-1) //负数
		{
			flag=1;
			continue;
		}

		if(num==100 || num==1000 || num==1000000)
		{
			if(num == 100)//
			{
				tempnum*=num;
			}
			else//统计ans
			{
				ans+=tempnum*num;
				tempnum=0;
			}
		}
		else//累加temp
		{
			tempnum+=num;
		}
		//test
		//cout<<"num:"<<num<<endl;
		//cout<<"tem:"<<tempnum<<endl;
		//cout<<"ans:"<<ans<<endl;
	}
	ans+=tempnum;//ans结算
	//负数
	if(flag)
	{
		ans*=-1;
	}
	return ans;
}
