using namespace std;

class Solution
{
public:
  double myPow(double x, int n)
  {
    long long lln = n;
    if (n < 0)
    {
      x = 1 / x;
      lln = -lln;
    }

    // quick-pow
    double ans = 1;
    while (lln > 0)
    {
      if (lln & 1) // lln % 2 == 1
        ans *= x;
      x *= x;
      lln >>= 1;
    }

    return ans;
  }
};

int main(int argc, char const *argv[])
{
  Solution s = Solution();
  s.myPow(1.00000, -2147483648);
  return 0;
}
