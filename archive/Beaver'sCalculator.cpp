/*http://lx.lanqiao.org/problem.page?gpid=T340
 算法训练 Beaver's Calculator  
 排序、贪心
 每个教授的每个问题都用一个数 ai, j 来描述，
 i （1<=i<=n）是科学家的编号，j（1<=j<=ki ）是问题的编号，
 ai,j 表示解决这个问题所需资源单位的数量。
 1≤n≤5000, 1≤ki≤5000
 */
 # include<iostream>
 # include<vector>
 # include<set>
 using namespace std;

//科学家
class People
{
public:
    int k;  //问题个数
    long long a;  //第1个问题所需资源单位数
    int x;  //ai,j=(ai,j-1*xi+yi)mod mi
    int y;
    int m;
};

//问题所需的资源单位数和提供这个问题的科学家的编号
class Problem
{
public:
    long long memory; //问题所需的资源单位数
    int no; //提供这个问题的科学家的编号
    Problem(int memory,int no):memory(memory),no(no){}
};

//重载<
bool operator < (const Problem &p1,const Problem &p2) {
    return p1.memory < p2.memory;
}

int n;  //表示科学家的人数
People num[5001]; //1~n
int all;  //问题的总个数

//update the scientist  no
//问题数-1 更新资源a值
int update(int i){
    num[i].k--; //问题数-1
    //ai,j=(ai,j-1*xi+yi)mod mi
    num[i].a=(num[i].a*num[i].x+num[i].y)%num[i].m;
//  cout<<num[i].a<<"*"<<num[i].x<<"+"<<num[i].y<<"%"<<num[i].m;
//  cout<<"="<<num[i].a<<" "<<i+1<<endl;
}

//打印vector v全部元素
int printvector(vector<Problem> &v){
    for (vector<Problem>::iterator i = v.begin(); i != v.end(); ++i)
    {
        cout<<(*i).memory<<" ";
        cout<<(*i).no<<endl;
    }
}

//求解问题
int solve(){
    //如果问题的总个数不超过200000
    bool flag=0;
    if (all<=200000)
    {
        flag=1; //需要输出解决问题的最优顺序
    }

    int bad=0;  //ans
    multiset<Problem> ms; //树
    //初始化
    for (int i = 0; i < n; ++i)
    {
        Problem p(num[i].a,i+1);
        ms.insert(p);
        //update the scientist
        update(i);
    }

    int nowMemoery=0;
    vector<Problem> v;
    while(!ms.empty()){
        //依次出队
        Problem p0(nowMemoery,0);
        //返回指向大于（或等于）某值的第一个元素的迭代器
        multiset<Problem>::iterator it=ms.lower_bound(p0);
        if (it == ms.end())
        {
            it=ms.begin();
            bad++;
        }
        //更新memory
        nowMemoery=(*it).memory;
        int no=(*it).no;
        //记录出队顺序
        if (flag) 
        {
            v.push_back(*it);
        }
        ms.erase(it);
        //问题没问完 入队
        if(num[no-1].k){
            Problem p(num[no-1].a,no);
            ms.insert(p);
            update(no-1);
        }
    }

    //print ans
    cout<<bad<<endl;
    //display vector
    if (flag)
    {
        printvector(v);
    }

    return 0;
}


 int main()
 {
    cin>>n;
    for (int i = 0; i < n; ++i)
    {
        cin>>num[i].k;
        cin>>num[i].a;
        cin>>num[i].x;
        cin>>num[i].y;
        cin>>num[i].m;
        all+=num[i].k;  //问题的总个数
    }
    //cout<<"all:"<<all<<endl;
    solve();
    return 0;
 }