import { expect, test } from 'vitest'
import { deepMerge } from './deepMerge'

test('shallow merge', () => {
  const merged = deepMerge(
    {
      name: "Antony"
    },
    {
      surname: "Moraes"
    }
  )
  expect(merged).toEqual({
    name: "Antony",
    surname: "Moraes"
  })
})

test('deep merge with overlaps', () => {
  const merged = deepMerge(
    {
      name: 'Anthony',
      accounts: {
        github: 'unknown'
      },
      languages: ['javascript']
    },
    {
      accounts: {
        twitter: 'antfu7'
      },
      languages: ['typescript', 'vuetest5']
    }
  )

  expect(merged).toMatchInlineSnapshot(`
    {
      "accounts": {
        "github": "unknown",
        "twitter": "antfu7",
      },
      "languages": [
        "javascript",
        "typescript",
        "vuetest5",
      ],
      "name": "Anthony",
    }
  `)
})

test('shallow merge with arrays', () => {
  const merged = deepMerge(
    ['a', 'b'],
    ['c', 'd']
  )
  expect(merged).toEqual(['a', 'b', 'c', 'd'])
})

test('throws errors on merging two different types', () => {
  expect(() => deepMerge(
    ['foo', 'bar'],
    { foo: 'bar' }
  )).toThrowError('Can not merge two differnet types')
})
