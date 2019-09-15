#include <vector>

using namespace std;

class Solution
{
public:
  void rotate(vector<vector<int>> &matrix)
  {
    auto l = matrix.size();
    for (size_t i = 0; i < l; i++)
    {
      for (size_t j = i; j < l; j++)
      {
        auto temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }

    for (size_t i = 0; i < l; i++)
    {
      for (size_t j = 0; j < l / 2; j++)
      {
        auto temp = matrix[i][j];
        matrix[i][j] = matrix[i][l - j - 1];
        matrix[i][l - j - 1] = temp;
      }
    }
  }
};