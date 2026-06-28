import { FiBook, FiSearch, FiShield } from "react-icons/fi";

export const NAVBAR = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Featured", href: "#featured" },
];

export const HOWITWORKS = [
  {
    step: "1",
    title: "Sign in",
    desc: "Sign in with your school email.",
  },
  {
    step: "2",
    title: "Find a book",
    desc: "Search for books and other library resources.",
  },
  {
    step: "3",
    title: "Read or borrow",
    desc: "Read online or borrow a book from the library.",
  },
];

export const FEATURES = [
  {
    icon: FiSearch,
    title: "Easy Search",
    desc: "Find books, research papers, and other library resources in one place.",
  },
  {
    icon: FiBook,
    title: "Read Anywhere",
    desc: "Read digital books and resources anytime with your school account.",
  },
  {
    icon: FiShield,
    title: "Trusted Resources",
    desc: "Access approved books, research papers, and learning materials.",
  },
];
