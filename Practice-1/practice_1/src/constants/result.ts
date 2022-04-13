import { CircleListProps } from "../types/circle"

const RESULT_TEXT = "Just look to the statistics we have generate the past year."

const RESULT_TOTAL = "The past few years have seen a dramatic change in the public perception of cosmetic surgery."

const RESULT_FREE = "Can you imagine what we will be downloading in another twenty years?"

const RESULT_UNIQUE = "WordPress, the premier free open-source blogging utility, has gone through several upgrades in its life"

const RESULT: CircleListProps[] = [
  {
    number1: 74,
    number2: 98,
    title: "Total conversion",
    content: RESULT_TOTAL,
    className: "74-98",
  },
  {
    number1: 39,
    number2: 75,
    title: "Free downloads",
    content: RESULT_FREE,
    className: "39-75",
  },
  {
    number1: 81,
    number2: 15,
    title: "Unique visitors",
    content: RESULT_UNIQUE,
    className: "81-15",
  }
]

export { RESULT_TEXT, RESULT_TOTAL, RESULT_FREE, RESULT_UNIQUE, RESULT }

