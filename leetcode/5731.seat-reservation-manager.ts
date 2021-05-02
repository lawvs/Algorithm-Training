class SeatManager {
  seat: boolean[]
  constructor(n: number) {
    this.seat = Array(n + 1).fill(true)
    this.seat[0] = false
  }

  reserve(): number {
    for (let i = 0; i < this.seat.length; i++) {
      if (this.seat[i] === true) {
        this.seat[i] = false
        return i
      }
    }
  }

  unreserve(seatNumber: number): void {
    this.seat[seatNumber] = true
  }
}

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */
