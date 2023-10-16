import { test, expect } from 'vitest'
import { useCycleList } from '../useCycleList'
import HelloWorld from '../dom/HelloWorld.vue'
import { mount } from '@vue/test-utils'

test('useCycleList would cycle correctly', () => {

  const items = ['a', 'b', 'c']
  const {current, next, prev} = useCycleList(items)

  expect(current.value).toBe('a')

  next()
  expect(current.value).toBe('b')

  next()
  expect(current.value).toBe('c')

  next()
  expect(current.value).toBe('a')

  prev()
  expect(current.value).toBe('c')
})

test('component', () => {
  expect(HelloWorld).toBeDefined()

  const wrapper = mount(HelloWorld)

  expect(wrapper.text()).toBe('Hello World!')
})

test('component with props', () => {
  expect(HelloWorld).toBeDefined()

  const wrapper = mount(HelloWorld, {
    props: {
      msg: 'Hello Vitest!'
    }
  })

  expect(wrapper.text()).toBe('Hello Vitest!')
})

// test('expect typeof document is unavailable', () => {
//   expect(typeof document).toBe('undefined')
// })
