#!/usr/bin/env python3
# A. Theatre Square
# https://codeforces.com/problemset/problem/1/A
import math
# import sys


def main():
    m, n, a = [int(x) for x in input().split()]  # sys.stdin.readline().split()
    # m, n, a = map(int, input().split())
    ans = math.ceil(m / a) * math.ceil(n / a)
    print(ans)


if __name__ == '__main__':
    main()
