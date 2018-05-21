#!/bin/python3
# -*- coding: utf-8 -*-
'''
leetcode #811 subdomain-visit-count 子域名访问计数
https://leetcode-cn.com/problems/subdomain-visit-count/description/
'''
class Solution:
    def subdomainVisits(self, cpdomains):
        """
        :type cpdomains: List[str]
        :rtype: List[str]
        """
        dict = {}
        for i, v in enumerate(cpdomains):
            arr = v.split(' ')
            count = int(arr[0])
            domain = arr[1]
            subdomain = domain.split('.')
            while subdomain:
                # print(subdomain)
                subdomainStr = '.'.join(subdomain)
                nowc = dict.get(subdomainStr, 0)
                dict[subdomainStr] = nowc + count
                subdomain.pop(0)
        list = []
        for k, v in dict.items():
            # print(k, v)
            list.append('{v} {k}'.format(k=k, v=v))
        return list

# if __name__ == '__main__':
#     s = Solution()
#     cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
#     res = s.subdomainVisits(cpdomains)
#     print(res)
