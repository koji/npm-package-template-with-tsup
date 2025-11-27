import { sub } from '../src/sub'
import { describe, it, expect } from 'vitest'

describe('sub', () => {
  it('should subtract two numbers', () => {
    expect(sub(2, 1)).toBe(1)
  })
})
