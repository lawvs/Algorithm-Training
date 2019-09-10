class Solution
{
public:
  int hammingDistance(int x, int y)
  {
    int cnt = 0;
    while (x || y)
    {
      if ((x & 1) != (y & 1))
        cnt++;
      x = x >> 1;
      y = y >> 1;
    }
    return cnt;
  }
};