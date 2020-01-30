export const modules = [
    {
        title: "Business Basics 1",
        objectives: [
            "Student understands the terms Costs and Revenue and can provide examples",
            "Student understands that Profit = Revenue - Costs",
        ],
        instructions:"..."
    },
    {
        title: "Multiplication 3",
        objectives: [
            "Multiplication 3, objective 1",
            "Multiplication 3, objective 2",
        ],
        instructions:"..."
    },
    {
        title: "Subtraction 3: Two-Digit Numbers",
        objectives: [
            "Subtraction 3, objective",
        ],
        instructions:"..."
    },
    {
        title: "Subtraction 4: Negative Numbers",
        objectives: [
            "Subtraction 4, objective",
        ],
        instructions:"..."
    },
    {
        title: "Persuasive Writing 1",
        objectives: [
            "Persuasive Writing 1, objective",
        ],
        instructions:"..."
    },
    {
        title: "Design 2: Basic Illustrations",
        objectives: [
            "Design 2, objective",
        ],
        instructions:"..."
    },
    {
        title: "Animals: Habitats and Diets",
        objectives: [
            "Design 2, objective",
        ],
        instructions:"..."
    },
    {
        title: "Fractions 1",
        objectives: [
            "Fractions 1, objective",
        ],
        instructions:"..."
    },
]

export const projects = [
    {
        id: 0,
        title: "Business Plan: Physical Store 1",
        contentModules: [
            modules[0],
            modules[1],
            modules[2],
            modules[3],
            modules[4],
            modules[5],
        ],
        challenge: "Design and develop a business plan for a store that sells physical goods, and pitch it to your peers on Primer",
        objectives:[
            "Student takes inititive, coming up with own idea for a product to sell",
            "Student is organized, and comes up with a cohesive business plan",
        ],
        supplies: "Paper, Colored Pencils",
        prepare: "Take time to talk over the objectives with your student, and ensure you have the needed supplies.",
        parts:[
            {
                title: "Idea and Vision",
                steps: [
                    {
                        instructions: "Have your student come up with an idea for a store they could run that sells physical goods. It’s okay to give some suggestions of standard stores if they need help coming up with ideas.",
                    
                    },
                    {
                        instructions: "(Optional) Walk or Drive around town to look at different stores and help your student come up with ideas for their business plan",
                    },
                    {
                        instructions: "Have your student come up with a vision statement for the business. You can ask them: What makes your business different from other ones? What is the mission of your business?",
                    },
                    {
                        instructions: "Take a photo of your student’s written business idea and vision, or include the text of it here.",
                        artifact: "photo",
                    },
                ],
            },
            {
                title: "Business Numbers",
                steps: [
                    {
                        instructions: "Tell your student that the next step is to plan the money side of their business, how much supplies will cost them, how much they will sell them for, etc. But, before they do that, they need to complete a content module:",
                        contentModule: modules[0],
                    },
                    {
                        instructions: "Have your student list 5x items they’ll need for the store, the number of each, and cost of each. You can either estimate costs or do research.",
                    },
                    {
                        instructions: "Tell your student the next step is to perform multiplication and addition on their items and costs to get a total cost for their supplies, but first they should complete this learning module:",
                        contentModule: modules[1],
                    },
                    {
                        instructions: "Calculate the total costs of the business.",
                    },
                    {
                        instructions: "Have your student estimate the revenue they will make in the first year, based on the number of products they will sell and the price of each",
                    },
                    {
                        instructions: "Have your student calculate the profit for their first year by subtracting costs from revenue. Have then set numbers so profit comes out positive. Before doing this, have them complete learning module:",
                        contentModule: modules[2],
                    },
                    {
                        instructions: "Have your student calculate the profit for their first year by subtracting costs from revenue, set the number so profit comes out negative. Before doing this, have them complete learning module:",
                        contentModule: modules[3],
                    },
                    {
                        instructions: "Have your student calculate the profit for their first year",
                    },
                    {
                        instructions: "Have your student record their work for the math of their business on one sheet of paper, and take a photo of it",
                        artifact: "photo",
                    },
                ],
            },
            {
                title: "Advertisement",
                steps: [
                    {
                        instructions: "Tell your student they need to come up with an advertisement for their business. Brainstorm some ideas with them for a written and hand-drawn advertisement.",
                    },
                    {
                        instructions: "They first need to write a paragraph to act as a sales pitch to convince customers to buy their product. Before writing this, complete this learning module:",
                        contentModule: modules[4],
                    },
                    {
                        instructions: "Write a paragraph to act as a sales pitch",
                    },
                    {
                        instructions: "Tell your student the final step of their advertisement is to draw an illustration of their store or product to include with the written paragraph. Before doing this, complete learning module:",
                        contentModule: modules[5],
                    },
                    {
                        instructions: "Design and draw an illustration to go with the advertisement for your business",
                    },
                    {
                        instructions: "Take a photo of the advertisement your student has made",
                        artifact: "photo",
                    },
                ],
            },
        ],
        reflect: "Have your student review their work from this project and discuss what went well and what did not. See if they would like to change anything artifacts or create new ones. Upload any new artifacts they create.",
    },
    {
        id: 1 ,
        title: "Wild Animal Habitat Design",
        contentModules: [
            modules[1],
            modules[5],
            modules[6],
            modules[7],
        ],
        challenge: "Design a habitat that could shelter a rescued wild animal, and plan what meals it will get. The animal can be anything you like, living or extinct. Share your design with your peers on Primer.",
        objectives:[
            "Student is self-starting, deciding on an animal and coming up with ideas for its habitat",
            "Student pays attention to detail, and remembers to provide everything the animal needs to live and be happy",
        ],
        supplies: "Paper, Colored Pencils",
        prepare: "Talk over the objectives with your student, and ensure you have the needed supplies.",
        parts:[
            {
                title: "Animal Research",
                steps: [
                    {
                        instructions: "Tell your student the next step is to learn about different animals, their habitats and what they eat. Complete the following content module:",
                        contentModule: modules[6],
                    },
                    {
                        instructions: "(Optional) Visit a zoo or aquarium, and have your student take notes on the habitats of 10 different animals. If there are zoo personal to talk with, have your student ask them about animal's diets.",
                    },
                    {
                        instructions: "Determine which animal you will design a habitat for, and gather any resources needed to learn about that animal's habitat and diet. Record a photo of your research.",
                    },
                ],
            },
            {
                title: "Habitat Design",
                steps: [
                    {
                        instructions: "Have your student plan out the habitat for their chosen animal. Consider access to shelter, water, food, and the number of animals per habitat.",
                    },
                    {
                        instructions: "Tell your student their next task will be to draw their habitat, but first they should comeplete a module on illustration.",
                        contentModule: modules[5],
                    },
                    {
                        instructions: "Have your student draw the habitat they've designed and plan",
                    },
                ],
            },
            {
                title: "Food Math",
                steps: [
                    {
                        instructions: "Explain to your student that they need to plan how much food to get for their habitat. When an one of your animals eats their share of the food, what fraction is left? Before working through this, complete this learning module on fractions:",
                        contentModule: modules[7],
                    },
                    {
                        instructions: "Your animals need to be kept alive by providing them enough food! Decide a number of boxes of food you recieve each day, with the number of animals in your habitat, what fraction will each animal get?",
                    },
                    {
                        instructions: "Tell your student they need to figure how out how many boxes of food to get if they get more animals. First, complete this module on multiplication:",
                        contentModule: modules[1],
                    },
                    
                    {
                        instructions: "Have your student ork out on a sheet of paper, along with the work on fractions, how much food to get if they double, tripple, and quadruple the number of animals in their habitat. Document this with a photo of the math work.",
                    },
                ],
            },
        ],
        reflect: "Have your student review their work from this project and discuss what went well and what did not. See if they would like to change anything artifacts or create new ones. Upload any new artifacts they create.",
    },
    {
        id: 2,
        title: "Investigative Journalist: New Space",
        contentModules: [
            modules[2],
        ]
    },
    {
        id: 3,
        title: "Engineering Challenge: Gondola Express",
        contentModules: [
            modules[2],
        ]
    },
    {
        id: 4,
        title: "Government Agent: Code Breaker",
        contentModules: [
            modules[2],
        ]
    },
]

