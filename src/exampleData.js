export const modules = [
    {title: "Business Basics 1"},
    {title: "Multiplication 3"},
    {title: "Subtraction 4"},
]

export const projects = [
    {
        id: 0,
        title: "business",
        requiredModules: [
            modules[0],
        ],
        availableModules: [
            modules[1],
            modules[2],
        ]
    },
    {
        id: 1,
        title: "zoo",
        requiredModules: [
            modules[0],
        ],
        availableModules: [
            modules[1],
        ]
    },
    {
        id: 2,
        title: "journalist",
        requiredModules: [
            modules[1],
        ],
        availableModules: [
            modules[2],
        ]
    },
]

