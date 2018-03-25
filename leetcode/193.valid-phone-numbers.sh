#!/bin/bash
# leetcode #193 valid-phone-numbers 有效电话号码
# https://leetcode-cn.com/problems/valid-phone-numbers/description/

cat file.txt | grep "^[[:digit:]]\{3\}-[[:digit:]]\{3\}-[[:digit:]]\{4\}$\|^([[:digit:]]\{3\}) [[:digit:]]\{3\}-[[:digit:]]\{4\}$"
