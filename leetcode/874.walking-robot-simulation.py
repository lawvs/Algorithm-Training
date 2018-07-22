#!/usr/bin/env python3
'''
leetcode #874 walking-robot-simulation 行走机器人模拟
https://leetcode-cn.com/contest/weekly-contest-94/problems/walking-robot-simulation/
'''
class Solution:
    def robotSim(self, commands, obstacles):
        """
        :type commands: List[int]
        :type obstacles: List[List[int]]
        :rtype: int
        """
        m = dict()
        for ob in obstacles:
            m[(ob[0], ob[1])] = True
        # print(m)
        maxD = 0
        pos = [0, 0]
        direction = 1
        forward = 1
        for cmd in commands:
            maxD = max(maxD, pos[0] ** 2 + pos[1] ** 2)
            if cmd == -1: # right 1 1 -> 0 1 -> 1 -1 -> 0 -1 -> 1 1
                if direction == 0:
                    forward *= -1
                direction ^= 1
                continue
            if cmd == -2: # left
                if direction == 1:
                    forward *= -1
                direction ^= 1
                continue
            while cmd > 0:
                pos[direction] += forward * 1
                if m.get((pos[0], pos[1]), False): # obstacle
                    pos[direction] -= forward * 1
                    break
                cmd -= 1
        # print(pos)
        return max(maxD, pos[0] ** 2 + pos[1] ** 2)

if __name__ == '__main__':
    s = Solution()

    commands = [4,-1,3]
    obstacles = []
    res = s.robotSim(commands, obstacles)
    assert(res == 25)

    commands = [4,-1,4,-2,4]
    obstacles = [[2,4]]
    res = s.robotSim(commands, obstacles)
    assert(res == 65)

    commands = [-1, -1, -1, -1, 1]
    obstacles = [[0,1]]
    res = s.robotSim(commands, obstacles)
    assert(res == 0)

    commands = [-1, 1]
    obstacles = [[1,0]]
    res = s.robotSim(commands, obstacles)
    assert(res == 0)

    commands = [-1, -1, 1]
    obstacles = [[0,-1]]
    res = s.robotSim(commands, obstacles)
    assert(res == 0)

    commands = [-1, -1, -1, 1]
    obstacles = [[-1,0]]
    res = s.robotSim(commands, obstacles)
    assert(res == 0)

    commands = [-2, -2, -2, -2, 1]
    obstacles = [[0,1]]
    res = s.robotSim(commands, obstacles)
    assert(res == 0)

    commands = [-2, 1]
    obstacles = [[-1,0]]
    res = s.robotSim(commands, obstacles)
    assert(res == 0)

    commands = [-2, -2, 1]
    obstacles = [[0,-1]]
    res = s.robotSim(commands, obstacles)
    assert(res == 0)

    commands = [-2, -2, -2, 1]
    obstacles = [[1,0]]
    res = s.robotSim(commands, obstacles)
    assert(res == 0)

    print('All test cases passed.')
