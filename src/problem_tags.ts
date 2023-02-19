export const Tag = {
    NONE: 0,
    ARRAY: 1,
    LINKED_LIST: 1 << 1,
    STACK_1: 1 << 2,
    QUEUE: 1 << 3,
    DECK: 1 << 4,
    STACK_2: 1 << 5,
    BFS: 1 << 6,
    DFS: 1 << 7,
    RECURSIVE: 1 << 8,
    BACK_TRACKING: 1 << 9,
    SIMULATION: 1 << 10,
    SORT_1: 1 << 11,
    SORT_2: 1 << 12,
    DP: 1 << 13,
    GREEDY: 1 << 14,
    MATH: 1 << 15,
    BINARY_SEARCH: 1 << 16,
    TWO_POINTER: 1 << 17,
    HASH: 1 << 18,
    BST: 1 << 19,
    PRIORITY_QUEUE: 1 << 20,
    GRAPH: 1 << 21,
    TREE: 1 << 22
} as const;


export type Tag = typeof Tag[keyof typeof Tag];