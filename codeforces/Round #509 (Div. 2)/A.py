#!/usr/bin/env python3
# https://codeforces.com/contest/1041/problem/A
# Codeforces Round #509 (Div. 2)
# A. Heist
import sys


def main():
    n = int(sys.stdin.readline().rstrip())
    if n == 0:
        return 0
    a = list(map(int, sys.stdin.readline().rstrip().split()))
    a.sort()
    # print(a)
    print(str(a[-1] - a[0] - n + 1))


if __name__ == '__main__':
    main()
