import type { Publication } from "@/types";

export const SELF_AUTHOR = "Ekramul Alam Esham";

export const PUBLICATIONS: Publication[] = [
  {
    id: "benhallueval",
    title:
      "BenHalluEval: A Multi-Task Hallucination Evaluation Framework for Large Language Models on Bengali",
    shortTitle: "BenHalluEval",
    venue: "AACL-IJCNLP 2026",
    venueDetail: "Main Conference",
    year: "2026",
    role: "Co-first author",
    authors: [
      "Shefayat E Shams Adib*",
      "Ahmed Alfey Sani*",
      "Ekramul Alam Esham*",
      "Ajwad Abrar",
      "Ishmam Tashdeed",
      "Md Taukir Azam Chowdhury",
    ],
    summary:
      "Bengali is the sixth most spoken language in the world, yet no prior work had systematically evaluated LLM hallucination in it. BenHalluEval is the first dedicated hallucination benchmark for Bengali, covering generative QA, Bangla-English code-mixed QA, summarization and reasoning.",
    contributions: [
      "Built 12,000 hallucinated candidates across twelve task-specific hallucination types from three Bengali datasets.",
      "Evaluated seven reasoning, multilingual and Bengali-centric LLMs under a dual-track protocol measuring false positives and detection rate separately.",
      "Proposed BenHalluScore, a calibration metric that penalizes both failure modes and resists uniform response bias.",
      "Showed that chain-of-thought prompting shifts response distributions without consistently improving hallucination discrimination.",
    ],
    stats: [
      { label: "Candidates", value: "12K" },
      { label: "LLMs evaluated", value: "7" },
      { label: "Tasks", value: "4" },
      { label: "Hallucination types", value: "12" },
    ],
    tags: ["Hallucination", "Low-resource NLP", "Benchmarking", "Bengali"],
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2605.31483" },
      { label: "PDF", url: "https://arxiv.org/pdf/2605.31483" },
    ],
  },
  {
    id: "medical-qa",
    title:
      "Assessing Large Language Models for Medical QA: Zero-Shot and LLM-as-a-Judge Evaluation",
    shortTitle: "LLMs for Medical QA",
    venue: "IEEE ICCIT 2025",
    venueDetail: "pp. 3081–3086",
    year: "2025",
    role: "Co-author",
    authors: [
      "Shefayat E Shams Adib",
      "Ahmed Alfey Sani",
      "Ekramul Alam Esham",
      "et al.",
    ],
    summary:
      "A comparative study of how well open and proprietary LLMs answer real patient questions without fine-tuning, using the iCliniq dataset of roughly 38,000 medical Q&A pairs, scored with lexical metrics and an LLM-as-a-Judge protocol.",
    contributions: [
      "Benchmarked Llama 3 (3B to 70B), Llama 4 Maverick and GPT-5-mini in a zero-shot setting.",
      "Combined BLEU and ROUGE with LLM-as-a-Judge scoring to look past surface-level overlap.",
      "Found that larger models such as Llama 3.3 70B lead, while efficient models like Llama 4 Maverick 17B stay competitive.",
    ],
    stats: [
      { label: "Q&A pairs", value: "38K" },
      { label: "LLMs evaluated", value: "5" },
      { label: "Largest model", value: "70B" },
      { label: "Fine-tuning (zero-shot)", value: "0" },
    ],
    tags: ["Medical QA", "LLM-as-a-Judge", "Evaluation"],
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2602.14564" },
      {
        label: "IEEE Xplore",
        url: "https://ieeexplore.ieee.org/author/135280789113584",
      },
      {
        label: "Code",
        url: "https://github.com/EshaAam/Evaluation_of_LLMs_on_Medical_QNA_based_on_Icliniq_Dataset-",
      },
    ],
  },
];
