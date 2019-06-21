#!/usr/bin/env python3
# A. Winner
# https://codeforces.com/problemset/problem/2/A
import sys


def main():
    n = int(sys.stdin.readline().rstrip())
    m = {}
    for i in range(n):
        name, score = sys.stdin.readline().split()
        score = int(score)
        cur = m.get(name, [(0, 0)])
        lastScore = cur[-1][1]
        if lastScore <= 0:
            cur.pop()
        cur.append((i, lastScore + score))
        m[name] = cur
    maxScore = 0
    maxName = []
    for k, v in m.items():
        if v[-1][1] > maxScore:
            maxScore = v[-1][1]
            maxName = [k]
            continue
        if v[-1][1] == maxScore:
            maxName.append(k)
    if len(maxName) == 1:
        print(maxName[0])
        return

    winner = 1e9
    winnerName = 'ERROR!'
    for name in maxName:
        l = m[name]
        for n in l:
            if n[1] >= maxScore:
                if n[0] < winner:
                    winner = n[0]
                    winnerName = name
                break
    print(winnerName)


if __name__ == '__main__':
    main()
