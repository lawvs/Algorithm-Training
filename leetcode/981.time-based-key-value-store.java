import java.util.Map;

class SegmentTree {
    SegmentTree left;
    SegmentTree right;
    int l;
    int r;
    String value;

    SegmentTree(int l, int r, String v) {
        this.l = l;
        this.r = r;
        this.value = v;
    }

    public String get(int timestamp) {
        if (timestamp >= l && timestamp < r) {
            return value;
        }
        if (timestamp < l) {
            if (left == null) {
                return "";
            }
            return left.get(timestamp);
        }
        if (timestamp >= r) {
            return right.get(timestamp);
        }
        throw new RuntimeException("Unreachable");
    }

    public void update(int timestamp, String value) {
        if (timestamp >= this.l && timestamp < this.r) {
            SegmentTree newTree = new SegmentTree(this.l, 100000000, this.value);
            newTree.left = this.left;
            this.left = newTree;
            this.l = timestamp;
            this.value = value;
            return;
        }
        if (timestamp < this.l) {
            if (this.left == null) {
                this.left = new SegmentTree(timestamp, 100000000, value);
                return;
            }
            this.left.update(timestamp, value);
        }
        if (timestamp > this.r) {
            if (this.right == null) {
                this.right = new SegmentTree(timestamp, 100000000, value);
                return;
            }
            this.right.update(timestamp, value);
        }
    }
}

class TimeMap {
    Map<String, SegmentTree> m;

    /** Initialize your data structure here. */
    public TimeMap() {
        this.m = new HashMap<>();
    }

    public void set(String key, String value, int timestamp) {
        SegmentTree tree = m.get(key);
        if (tree == null) {
            tree = new SegmentTree(timestamp, 100000000, value);
            m.put(key, tree);
            return;
        }
        tree.update(timestamp, value);
    }

    public String get(String key, int timestamp) {
        SegmentTree t = this.m.get(key);
        if (t == null) {
            return "";
        }
        return t.get(timestamp);
    }
}

/**
 * Your TimeMap object will be instantiated and called as such: TimeMap obj =
 * new TimeMap(); obj.set(key,value,timestamp); String param_2 =
 * obj.get(key,timestamp);
 */