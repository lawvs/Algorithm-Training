#include <cmath>
#include <vector>
#include <unordered_map>

using namespace std;

struct pair_hash
{
  template <class T1, class T2>
  std::size_t operator()(const std::pair<T1, T2> &x) const
  {
    return std::hash<T1>()(x.first) ^ std::hash<T2>()(x.second);
  }
};

unordered_map<pair<int, int>, int, pair_hash> m;
vector<int> v;

class Solution
{
public:
  int findTargetSumWays(vector<int> &nums, int S)
  {
    if (S > 20000 || S < -20000)
    {
      return 0;
    }

    v = nums;
    m.clear();
    return search(make_pair(0, S));
  }

private:
  int search(pair<int, int> p)
  {
    int start = p.first;
    int S = p.second;
    int l = v.size() - start;
    if (l == 0)
    {
      if (S == 0)
        return 1;
      return 0;
    }
    if (l == 1)
    {
      if (v[start] == 0 && S == 0)
        return 2;
      if (v[start] == abs(S))
        return 1;
      return 0;
    }

    int r1;
    int r2;

    pair k1 = make_pair(start + 1, S + v[start]);
    pair k2 = make_pair(start + 1, S - v[start]);

    if (m.find(k1) != m.end())
    {
      r1 = m[k1];
    }
    else
    {
      r1 = search(k1);
      m[k1] = r1;
    }

    if (m.find(k2) != m.end())
    {
      r2 = m[k2];
    }
    else
    {
      r2 = search(k2);
      m[k2] = r2;
    }

    return r1 + r2;
  }
};
