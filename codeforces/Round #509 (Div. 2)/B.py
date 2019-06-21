#!/usr/bin/env python3
# B. Buying a TV Set
# Codeforces Round #509 (Div. 2)
# https://codeforces.com/contest/1041/problem/B
import math


def main():
    a, b, x, y = map(int, input().rstrip().split())
    # print(a, b, x, y)
    gcd = math.gcd(x, y)
    x = x / gcd
    y = y / gcd
    print(min(int(a/x), int(b/y)))


if __name__ == '__main__':
    main()
