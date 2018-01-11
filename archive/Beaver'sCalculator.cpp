/*http://lx.lanqiao.org/problem.page?gpid=T340
 �㷨ѵ�� Beaver's Calculator  
 ����̰��
 ÿ�����ڵ�ÿ�����ⶼ��һ���� ai, j ��������
 i ��1<=i<=n���ǿ�ѧ�ҵı�ţ�j��1<=j<=ki ��������ı�ţ�
 ai,j ��ʾ����������������Դ��λ��������
 1��n��5000, 1��ki��5000
 */
 # include<iostream>
 # include<vector>
 # include<set>
 using namespace std;

//��ѧ��
class People
{
public:
    int k;  //�������
    long long a;  //��1������������Դ��λ��
    int x;  //ai,j=(ai,j-1*xi+yi)mod mi
    int y;
    int m;
};

//�����������Դ��λ�����ṩ�������Ŀ�ѧ�ҵı��
class Problem
{
public:
    long long memory; //�����������Դ��λ��
    int no; //�ṩ�������Ŀ�ѧ�ҵı��
    Problem(int memory,int no):memory(memory),no(no){}
};

//����<
bool operator < (const Problem &p1,const Problem &p2) {
    return p1.memory < p2.memory;
}

int n;  //��ʾ��ѧ�ҵ�����
People num[5001]; //1~n
int all;  //������ܸ���

//update the scientist  no
//������-1 ������Դaֵ
int update(int i){
    num[i].k--; //������-1
    //ai,j=(ai,j-1*xi+yi)mod mi
    num[i].a=(num[i].a*num[i].x+num[i].y)%num[i].m;
//  cout<<num[i].a<<"*"<<num[i].x<<"+"<<num[i].y<<"%"<<num[i].m;
//  cout<<"="<<num[i].a<<" "<<i+1<<endl;
}

//��ӡvector vȫ��Ԫ��
int printvector(vector<Problem> &v){
    for (vector<Problem>::iterator i = v.begin(); i != v.end(); ++i)
    {
        cout<<(*i).memory<<" ";
        cout<<(*i).no<<endl;
    }
}

//�������
int solve(){
    //���������ܸ���������200000
    bool flag=0;
    if (all<=200000)
    {
        flag=1; //��Ҫ���������������˳��
    }

    int bad=0;  //ans
    multiset<Problem> ms; //��
    //��ʼ��
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
        //���γ���
        Problem p0(nowMemoery,0);
        //����ָ����ڣ�����ڣ�ĳֵ�ĵ�һ��Ԫ�صĵ�����
        multiset<Problem>::iterator it=ms.lower_bound(p0);
        if (it == ms.end())
        {
            it=ms.begin();
            bad++;
        }
        //����memory
        nowMemoery=(*it).memory;
        int no=(*it).no;
        //��¼����˳��
        if (flag) 
        {
            v.push_back(*it);
        }
        ms.erase(it);
        //����û���� ���
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
        all+=num[i].k;  //������ܸ���
    }
    //cout<<"all:"<<all<<endl;
    solve();
    return 0;
 }