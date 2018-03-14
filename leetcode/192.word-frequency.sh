#!/bin/bash
# leetcode #192 word-frequency 两数之和
# https://leetcodechina.com/problems/word-frequency/description/

# Read from the file words.txt and output the word frequency list to stdout.
cat words.txt | sed 's/\s/\n/g' | egrep -v '^$' | sort | uniq -c | sort -n -r | awk '{print $2" "$1}'
