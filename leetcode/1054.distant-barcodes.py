import heapq
import collections

class Solution:
    def rearrangeBarcodes(self, barcodes: List[int]) -> List[int]:
        counter = collections.Counter(barcodes).most_common()
        heap = [(-1 * cnt, key) for (key, cnt) in counter]
        heapq.heapify(heap)
        
        ret = []
        while len(heap):
            (cnt1, barcode1) = heapq.heappop(heap)
            cnt1 = -1 * cnt1
            if not len(heap):
                # assert(cnt1 == 1, ret)
                # assert(not len(ret) or ret[-1] != barcode1, ret)
                ret.append(barcode1)
                break
            (cnt2, barcode2) = heapq.heappop(heap)
            cnt2 = -1 * cnt2
            # assert(not len(ret) or ret[-1] != barcode1)
            ret.append(barcode1)
            ret.append(barcode2)
            cnt1 > 1 and heapq.heappush(heap, (-1 * (cnt1 - 1), barcode1))
            cnt2 > 1 and heapq.heappush(heap, (-1 * (cnt2 - 1), barcode2))
            # print(heap, ret)
        return ret
