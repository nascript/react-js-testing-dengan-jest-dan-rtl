import { pengurangan, penjumlahan, perkalian } from '../components/matematika'

describe('Basic Testing', () => {
  it('testing pertama ku', () => {
    expect(true).toBe(true)
  })

  it('testing penjumlahan', () => {
    expect(1 + 1).toBe(2)
  })
  it('testing pekalian', () => {
    expect(1 * 1).toBe(1)
  })
  it('testing pembagian', () => {
    expect(5 % 3).toBe(2)
  })
  it('testing pengurangan', () => {
    expect(4 - 1).toBe(3)
  })
})

// Testing Fungsi

test('testing fungsi component matematika', () => {
  expect(penjumlahan(2, 4)).toBe(6)
  expect(pengurangan(20, 3)).toBe(17)
  expect(perkalian(20, 3)).toBe(60)
})
