/**
 * 并查集
 */
import java.util.Arrays;

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
