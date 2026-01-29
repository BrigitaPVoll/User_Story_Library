
name: "User Story"
description: "A FAIR use case describing who needs what data, for what purpose, and under what conditions."
title: "User Story: "
labels: ["user-story"]

body:
  - type: markdown
    attributes:
      value: |
        Please describe your FAIR user story.
        A good user story clearly states **who**, **what**, and **why**.

  - type: input
    id: role
    attributes:
      label: "As a…"
      description: "Who is the user?"
      placeholder: "e.g. data steward, researcher, policy analyst"
    validations:
      required: true

  - type: input
    id: goal
    attributes:
      label: "I want to…"
      description: "What do you want to achieve?"
      placeholder: "e.g. reuse datasets from multiple repositories"
    validations:
      required: true

  - type: input
    id: benefit
    attributes:
      label: "So that I can…"
      description: "Why is this important?"
      placeholder: "e.g. compare results across domains and time"
    validations:
      required: true

  - type: textarea
    id: context
    attributes:
      label: "Additional context"
      description: "Any extra information that helps understand the use case"
      placeholder: "Add any other context about the user story here."
    validations:
      required: false

  # ✅ Proper Yes / No selector (single choice)
  - type: dropdown
    id: contact
    attributes:
      label: "Can we contact you to participate in a future EOSC-funded project on FAIR data management?"
      options:
        - "Yes"
        - "No"
    validations:
      required: true
