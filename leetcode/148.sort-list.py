# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    '''merge sort
    '''

    def sortList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if not head or not head.next:
            return head
        l1, l2 = self.split(head)
        return self.mergeSortedLists(self.sortList(l1), self.sortList(l2))

    def split(self, head):
        fast = head
        slow = head
        prev = None
        while fast and fast.next:
            fast = fast.next.next
            prev = slow
            slow = slow.next
        prev.next = None
        return head, slow

    def mergeSortedLists(self, l1, l2):
        if not l1:
            return l2
        if not l2:
            return l1
        head = ListNode(-1)
        p = head
        while l1 and l2:
            if l1.val < l2.val:
                p.next = l1
                l1 = l1.next
            else:
                p.next = l2
                l2 = l2.next
            p = p.next
        if l1:
            p.next = l1
        if l2:
            p.next = l2
        return head.next


def main():
    l = [5, 4, 3, 2, 1, 0]
    head = ListNode(0)
    p = head
    for val in l:
        p.next = ListNode(val)
        p = p.next
    head = head.next
    s = Solution()
    ret = s.sortList(head)
    l = []
    while ret:
        l.append(ret.val)
        ret = ret.next
    print(l)


if __name__ == '__main__':
    main()
