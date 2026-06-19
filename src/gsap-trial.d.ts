declare module "gsap-trial/SplitText" {
  export class SplitText {
    constructor(target: any, vars?: any);
    chars: HTMLElement[];
    lines: HTMLElement[];
    words: HTMLElement[];
    revert(): void;
  }
}

declare module "gsap-trial/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars: any): ScrollSmoother;
    static get(): ScrollSmoother;
    static refresh(vars?: any): any;
    scrollTop(value?: number): number;
    paused(value?: boolean): boolean;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
    kill(): void;
  }
}
