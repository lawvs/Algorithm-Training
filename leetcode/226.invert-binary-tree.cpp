/*
 * leetcode #226 invert-binary-tree 翻转二叉树
 * https://leetcode-cn.com/problems/invert-binary-tree/description/
 *
 * 创建时间：2018-4-5 00:42:55
 * 通过时间：2018-4-5 00:54:00
 */

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        if (root == NULL) {
            return NULL;
        }
        TreeNode* tmp = root->left;
        root->left = root->right;
        root->right = tmp;
        invertTree(root->left);
        invertTree(root->right);
        return root;
    }
};
