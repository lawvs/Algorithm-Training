#include <vector>
#include <string>
#include <unordered_map>
#include <iostream>

using namespace std;

class Solution
{
private:
  unordered_map<char, int> map;

public:
  vector<int> findAnagrams(string s, string p)
  {
    auto ls = s.length();
    auto lp = p.length();
    if (ls < lp)
      return vector<int>();

    for (auto &&c : p)
    {
      map[c] = map.count(c) ? map[c] - 1 : -1;
    }

    for (size_t i = 0; i < lp; i++)
    {
      char c = s[i];
      map[c] = map.count(c) ? map[c] + 1 : 1;

      if (map[c] == 0)
        map.erase(c);
    }

    // for (auto &[k, v] : map)
    //   cout << k << " " << v << endl;
    vector<int> ans;

    if (map.size() == 0)
      ans.push_back(0);

    for (auto i = lp; i < ls; i++)
    {
      char ca = s[i];
      char cd = s[i - lp];
      map[ca] = map.count(ca) ? map[ca] + 1 : 1;
      map[cd] = map[cd] - 1;

      if (map[ca] == 0)
        map.erase(ca);
      if (map[cd] == 0)
        map.erase(cd);

      if (map.size() == 0)
        ans.push_back(i - lp + 1);
    }
    return ans;
  }
};

int main(int argc, char const *argv[])
{
  vector<int> ret;
  auto s = Solution();
  // ret = s.findAnagrams("cbaebabacd", "abc");
  s.findAnagrams("abab", "ab");
  // s.findAnagrams("baa", "aa");
  for (auto &&num : ret)
  {
    cout << num << " ";
  }
  cout << endl;

  return 0;
}
