class Solution:
    def isRobotBounded(self, instructions: str) -> bool:
        x, y = 0, 0
        directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
        dire = 0
        instructions += instructions
        instructions += instructions
        for ins in instructions:
          if ins == 'G':
            x += directions[dire % 4][0]
            y += directions[dire % 4][1]
            continue
          if ins == 'L':
            dire -= 1
            continue
          if ins == 'R':
            dire += 1
            continue
        if x == 0 and y == 0:
          return True
        return False