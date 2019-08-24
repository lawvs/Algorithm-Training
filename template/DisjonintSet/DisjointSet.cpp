#include <bits/stdc++.h>

/**
 * 并查集
 */
class DisjointSet {

private:
    // int parent[MAX];
    int *parent;
    int *rank;
    int len; // len = sizeof(parent) / sizeof(parent[0]);

    // #define MAX 10000
    // struct Node {
    //     int data;
    //     int rank;
    //     int parent;
    // }node[MAX];

public:
    DisjointSet(int n) {
        parent = new int[n];
        rank = new int[n];
        len = n;
        memset(parent, -1, sizeof(int) * n);
        memset(rank, 0, sizeof(int) * n);
    }

    ~DisjointSet() {
        delete[] parent;
        parent = NULL;
        delete[] rank;
        rank = NULL;
        len = 0;
    }

    int findRoot(int n) {
        return parent[n] < 0 ? n : parent[n] = findRoot(parent[n]); // path compression
    }

    int link(int n1, int n2) {
        int root1 = findRoot(n1);
        int root2 = findRoot(n2);
        if (root1 == root2) {
            return root1;
        }
        // rank merge
        if (rank[root1] < rank[root2]) {
            int tmp = root1;
            root1 = root2;
            root2 = tmp;
        } else if (rank[root1] == rank[root2]) {
            ++rank[root1];
        }
        // end rank merge
        // cout << rank[root1] << endl;
        parent[root2] = root1; // union

        return root1;
    }

    bool isEqual(int n1, int n2) {
        return findRoot(n1) == findRoot(n2);
    }

    int count() {
        int cnt = 0;
        for(int i = 0; i < len; ++i) {
            if (parent[i] < 0) {
                ++cnt;
            }
        }
        return cnt;
    }
};
