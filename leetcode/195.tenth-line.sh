#!/bin/bash
# leetcode #195 tenth-line 第十行
# https://leetcode-cn.com/problems/tenth-line/description/

sed -n '10p' file.txt
# awk 'FNR == 10 {print}' file.txt
:
