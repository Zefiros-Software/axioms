import { parameterTrie } from './param-trie'

// test.skip('static', () => {
//   const index = ['foo', 'bar']
//   const trie: TrieNode<number> = {
//     static: new Map<string, number>([[index.join('/'), 2]]),
//   }

//   // make sure we do not compare object pointers
//   expect(find(trie, [...index])).toEqual(2)
//   expect(find(trie, index)).toEqual(2)
// })

test.skip('insert', () => {
    const trie = parameterTrie<number>()

    trie.insert([{ right: 'foo' }, { right: 'bar' }], 2)
    trie.insert([{ right: 'foo' }, { right: 'bar/' }], 3)
    trie.insert([{ right: 'foo' }, { left: 'bar' }], 4)
    trie.insert([{ right: 'foo' }, { left: 'bar' }, { right: 'bar' }], 5)
    trie.insert([{ left: 'bar' }], 6)
    trie.insert([{ left: 'bar' }, { right: 'foo' }, { right: 'bar' }], 7)

    expect(trie).toMatchInlineSnapshot(`
        Object {
          "children": Map {
            "foo" => Object {
              "children": Map {
                "bar" => Object {
                  "children": Map {},
                  "value": 2,
                },
                "bar/" => Object {
                  "children": Map {},
                  "value": 3,
                },
              },
              "parametrized": Object {
                "children": Map {
                  "bar" => Object {
                    "children": Map {},
                    "value": 5,
                  },
                },
                "parameter": "bar",
                "value": 4,
              },
              "value": Symbol(Axioms.Nothing),
            },
          },
          "parametrized": Object {
            "children": Map {
              "foo" => Object {
                "children": Map {
                  "bar" => Object {
                    "children": Map {},
                    "value": 7,
                  },
                },
                "value": Symbol(Axioms.Nothing),
              },
            },
            "parameter": "bar",
            "value": 6,
          },
          "value": Symbol(Axioms.Nothing),
        }
    `)
})

test('simple', () => {
    const trie = parameterTrie<number>()

    trie.insert([{ right: 'foo' }, { right: 'bar' }], 2)

    expect(trie).toMatchInlineSnapshot(`
        Object {
          "find": [Function],
          "insert": [Function],
          "root": Object {
            "children": Object {
              "foo": Object {
                "children": Object {
                  "bar": Object {
                    "children": Object {},
                    "parameter": Symbol(Axioms.Nothing),
                    "value": 2,
                  },
                },
                "parameter": Symbol(Axioms.Nothing),
                "value": Symbol(Axioms.Nothing),
              },
            },
            "parameter": Symbol(Axioms.Nothing),
            "value": Symbol(Axioms.Nothing),
          },
        }
    `)

    expect(trie.find(['foo', 'bar'])).toEqual([2, []])
})

test('find', () => {
    const trie = parameterTrie<number>()

    trie.insert([{ right: 'foo' }, { right: 'bar' }], 2)
    trie.insert([{ right: 'foo' }, { right: 'bar/' }], 3)
    trie.insert([{ right: 'foo' }, { left: 'bar' }], 4)
    trie.insert([{ right: 'foo' }, { left: 'bar' }, { right: 'bar' }], 5)
    trie.insert([{ left: 'bar' }], 6)
    trie.insert([{ left: 'bar' }, { right: 'foo' }, { right: 'bar' }], 7)

    expect(trie.find(['foo', 'bar'])).toEqual([2, []])
    expect(trie.find(['foo', 'bar/'])).toEqual([3, []])
    expect(trie.find(['foo', 'barparam'])).toEqual([4, [['bar', 'barparam']]])
    expect(trie.find(['foo', 'barparam', 'bar'])).toEqual([5, [['bar', 'barparam']]])
    expect(trie.find(['foobar'])).toEqual([6, [['bar', 'foobar']]])
    expect(trie.find(['foobar', 'foo', 'bar'])).toEqual([7, [['bar', 'foobar']]])
})

test('performance', () => {
    const trie = parameterTrie<number>()

    trie.insert([{ right: 'foo' }, { right: 'bar' }], 2)
    trie.insert([{ right: 'foo' }, { right: 'bar/' }], 3)
    trie.insert([{ right: 'foo' }, { left: 'bar' }], 4)
    trie.insert([{ right: 'foo' }, { left: 'bar' }, { right: 'bar' }], 5)
    trie.insert([{ left: 'bar' }], 6)
    trie.insert([{ left: 'bar' }, { right: 'foo' }, { right: 'bar' }], 7)

    for (let i = 0; i < 100000; ++i) {
        trie.find(['foo', 'bar'])
        trie.find(['foo', 'bar/'])
        trie.find(['foo', 'barparam'])
        trie.find(['foo', 'barparam', 'bar'])
        trie.find(['foobar'])
        trie.find(['foobar', 'foo', 'bar'])
    }
})
