/*
 * leetcode #2 add-two-numbers 两数相加
 * https://leetcodechina.com/problems/add-two-numbers/description/
 *
 * 创建时间：2018-3-14 12:52:44
 * 通过时间：2018-3-14 14:14:41
 * 优化时间：2018-3-18 17:54:07
 */

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* p = new ListNode(0);
        ListNode* ret = p;
        int flow = 0; // 进位

        while (l1 || l2 || flow > 0) {
            int sum = (l1 ? l1->val : 0) + (l2 ? l2->val : 0) + flow;
            p = p->next = new ListNode(sum % 10);
            flow = sum / 10;

            l1 = l1 ? l1->next : NULL;
            l2 = l2 ? l2->next : NULL;
        }

        ret = ret->next;
        return ret;
    }
};
