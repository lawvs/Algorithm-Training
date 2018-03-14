/*
 * leetcode #2 add-two-numbers 两数相加
 * https://leetcodechina.com/problems/add-two-numbers/description/
 *
 * 创建时间：2018-3-14 12:52:44
 * 通过时间：2018-3-14 14:14:41
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
        ListNode* p = (ListNode *)malloc(sizeof(*p));
        p->next = NULL; // reference binding to misaligned address  for type 'const int', which requires 4 byte alignment
        ListNode* ret = p;
        int flow = 0; // 进位
        for (; l1 && l2; l1 = l1->next, l2 = l2->next) {
            int sum = l1->val + l2->val;

            ListNode *node = (ListNode *)malloc(sizeof(*node));
            node->next = NULL;
            node->val = (sum + flow) % 10;

            flow = (sum + flow) / 10;
            p->next = node;
            p = node;
        }

        while (l1) {
            ListNode *node = (ListNode *)malloc(sizeof(*node));
            node->next = NULL;
            node->val = (l1->val + flow) % 10;
            p->next = node;
            flow = (l1->val + flow) / 10;
            p = node;
            l1 = l1->next;
        }
        while (l2) {
            ListNode *node = (ListNode *)malloc(sizeof(*node));
            node->next = NULL;
            node->val = (l2->val + flow) % 10;
            p->next = node;
            flow = (l2->val + flow) / 10;
            p = node;
            l2 = l2->next;
        }
        // 进位
        if (flow){
            ListNode *node = (ListNode *)malloc(sizeof(*node));
            node->next = NULL;
            node->val = flow;
            p->next = node;
        }

        ret = ret->next;
        return ret;
    }
};
