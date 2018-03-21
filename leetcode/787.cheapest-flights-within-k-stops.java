/*
 * leetcode #787 cheapest-flights-within-k-stops
 * https://leetcode-cn.com/problems/cheapest-flights-within-k-stops/description/
 * tag: 图
 *
 * 创建时间：2018-3-21 22:45:00
 * 通过时间：2018-3-22 03:05:45
 */
class Solution {
    private int MAX = 1000000000;
    private int n;
    private int[][] graph;
    private int[][][] cache;

    private void init(int n, int[][] flights, int k) {
        this.n = n;
        this.cache = new int[n][n][k + 1];
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                for (int m = 0; m <= k; ++m) {
                    this.cache[i][j][m] = this.MAX;
                }
            }
        }

        this.graph = new int[n][n];
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                this.graph[i][j] = this.MAX;
            }
        }
        // load graph
        for (int i = 0; i < flights.length; ++i) {
            int[] flight = flights[i];
            this.graph[flight[0]][flight[1]] = flight[2];
        }
    }

    private int minPrice(int[] prices) {
        int min = this.MAX;
        for (int i = 0; i < this.n; ++i) {
            if (prices[i] < min) {
                min = prices[i];
            }
        }
        return min;
    }

    private int findPrice(int src, int dest, int k, int nowPrice) {
        if (src == dest) {
            return nowPrice;
        }
        if (k == 0) {
            return nowPrice + graph[src][dest];
        }
        if (this.cache[src][dest][k] < this.MAX) {
            return nowPrice + this.cache[src][dest][k];
        }
        int[] prices = new int[this.n];
        for (int i = 0; i < this.n; ++i) {
            if (graph[src][i] == this.MAX) {
                prices[i] = this.MAX;
                continue;
            }
            prices[i] = findPrice(i, dest, k - 1, graph[src][i]);
        }
        int minPrice = this.minPrice(prices);
        if (minPrice < this.cache[src][dest][k]) {
            this.cache[src][dest][k] = minPrice;
        }
        return nowPrice + minPrice;
    }

    public int findCheapestPrice(int n, int[][] flights, int src, int dst, int K) {
        if (K < 0) {
            return -1;
        }
        // init
        this.init(n, flights, K);
        int minPrice = this.findPrice(src, dst, K, 0);
        return minPrice < this.MAX ? minPrice : -1;
    }

};
