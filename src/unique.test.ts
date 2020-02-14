import { pipe } from './pipe';
import { range } from './range';
import { unique } from './unique';
import { map } from './map';
import { toArray } from './toArray';

function snap(multitude: number, value: number) {
  return Math.ceil(value / multitude) * multitude;
}

it('should be possible to create a unique stream', () => {
  const program = pipe(
    map((x: number) => snap(5, x)),
    unique(),
    toArray()
  );

  expect(program(range(0, 10))).toEqual([0, 5, 10]);
});
