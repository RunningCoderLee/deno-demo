import { delay } from 'https://deno.land/std/async/delay.ts'
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'

Deno.test('async hello world', async () => {
  const x = 1 + 2

  // await some async task
  await delay(1000)

  assertEquals(x, 3)
})
