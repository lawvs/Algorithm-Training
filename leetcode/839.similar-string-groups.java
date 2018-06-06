/**
 * leetcode #839 similar-string-groups 相似字符串组
 * https://leetcode-cn.com/problems/similar-string-groups/description/
 */
class Solution {
    private boolean isSimilar(String s1, String s2) {
        int diff = 0;
        int l = s1.length();
        for (int i = 0; i < l; ++i) {
            if (s1.charAt(i) != s2.charAt(i)){
                ++diff;
                if (diff > 2) {
                    return false;
                }
            }
        }
        return true; // diff == 2;
    }

    public int numSimilarGroups(String[] A) {
        int n = A.length;
        DisjointSet s = new DisjointSet(n);
        for(int i = 0; i < n; i++) {
            for(int j = i + 1; j < n; j++) {
                if (isSimilar(A[i], A[j])) {
                    s.union(i, j);
                }
            }
        }
        return s.count();
    }
}

/**
 * 并查集
 */
class DisjointSet {
    private int[] parent;
    private int[] rank;

    public DisjointSet(int n) {
        parent = new int[n];
        Arrays.fill(parent, -1);
        rank = new int[n];
        Arrays.fill(rank, 0);
    }

    public int findRoot(int x) {
        return parent[x] < 0 ? x : (parent[x] = findRoot(parent[x]));
    }

    public int union(int x, int y) {
        int rootX = findRoot(x);
        int rootY = findRoot(y);
        if (rootX == rootY) {
            return rootX;
        }

        // rank merge
        if (rank[rootX] < rank[rootY]) {
            int tmp = rootX;
            rootX = rootY;
            rootY = tmp;
        } else if (rank[rootX] == rank[rootY]) {
            ++rank[rootX];
        }
        parent[rootY] = rootX;
        return rootX;
    }

    public boolean isEqual(int x, int y) {
        return findRoot(x) == findRoot(y);
    }

    public int count() {
        int cnt = 0;
        for (int i : parent) {
            if (i < 0) {
                ++cnt;
            }
        }
        return cnt;
    }
}
