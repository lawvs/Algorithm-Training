class AuthenticationManager {
  timeToLive: number
  tokens: Record<string, number> = {}

  constructor(timeToLive: number) {
    this.timeToLive = timeToLive
  }

  generate(tokenId: string, currentTime: number): void {
    // console.log('generate', tokenId, currentTime)
    this.tokens[tokenId] = currentTime + this.timeToLive
  }

  renew(tokenId: string, currentTime: number): void {
    // console.log('renew', tokenId, currentTime)
    if (!this.tokens[tokenId]) {
      return
    }
    if (this.tokens[tokenId] <= currentTime) {
      // expired
      delete this.tokens[tokenId]
      return
    }
    this.tokens[tokenId] = currentTime + this.timeToLive
  }

  countUnexpiredTokens(currentTime: number): number {
    // console.log(this.tokens, currentTime)
    const unexpiredTokens = Object.entries(this.tokens).filter(
      ([tokenId, ttl]) => ttl > currentTime
    )
    this.tokens = Object.fromEntries(unexpiredTokens)
    return unexpiredTokens.length
  }
}

/**
 * Your AuthenticationManager object will be instantiated and called as such:
 * var obj = new AuthenticationManager(timeToLive)
 * obj.generate(tokenId,currentTime)
 * obj.renew(tokenId,currentTime)
 * var param_3 = obj.countUnexpiredTokens(currentTime)
 */
