export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

function assertPositiveSides(...nums: number[]): void {
  if (!nums.every((n) => n > 0)) {
    throw new Error('All lengths must be greater than 0');
  }
}

export class Triangle implements Figure {
  public shape: 'triangle' = 'triangle';

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: 'red' | 'green' | 'blue',
    private a: number,
    private b: number,
    private c: number,
  ) {
    assertPositiveSides(a, b, c);

    const longest = Math.max(a, b, c);
    const sum = a + b + c;

    if (2 * longest >= sum) {
      throw new Error(
        `Sides ${a}, ${b}, ${c} cannot form a triangle (triangle inequality).`,
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: 'circle' = 'circle';

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: 'red' | 'green' | 'blue',
    private radius: number,
  ) {
    assertPositiveSides(radius);
  }

  getArea(): number {
    const area: number = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle' = 'rectangle';

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: 'red' | 'green' | 'blue',
    private width: number,
    private height: number,
  ) {
    assertPositiveSides(width, height);
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const result = `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;

  return result;
}
