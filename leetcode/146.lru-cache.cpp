#include <unordered_map>
#include <list>
#include <iostream>

using namespace std;

class LRUCache
{
private:
  unordered_map<int, int> m;
  unordered_map<int, _List_const_iterator<int>> itM;
  list<int> l;
  int size;
  int capacity;

  void to_first(_List_const_iterator<int> it)
  {
    if (it == l.begin())
    {
      return;
    }
    l.splice(l.begin(), l, it, next(it));
  }

public:
  LRUCache(int capacity)
  {
    this->capacity = capacity;
    size = 0;
  }

  int get(int key)
  {
    if (m.find(key) == m.end())
    {
      return -1;
    }

    int v = m[key];
    auto it = itM[key];
    // move to front
    // l.erase(it);
    // l.push_front(key);
    // itM[key] = l.begin();
    to_first(it);

    return v;
  }

  void put(int key, int value)
  {
    if (m.find(key) != m.end())
    {
      // key has present
      // cout << "duplicate key " << key << endl;
      m[key] = value;
      auto it = itM[key];
      to_first(it);
      return;
    }
    if (size < capacity)
    {
      size++;
      m[key] = value;
      l.push_front(key);
      itM[key] = l.begin();
      return;
    }

    int back = l.back();
    l.pop_back();
    m.erase(back);

    m[key] = value;
    l.push_front(key);
    itM[key] = l.begin();
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache* obj = new LRUCache(capacity);
 * int param_1 = obj->get(key);
 * obj->put(key,value);
 */

int main(int argc, char const *argv[])
{
  int capacity = 1;
  int key = 1;
  int value = 1;

  LRUCache *obj = new LRUCache(capacity);
  int param_1 = obj->get(key);
  obj->put(key, value);

  cout << param_1 << endl;
  return 0;
}
