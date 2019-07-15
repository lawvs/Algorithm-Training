#!/usr/bin/env python
import sys
import importlib
from collections import namedtuple


if sys.version < '3':  # python2
    print('python2')
else:
    print('python3')


def timer(fn):
    time = importlib.import_module('time')  # dynamic import

    def wrapper(*args, **kw):
        print('[{}]: Task starting...'.format(fn.__name__))
        START = time.time()
        res = fn(*args, **kw)
        END = time.time()
        print('[{}]: Task total used {}s'.format(
            fn.__name__, round(END - START, 3)))
        return res
    return wrapper


@timer
def main():
    a = [1, 2, 3]
    b = [3, 2, 1]
    l = list(zip(a, b))  # [(1, 3), (2, 2), (3, 1)]
    l.sort(key=lambda x: x[1], reverse=True)  # *IN PLACE*
    l = ['a', 'b', 'A', 'B']
    l = sorted(l, key=lambda x: x.lower())  # ['a', 'A', 'b', 'B']
    l = map(lambda x: ord(x), l)  # [97, 65, 98, 66]

    arr = [[0 for i in range(2)] for j in range(3)]  # [[0, 0], [0, 0], [0, 0]]
    assert(arr == [[0, 0], [0, 0], [0, 0]])
    arr = [[i] * 2 for i in range(1, 4)]  # [[1, 1], [2, 2], [3, 3]]

    obj1 = {'a': 1, 'b': 2}
    obj2 = {'a': 1, 'b': 2}
    assert(obj1 == obj2)  # True

    Node = namedtuple('Node', ['value', 'parent', 'left', 'right'])
    assert(Node)
    Color = namedtuple('Color', 'r g b')
    red = Color(255, 0, 0)
    assert(red.r == 255)
    true = True if True else False
    assert(true == True)


if __name__ == '__main__':
    main()
