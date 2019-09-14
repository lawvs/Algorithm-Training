#include <vector>
#include <set>
#include <iostream>

using namespace std;

class Solution
{
private:
  set<char> s;

public:
  bool isValidSudoku(vector<vector<char>> &board)
  {
    for (auto &&b : board)
    {
      for (auto &&c : b)
      {
        if (c == '.')
        {
          continue;
        }

        if (s.find(c) != s.end())
        {
          return false;
        }
        s.insert(c);
      }
      s.clear();
    }

    for (size_t i = 0; i < 9; i++)
    {
      for (size_t j = 0; j < 9; j++)
      {
        char c = board[j][i];
        if (c == '.')
        {
          continue;
        }
        if (s.find(c) != s.end())
        {
          return false;
        }
        s.insert(c);
      }
      s.clear();
    }

    for (size_t i = 0; i < 9; i++)
    {
      for (size_t j = 0; j < 9; j++)
      {
        int x = ((j - (j % 3)) / 3) + ((i - (i % 3)) / 3) * 3;
        int y = j % 3 + (i % 3) * 3;
        // cout<< x << " " << y << endl; // DEBUG
        char c = board[x][y];
        if (c == '.')
        {
          continue;
        }
        if (s.find(c) != s.end())
        {
          return false;
        }
        s.insert(c);
      }
      s.clear();
    }

    return true;
  }
};