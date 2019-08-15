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
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        auto pf = head; // ListNode*
        auto ps = head;
        for (int i = 0; i <= n; i++) {
            if (pf == NULL) return head->next;
            pf = pf->next;
        }

        while(pf != NULL) {
            pf = pf->next;
            ps = ps->next;
        }
        // cout << ps->val;
        ps->next = ps->next->next;
        return head;
    }
};

