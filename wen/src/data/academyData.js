export const academyData = {
    curriculums: [
        { id: 'ib-dp', name: 'IB Diploma Programme', subjects: ['math-aa', 'physics', 'business-man'] },
        { id: 'igcse', name: 'IGCSE', subjects: ['math-0580', 'combined-sci'] },
    ],
    subjects: {
        'math-aa': {
            id: 'math-aa',
            name: 'Mathematics: Analysis and Approaches',
            level: 'HL/SL',
            topics: [
                { id: 'aa-1', title: 'Number and Algebra', subtopics: ['Arithmetic Sequences', 'Logs', 'Binomial Expansion'] },
                { id: 'aa-2', title: 'Functions', subtopics: ['Composite Functions', 'Inverses', 'Transformations'] },
                { id: 'aa-3', title: 'Geometry and Trigonometry', subtopics: ['Law of Sines', 'Radians', 'Identity Proofs'] },
                { id: 'aa-4', title: 'Statistics and Probability', subtopics: ['Normal Distribution', 'Correlation', 'Conditional Probability'] },
                { id: 'aa-5', title: 'Calculus', subtopics: ['Differentiation', 'Integration', 'Kinematics'] },
            ]
        }
    },
    questions: [
        {
            id: 'Q-AA-501',
            subjectId: 'math-aa',
            topicId: 'aa-5',
            subtopic: 'Differentiation',
            difficulty: 'Medium',
            difficultyLevel: 2, // 1: Easy, 2: Medium, 3: Hard (Revision Ladder)
            title: 'The Chain Rule and Tangents',
            marks: 6,
            year: '2023',
            session: 'May',
            paper: 'Paper 1',
            questionText: 'Given f(x) = ln(3x² + 2), find the equation of the tangent to the curve at the point where x = 1.',
            steps: [
                {
                    description: 'Find the derivative of f(x) using the Chain Rule.',
                    working: "f'(x) = [1 / (3x² + 2)] * d/dx(3x² + 2) = 6x / (3x² + 2)",
                    hint: 'Remember d/dx[ln(u)] = (1/u) * du/dx'
                },
                {
                    description: 'Substitute x = 1 into f(x) and f\'(x) to find the point and gradient.',
                    working: "f(1) = ln(3(1)² + 2) = ln(5)\nf'(1) = 6(1) / (3(1)² + 2) = 6/5",
                },
                {
                    description: 'Use the point-gradient formula: y - y₁ = m(x - x₁).',
                    working: "y - ln(5) = (6/5)(x - 1)\ny = (6/5)x - 6/5 + ln(5)",
                }
            ],
            videoUrl: 'https://example.com/videos/diff-chain-rule',
            markScheme: [
                { point: 'Correct application of chain rule', marks: 2 },
                { point: 'Calculation of f(1) and f\'(1)', marks: 2 },
                { point: 'Final equation in requested form', marks: 2 }
            ]
        },
        {
            id: 'Q-AA-201',
            subjectId: 'math-aa',
            topicId: 'aa-2',
            subtopic: 'Inverses',
            difficulty: 'Hard',
            difficultyLevel: 3,
            title: 'Domain and Range of Inverse Functions',
            marks: 8,
            year: '2022',
            session: 'Nov',
            paper: 'Paper 2',
            questionText: 'Let f(x) = e^(2x) - 4 for x ∈ ℝ, x ≥ 0. Find f⁻¹(x) and state its domain.',
            steps: [
                {
                    description: 'Swap x and y and solve for y.',
                    working: "x = e^(2y) - 4\nx + 4 = e^(2y)\nln(x + 4) = 2y\ny = 0.5 * ln(x + 4)",
                    hint: 'The domain of the inverse is the range of the original.'
                },
                {
                    description: 'Determine the range of f(x) to find the domain of f⁻¹(x).',
                    working: "f(0) = e^0 - 4 = -3. Since f is increasing, range is [-3, ∞).",
                },
                {
                    description: 'Final result.',
                    working: "f⁻¹(x) = 0.5 * ln(x + 4), Domain: x ≥ -3",
                }
            ],
            markScheme: [
                { point: 'Swapping x and y correctly', marks: 1 },
                { point: 'Isolating e^(2y)', marks: 2 },
                { point: 'Correct use of logarithms', marks: 2 },
                { point: 'Correct domain identified from range', marks: 3 }
            ]
        }
    ],
    flashcards: [
        {
            id: 'F-AA-1',
            topic: 'Calculus',
            front: 'Derivative of logₐ(x)?',
            back: '1 / (x * ln(a))'
        },
        {
            id: 'F-AA-2',
            topic: 'Calculus',
            front: 'Integration by parts formula?',
            back: '∫ u dv = uv - ∫ v du'
        }
    ],
    concepts: [
        {
            id: 'C-AA-1',
            topic: 'Differentiation',
            title: 'The Product Rule',
            videoUrl: 'https://example.com/concepts/product-rule',
            summary: 'Used when differentiating two functions multiplied together: (uv)\' = u\'v + uv\''
        }
    ]
};
