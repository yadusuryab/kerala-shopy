import { FaqAccordion } from "@/components/ui/faq-chat-accordion";

const defaultData: any = [
  {
    question: "What are your store hours?",
    answer: "We're open 24/7 on Instagram! You can place orders anytime.",
    icon: "🛍️",
    iconPosition: "right",
    id: 1,
  },
  {
    question: "How do I place an order?",
    answer:
      "Just view the product and click on order now. We'll confirm availability and payment details.",
    id: 2,
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept UPI, bank transfers, and digital wallets. Let us know your preferred method!",
    id: 3,
  },
  {
    question: "How long does shipping take?",
    answer:
      "Orders are processed within 1-2 days, and delivery usually takes 3-7 days, depending on your location.",
    icon: "🚚",
    iconPosition: "left",
    id: 4,
  },
 
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, we'll send you a tracking link via DM.",
    icon: "📦",
    iconPosition: "right",
    id: 6,
  },

];

function Faq() {
  return (
    <FaqAccordion
      data={defaultData}
      timestamp="Frequently Asked Questions."
      className="mb-10 md:mx-20"
    />
  );
}

export { Faq };
