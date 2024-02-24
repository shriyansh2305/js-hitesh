// JS is single-threaded
// Global execution context is always created but its value depends on which platform we are using, in browser-> this: Window, in Node, its {}

// Global EC
// Function EC
// EVAl EC : a property of Global
// 1. JS creates a global execution context
// 2. Then it creates memory phase
// 3. Memory phase : In this phase, the variables are set to undefined, the functions are set to their definitions until the next phase i.e. execution phase
// 4. Now, it creates the execution phase
// 5. Execution Phase: In this phase, the variables are initialized to given values and the functions are called, which creates their own EC (memory and execution phase).
// To see call stacks: browser -> inspect -> source
