#include <vector>
#include <algorithm>
#include <iostream>

using namespace std;

class Solution
{
public:
  int findUnsortedSubarray(vector<int> &nums)
  {
    vector<int> unsorted = nums;
    sort(nums.begin(), nums.end());
    int l = nums.size();

    int start = -1;
    int end = 0;
    for (int i = 0; i < l; i++)
    {
      if (unsorted[i] != nums[i])
      {
        end = i;
        if (start == -1)
          start = i;
      }
    }
    if (start == -1)
      return 0;
    return end - start + 1;
  }
};

int main()
{
  Solution s;
  vector<int> nums = {2, 6, 4, 8, 10, 9, 15};
  int ans = s.findUnsortedSubarray(nums);
  cout << ans << endl;
  cout << "Finish!" << endl;
  return 0;
}