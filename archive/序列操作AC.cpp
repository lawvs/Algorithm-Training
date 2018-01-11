#include<iostream>
#include<iomanip>
using namespace std;

template<class T>
class MyArray
{
public:
    MyArray()
    {
        arr = NULL;
        arr_size = -1;
        arr_pos = 0;
    }
    ~MyArray()
    {
        if (arr != NULL)
        {
            for(int i=0; i<arr_size-1; i++)
                cout<<setiosflags(ios::fixed)<<setprecision(2)<<arr[i]<<" ";
            cout<<setiosflags(ios::fixed)<<setprecision(2)<<arr[arr_size-1]<<endl;
            delete []arr;
        }
        arr_size = -1;
        arr_pos = 0;
    }
    void new_arr(int n);
    void push_value(T a);
    void segment_move(int start, int end, int pos);
    void segment_reverse(int start, int end);
private:
    T *arr;
    int arr_size;
    int arr_pos;
};

template<class T>
void MyArray<T>::new_arr(int n)                 //生成一个数组，大小为n
{
    arr = new T[n+10];
    arr_size = n;
}

template<class T>
void MyArray<T>::push_value(T a)
{
    if(arr_pos < arr_size)
        arr[arr_pos++] = a;
}

template<class T>
void MyArray<T>::segment_move(int start, int end, int pos)  // move   //写错了。
{
    if(arr_size > 0 && start<=end && pos>end && pos<arr_size )
    {
        int j=start;
        T arr2[end-start+1];
        for(int i=0; i<=end-start; i++)
            arr2[i] = arr[j++];
        arr[start] = arr[pos];
        int k=0;
        for(int i=start+1; i<=end+1; i++)
            arr[i] = arr2[k++];
    }
}

template<class T>
void MyArray<T>::segment_reverse(int start, int end)   // reverse
{
    if(arr_size > 0 && start<=end && end<arr_size)
    {
        while(start < end)
        {
            T temp = *(arr+start);
            *(arr+start) = *(arr+end);
            *(arr+end) = temp;
            start++;
            end--;
        }
    }
}


int main()
{
    int t, n, m, a, b, c;
    string type;
    char oper;
    cin>>t;
    while(t--)
    {
        cin>>type>>n>>m;

        if(type == "interger")
        {
            MyArray<int> Arr;
            Arr.new_arr(n);
            int d;
            for(int i=0; i<n; i++)
            {
                cin>>d;
                Arr.push_value(d);
            }
            while(m--)
            {
                cin>>oper;
                if(oper == 'r')
                {
                    cin>>a>>b;
                    Arr.segment_reverse(a, b);
                }
                if(oper == 'm')
                {
                    cin>>a>>b>>c;
                    Arr.segment_move(a, b, c);
                }
            }
        }
        else if(type == "double")
        {
            MyArray<double> Arr;
            Arr.new_arr(n);
            double d;
            for(int i=0; i<n; i++)
            {
                cin>>d;
                Arr.push_value(d);
            }
            while(m--)
            {
                cin>>oper;
                if(oper == 'r')
                {
                    cin>>a>>b;
                    Arr.segment_reverse(a, b);
                }
                if(oper == 'm')
                {
                    cin>>a>>b>>c;
                    Arr.segment_move(a, b, c);
                }
            }
        }
        else if(type == "string")
        {
            MyArray<string> Arr;
            Arr.new_arr(n);
            string d;
            for(int i=0; i<n; i++)
            {
                cin>>d;
                Arr.push_value(d);
            }
            while(m--)
            {
                cin>>oper;
                if(oper == 'r')
                {
                    cin>>a>>b;
                    Arr.segment_reverse(a, b);
                }
                if(oper == 'm')
                {
                    cin>>a>>b>>c;
                    Arr.segment_move(a, b, c);
                }
            }
        }

    }
    return 0;
}