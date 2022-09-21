import { pengurangan, penjumlahan, perkalian } from '../components/matematika'

test('testing pertama ku', () => {
  expect(true).toBe(true)
})

test('testing penjumlahan', () => {
  expect(1 + 1).toBe(2)
})
test('testing pekalian', () => {
  expect(1 * 1).toBe(1)
})
test('testing pembagian', () => {
  expect(5 % 3).toBe(2)
})
test('testing pengurangan', () => {
  expect(4 - 1).toBe(3)
})

// Testing Fungsi

test('testing fungsi component matematika', () => {
  expect(penjumlahan(2, 4)).toBe(6)
  expect(pengurangan(20, 3)).toBe(17)
  expect(perkalian(20, 3)).toBe(60)
})
