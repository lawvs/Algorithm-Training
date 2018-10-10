// #include <bits/stdc++.h>
#include <vector>

#include <iostream>
// #include <assert.h> // DEBUG

using namespace std;

// static int dividend = []() {
//     std::ios::sync_with_stdio(false);
//     cin.tie(NULL);
//     return 0;
// }();

class Solution
{
  public:
    void merge(vector<int> &nums1, int m, vector<int> &nums2, int n)
    {
        int p1 = m - 1;
        int p2 = n - 1;
        int p3 = m + n - 1;
        // assert((unsigned)p3 < nums1.size()); // DEBUG
        while (p1 >= 0 && p2 >= 0)
        {
            if (nums1[p1] > nums2[p2])
            {
                nums1[p3--] = nums1[p1--];
            }
            else
            {
                nums1[p3--] = nums2[p2--];
            }
            // cout << nums1[p3 + 1] << " "; // DEBUG
        }
        // cout << p1 << " " << p2 << " " << p3 << endl; // DEBUG
        while (p2 >= 0)
        {
            nums1[p3--] = nums2[p2--];
        }

        return;
    }
};

// DEBUG
void printVector(vector<int> arr)
{
    for (unsigned i = 0; i < arr.size(); i++)
        cout << arr[i] << " ";
    cout << endl;
}

int main()
{
    Solution s;
    vector<int> nums1 = {1, 2, 3, 0, 0, 0};
    int m = 3;
    vector<int> nums2 = {2, 5, 6};
    int n = 3;
    s.merge(nums1, m, nums2, n);
    printVector(nums1);

    nums1 = {0};
    m = 0;
    nums2 = {1};
    n = 1;
    s.merge(nums1, m, nums2, n);
    printVector(nums1);

    nums1 = {1};
    m = 1;
    nums2 = {0};
    n = 0;
    s.merge(nums1, m, nums2, n);
    printVector(nums1);

    cout << "Finish!" << endl;
    system("PAUSE");
    return 0;
}
