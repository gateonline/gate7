
const questions = [

    // Q1 — MCQ — 1 MARK
    {
        question: "For a polydisperse polymer, the viscosity-average molecular weight (M̅v) becomes equal to the weight-average molecular weight (M̅w), when the Mark–Houwink constant a is ________. (2026)",
        options: ["0.1", "0.5", "0.7", "1.0"],
        answer: 3,
        type: "MCQ",
        marks: 1
    },

    // Q2 — MCQ — 1 MARK
    {
        question: "Interfacial polymerization can be used to prepare:",
        options: [
            "Nylon 6",
            "Nylon 66",
            "Polyacrylonitrile",
            "Poly(butyl acrylate)"
        ],
        answer: 1,
        type: "MCQ",
        marks: 1
    },

    // Q3 — MCQ — 1 MARK
    {
        question: "In Ziegler–Natta polymerization, hydrogen (H₂) is deliberately introduced into the reactor primarily to:",
        options: [
            "Increase the molecular weight of the polymer",
            "Act as a chain-transfer agent, controlling (lowering) the molecular weight",
            "Activate the catalyst",
            "Improve tacticity"
        ],
        answer: 1,
        type: "MCQ",
        marks: 1
    },

    // Q4 — MCQ — 1 MARK
    {
        question: "Ring-opening metathesis polymerization (ROMP) of a cyclic olefin such as norbornene:",
        options: [
            "Proceeds by a step-growth condensation releasing water",
            "Is a chain polymerization driven by relief of ring strain, using a metal–carbene catalyst, retaining one double bond per repeat unit",
            "Gives a fully saturated backbone",
            "Cannot be controlled to give living behavior"
        ],
        answer: 1,
        type: "MCQ",
        marks: 1
    },

    // Q5 — MSQ — 1 MARK
    {
        question: "A polymer sample is found to have a polydispersity index (Đ = M̅w/M̅n) very close to 1.05. Which polymerization mechanism(s) are consistent with this? [MSQ]",
        options: [
            "Living anionic polymerization",
            "Conventional free-radical polymerization",
            "Metallocene single-site catalysis",
            "Controlled radical polymerization (RAFT/ATRP)"
        ],
        correctAnswers: [0, 2, 3],
        type: "MSQ",
        marks: 1
    },

    // Q6 — MCQ — 1 MARK
    {
        question: "The Mark–Houwink equation relates intrinsic viscosity to viscosity-average molecular weight. When the Mark–Houwink constant a is equal to 1.0, the relationship between viscosity-average molecular weight (M̅v) and weight-average molecular weight (M̅w) becomes:",
        options: [
            "M̅v < M̅w",
            "M̅v > M̅w",
            "M̅v ≠ M̅w",
            "M̅v = M̅w"
        ],
        answer: 3,
        type: "MCQ",
        marks: 1
    },

    // Q7 — MSQ — 1 MARK
    {
        question: "Which of the following polymers is/are prone to hydrolytic degradation? [MSQ] (2026)",
        options: [
            "Poly(ethylene terephthalate)",
            "Polypropylene",
            "Poly(lactic acid)",
            "Polycaprolactone"
        ],
        correctAnswers: [0, 2, 3],
        type: "MSQ",
        marks: 1
    },

    // Q8 — MCQ — 1 MARK
    {
        question: "Select the correct option to match the polymer to its major polymeric constituent. (2026)\n\nP. Natural rubber\nQ. Gutta-percha\nR. Neoprene\nS. Butyl rubber\n\nI. Polyisobutylene\nII. Polychloroprene\nIII. trans-1,4-polyisoprene\nIV. cis-1,4-polyisoprene",
        options: [
            "P–IV; Q–III; R–I; S–II",
            "P–IV; Q–III; R–II; S–I",
            "P–II; Q–IV; R–I; S–III",
            "P–II; Q–IV; R–III; S–I"
        ],
        answer: 1,
        type: "MCQ",
        marks: 1
    },

    // Q9 — MCQ — 1 MARK
    {
        question: "Resol is produced by reaction of ________. (2026)",
        options: [
            "Phenol with an excess of formaldehyde in the presence of a base catalyst",
            "Formaldehyde with an excess of phenol in the presence of a base catalyst",
            "Phenol with an excess of formaldehyde in the presence of an acid catalyst",
            "An equimolar mixture of phenol and formaldehyde at neutral pH"
        ],
        answer: 0,
        type: "MCQ",
        marks: 1
    },

    // Q10 — MCQ — 1 MARK
    {
        question: "Select the correct option to match the polymer to its most suitable monomer(s). (2026)",
        image: "q10.png",
        options: [
            "P–I; Q–II; R–III; S–IV",
            "P–II; Q–IV; R–III; S–I",
            "P–III; Q–I; R–IV; S–II",
            "P–IV; Q–III; R–II; S–I"
        ],
        answer: 1,
        type: "MCQ",
        marks: 1
    },

    // Q11 — MCQ — 2 MARKS
    {
        question: "Select the correct option to match the initiator(s) with the method of polymerization. (2026)",
        image: "q11.png",
        options: [
            "P–II; Q–III; R–IV; S–I",
            "P–IV; Q–I; R–II; S–III",
            "P–III; Q–II; R–IV; S–I",
            "P–II; Q–I; R–IV; S–III"
        ],
        answer: 3,
        type: "MCQ",
        marks: 2
    },

    // Q12 — NAT — 2 MARKS
    {
        question: "An equimolar mixture of terephthalic acid and butylene glycol was taken to synthesize a polyester. The reaction was stopped at 99.6% conversion of the acid monomer. The weight-average molecular weight (M̅w) of the synthesized polyester is ______ g/mol (rounded to the nearest integer). (2026)",
        type: "NAT",
        answer: 54955,
        tolerance: 1,
        marks: 2
    },

    // Q13 — MCQ — 2 MARKS
    {
        question: "Crystallization is favored in polymer melts when the chain entanglement is ______ and only polymers with ______ molecular arrangement can crystallize.",
        options: [
            "Maximum, ordered",
            "Minimum, random",
            "Maximum, random",
            "Minimum, ordered"
        ],
        answer: 3,
        type: "MCQ",
        marks: 2
    },

    // Q14 — MCQ — 2 MARKS
    {
        question: "Weather resistance of high-impact polystyrene can be improved by blending polystyrene with:",
        options: [
            "Styrene-butadiene rubber",
            "Natural rubber",
            "Ethylene propylene rubber",
            "Nitrile rubber"
        ],
        answer: 2,
        type: "MCQ",
        marks: 2
    },

    // Q15 — MCQ — 2 MARKS
    {
        question: "Match the polymer with the most suitable monomer combinations from which it is synthesized.\n\nP. Polyurethane\nQ. Epoxy\nR. Polyimide\nS. Polyester\n\n1. Maleic acid and propylene glycol\n2. Pyromellitic anhydride and p,p′-diaminodiphenyl ether\n3. Epichlorohydrin and bisphenol A\n4. Hexamethylene diisocyanate and tetramethylene glycol",
        options: [
            "P–4; Q–3; R–2; S–1",
            "P–4; Q–2; R–3; S–1",
            "P–2; Q–1; R–4; S–3",
            "P–2; Q–3; R–1; S–4"
        ],
        answer: 0,
        type: "MCQ",
        marks: 2
    },

    // Q16 — MCQ — 2 MARKS
    {
        question: "Thermoplastic polyurethane and polyamide 6 both contain amide/amide-like linkages, but compared with polyurethane, polyamide 6 shows a higher melting point due to:",
        options: [
            "Higher molecular rigidity",
            "Higher degree of branching",
            "Lower molecular rigidity",
            "Lower degree of crosslinking"
        ],
        answer: 0,
        type: "MCQ",
        marks: 2
    },

    // Q17 — MSQ — 2 MARKS
    {
        question: "In a set of copolymerization reactions, the following monomer reactivity ratios were found. Which option(s) correctly identify the type of copolymerization corresponding to each case? [MSQ] (2025)\n\nCase I: r₁ = 0.1, r₂ = 10\nCase II: r₁ = 0.003, r₂ = 0.02\nCase III: r₁ = 3.4, r₂ = 5.6\nCase IV: r₁ = 51, r₂ = 0.01",
        options: [
            "I – Ideal copolymerization",
            "II – Azeotropic copolymerization",
            "III – Block-forming tendency",
            "IV – Alternating copolymerization"
        ],
        correctAnswers: [0, 1, 2],
        type: "MSQ",
        marks: 2
    },

    // Q18 — NAT — 2 MARKS
    {
        question: "The density of an amorphous polymer is 0.77 g/cm³ and that of its crystalline counterpart is 0.99 g/cm³. The density of a semi-crystalline sample is 0.88 g/cm³. Calculate the degree of crystallinity on a weight basis, in percent. Round off to two decimal places. (2024)",
        type: "NAT",
        answer: 56.25,
        tolerance: 0.01,
        marks: 2
    },

    // Q19 — NAT — 2 MARKS
    {
        question: "Titration was used to determine the molar mass of two linear monodisperse polymers A and B. Both polymers have the same repeat unit and acid end-groups. First, 10 g of polymer A was titrated with 5 mL of 0.1 M alkali solution. In a separate experiment, 5 g of polymer B was titrated with 5 mL of 0.1 M alkali solution. Assuming one titratable acid end-group per polymer chain, calculate the ratio of the molar mass of A to the molar mass of B. Round off to one decimal place. (2024)",
        type: "NAT",
        answer: 2.0,
        tolerance: 0.1,
        marks: 2
    },

    // Q20 — NAT — 2 MARKS
    {
        question: "A poly(ethylene) sample has specific volume v = 1.042 × 10⁻³ m³/kg. The specific volume of its crystalline fraction is vc = 0.989 × 10⁻³ m³/kg, and that of its amorphous fraction is va = 1.160 × 10⁻³ m³/kg. Calculate the percentage crystallinity based on mass fraction, rounded to the nearest integer. (2024)",
        type: "NAT",
        answer: 69,
        tolerance: 1,
        marks: 2
    },

    // Q21 — NAT — 2 MARKS
    {
        question: "Polyamide 66 is prepared by condensation polymerization of 0.08 mol hexamethylenediamine with 0.08 mol adipic acid. At the end of the reaction, the product contains 0.002 mol of unreacted carboxylic acid groups. The repeat-unit molecular weight is 226 g/mol. Calculate the number-average molecular weight (M̅n) in g/mol, rounded to the nearest integer. (2024)",
        type: "NAT",
        answer: 17854,
        tolerance: 1,
        marks: 2
    },

    // Q22 — NAT — 2 MARKS
    {
        question: "A monodisperse polymer sample of molecular weight 10,000 g/mol is mixed with another monodisperse sample of the same polymer of molecular weight 50,000 g/mol. The total mass of the mixture is 1,000 g and the total number of moles of polymer chains is 0.04 mol. Calculate the weight-average molecular weight (M̅w) in g/mol, rounded to the nearest integer.",
        type: "NAT",
        answer: 40000,
        tolerance: 1,
        marks: 2
    },

    // Q23 — NAT — 2 MARKS
    {
        question: "PVDF was quenched from the melt in one case and slowly cooled at 10 °C/min in another. The slowly cooled PVDF has 60% crystallinity. The heat of fusion of the quenched PVDF is 0.5 times that of the slowly cooled PVDF. If the heat of fusion of 100% crystalline PVDF is 100 J/g, calculate the percentage crystallinity of the quenched PVDF. Give an integer answer.",
        type: "NAT",
        answer: 30,
        tolerance: 1,
        marks: 2
    }

];
