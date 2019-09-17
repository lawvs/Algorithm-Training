#include <algorithm>
#include <vector>

using namespace std;

class Solution
{
public:
  bool canJump(vector<int> &nums)
  {
    auto l = nums.size();
    if (!l)
    {
      return true;
    }
    int to = nums[0];
    int cur = 0;
    while (cur <= to && to <= l - 1)
    {
      to = max(to, cur + nums[cur]);
      cur++;
    }
    return to >= l - 1;
  }
};
